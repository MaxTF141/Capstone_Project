// ==========PRODUCTS==========
const sql = require('./Database.js')

const Restaurants = function(restaurant) {
    this.restaurantName = restaurant.restaurantName;
    this.restaurantDescription = restaurant.restaurantDescription;
    this.rating = restaurant.rating;
    this.hoursOfOperation = restaurant.hoursOfOperation;
    this.bookingDate = restaurant.bookingDate;
    this.bookingTime = restaurant.bookingTime;
    this.numberGuests = restaurant.numberGuests;
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
    sql.query('UPDATE Restaurants SET restaurantName = ?, restaurantDescription = ?, rating = ?, hoursOfOperation = ?, bookingDate = ?, bookingTime = ?, numberGuests = ? WHERE restId = ?', [restaurant.restaurantName, restaurant.restaurantDescription, restaurant.rating, restaurant.hoursOfOperation, restaurant.bookingDate, restaurant.bookingTime, restaurant.numberGuests, id],
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