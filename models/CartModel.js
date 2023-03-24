// ==========PRODUCTS==========
const sql = require('./Database.js')

const Bookings = function(booking) {
    // this.cartId = booking.cartId;
    this.bookingDate = booking.bookingDate;
    this.bookingTime = booking.bookingTime;
    this.numberGuests = booking.numberGuests;
    this.userId = booking.userId;
    this.restId = booking.restId;
};

Bookings.create = (booking, result) => {
  sql.query("INSERT INTO Cart (bookingDate, bookingTime, numberGuests, userId, restId) VALUES(?, ?, ?, ?, ?)", [booking.bookingDate, booking.bookingTime, booking.numberGuests, booking.userId, booking.restId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res)
    console.log("created cart");
  });
};

Bookings.getAll = (id, result) => {
  sql.query('SELECT c.car tId, u.userId, r.restaurantName, r.imgUrl, r.address, r.location, c.bookingDate, c.bookingTime, c.numberGuests FROM Cart c INNER JOIN Restaurants r ON c.restId = r.restId INNER JOIN Users u ON c.userId = u.userId WHERE u.userId = ?;', [id] ,(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Cart: ", res);
    result(null, res);
  });
};

Bookings.updateById = (id, booking, result) => {
    sql.query('UPDATE Cart SET bookingDate = ?, bookingTime = ?, numberGuests = ? WHERE cartId = ?', [booking.bookingDate, booking.bookingTime, booking.numberGuests, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Bookings with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated cart: ", { id: id });
      result(null, { id: id });
    }
  );
};

Bookings.remove = (id, result) => {
  sql.query("DELETE FROM Cart WHERE cartId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted cart with id: ", id);
    result(null, res);
  });
};

Bookings.removeAll = (id, result) => {
  sql.query('TRUNCATE TABLE Cart', (err, res) => {
    if(err) {
      console.log(err);
      result(err, null);
    }
    console.log("All values has been removed");
    result(null, res)
  })
} 
module.exports = Bookings;