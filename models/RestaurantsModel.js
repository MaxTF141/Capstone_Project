// ==========PRODUCTS==========
const sql = require('./Database.js')

const Restaurants = function(restaurant) {
    this.restaurantName = restaurant.restaurantName;
    this.restaurantDescription = restaurant.restaurantDescription;
    this.imgUrl = restaurant.imgUrl;
    this.galleryImgUrl = restaurant.galleryImgUrl;
    this.galleryImgUrl2 = restaurant.galleryImgUrl2;
    this.galleryImgUrl3 = restaurant.galleryImgUrl3;
    this.hoursOfOperation = restaurant.hoursOfOperation;
    this.address = restaurant.address;
    this.rating = restaurant.rating;
    this.latitude = restaurant.latitude;
    this.longitude = restaurant.longitude;
};

Restaurants.create = (newRestaurant, result) => {
  sql.query("INSERT INTO Restaurants SET ?", newRestaurant, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created restaurant: ", { id: res.insertId, ...newRestaurant });
    result(null, { id: res.insertId, ...newRestaurant });
  });
};

Restaurants.findById = (id, result) => {
  sql.query(`SELECT * FROM Restaurants WHERE restId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found restaurant: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Restaurants with the id
    result({ kind: "not_found" }, null);
  });
};

Restaurants.getAll = (restaurantName, result) => {
  let query = "SELECT * FROM Restaurants";

  if (restaurantName) {
    query += ` WHERE restaurantName LIKE '%${restaurantName}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Restaurants: ", res);
    result(null, res);
  });
};

Restaurants.updateById = (id, restaurant, result) => {
    sql.query('UPDATE Restaurants SET restaurantName = ?, restaurantDescription = ?, imgUrl = ?, galleryImgUrl = ?, galleryImgUrl2 = ?, galleryImgUrl3 = ?, hoursOfOperation = ?, location = ?, address = ?, rating = ?, latitude = ?, longitude = ?  WHERE restId = ?', [restaurant.restaurantName, restaurant.restaurantDescription, restaurant.imgUrl, restaurant.galleryImgUrl, restaurant.galleryImgUrl2, restaurant.galleryImgUrl3, restaurant.hoursOfOperation, restaurant.location, restaurant.address, restaurant.rating, restaurant.latitude, restaurant.longitude, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Restaurants with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated restaurant: ", { id: id, ...restaurant });
      result(null, { id: id, ...restaurant });
    }
  );
};

Restaurants.remove = (id, result) => {
  sql.query("DELETE FROM Restaurants WHERE restId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted restaurant with restId: ", id);
    result(null, res);
  });
};
module.exports = Restaurants;