const sql = require("./Database.js");

// ==========USERS==========
const Users = function(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.cellphoneNumber = user.cellphoneNumber;
    this.userEmail = user.userEmail;
    this.userPass = user.userPass;
    this.userRole = user.userRole;
    this.userProfile = user.userProfile;
};


Users.create = (newUser, result) => {
  sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null,res)
    } 
  });
};

Users.login = (user , result) => {
  sql.query('SELECT userId, firstName, lastName, cellphoneNumber, userEmail, userPass, userRole, userProfile FROM Users WHERE userEmail = ?', [user.userEmail], async (err, res) => {
    if(err) {
      console.log('error:', err)
      result(err, null)
      return;
    } else {
      result(null, res)
    }
  })
}

Users.findById = (id, result) => {
  sql.query(`SELECT * FROM Users WHERE userId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Users with the id
    result({ kind: "not_found" }, null);
  });
};

Users.getAll = (firstName, result) => {
  let query = "SELECT * FROM Users";

  if (firstName) {
    query += ` WHERE firstName LIKE '%${firstName}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};

Users.updateById = (id, user, result) => {
    sql.query('UPDATE Users SET firstName = ?, lastName = ?, cellphoneNumber = ?, userEmail = ?, userPass = ?, userRole = ?, userProfile = ?, = ? WHERE userId = ?', [user.firstName, user.lastName, user.cellphoneNumber, user.userEmail, user.userPass, user.userRole, user.userProfile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Users with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

Users.remove = (id, result) => {
  sql.query("DELETE FROM Users WHERE userId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};
module.exports = Users;