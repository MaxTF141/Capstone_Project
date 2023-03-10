// ==========PRODUCTS==========
const sql = require('./Database.js')

const Bookings = function(booking) {
    this.bookingTime = booking.bookingTime;
    this.bookingDate = booking.bookingDate;
    this.numberGuests = booking.numberGuests;
    this.userId = booking.userId;
    this.restId = booking.restId;
    this.bookingId = booking.bookingId;
    this.quantity = booking.quantity;
};

Bookings.create = async (booking, result) => {
  await sql.query("INSERT INTO Cart (userId, restId, bookingId, quantity) values(?, ?, ?, ?)", [booking.userId, booking.restId, booking.bookingId, booking.quantity], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created cart");
    result(null, res)
  });
  sql.query(`INSERT INTO Bookings (bookingDate, bookingTime, numberGuests, userId, restId) VALUES (?, ?, ?, ?, ?)`, [booking.bookingDate, booking.bookingTime, booking.numberGuests, booking.userId, booking.restId], (err, res) => {
    if(err) {
      console.log(err);
      result(err, null);
    }
    console.log("Created a booking")
    result(null, res)
  })
};

Bookings.getAll = (id, result) => {
  sql.query('SELECT u.userId, r.restaurantName, r.restaurantDescription, r.location, b.bookingDate, b.bookingTime, b.numberGuests, c.quantity FROM Cart c INNER JOIN Restaurants r ON c.restId = r.restId INNER JOIN Users u ON c.userId = u.userId INNER JOIN Bookings b ON c.restId = b.restId WHERE u.userId = ?;', [id] ,(err, res) => {
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
    sql.query('UPDATE Booking SET bookingTime = ?, bookingDate = ?, numberGuests = ? WHERE bookingId = ?', [booking.bookingTime,booking.bookingDate, booking.numberGuests, booking. id],
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

      console.log("updated cart: ", { id: id, ...cart });
      result(null, { id: id, ...cart });
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

Bookings.removeAll = (result) => {
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