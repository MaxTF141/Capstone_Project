const User = require("../models/UsersModel.js");

const { hash, compare, hashSync } = require('bcrypt');

const { createToken } = require('../middleware/AuthenticatedUser');

// Create and Save a new User
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    cellphoneNumber: req.body.cellphoneNumber,
    userEmail: req.body.userEmail,
    userPass: req.body.userPass,
    userRole: req.body.userRole,
    userProfile: req.body.userProfile,
  });

  user.userPass = await
    hash(user.userPass, 15);

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else {
      const jwt = createToken(user);
      res.cookie('authorization_token', jwt, {
        maxAge: 3600000,
        httpOnly: false,
        path: '/',
      });
      res.status(200).json({ message: "A user record was saved." })
    }
  });
};

exports.loginUser = async (req, res) => {
  const { emailAdd, userPass } = req.body;
  User.login(req.body, async (err, data) => {
    if (err) throw err;
    if ((!data.length) || (data == null)) {
      res.status(401).json({
        err:
          "You provide a wrong email address"
      });
    } else {
      await compare(userPass,
        data[0].userPass,
        (cErr, cResult) => {
          if (cErr) throw cErr;
          // Create a token
          const jwt = createToken({ emailAdd, userPass });
          // Saving
          res.cookie('authorization_token',
            jwt, {
            maxAge: 3600000000,
            httpOnly: true,
            path: '/',
            sameSite: 'none',
            secure: true
          })
          if (cResult) {
            const userData = data[0];
            const userId = userData.userId
            const userRole = userData.userRole
            res.status(200).json({
              message: 'Logged in',
              jwt,
              result: userData,
              userId,
              userRole
            })
          } else {
            res.status(401).json({
              err: 'You entered an invalid password or did not register. '
            })
          }
        })
    }
  })
};

exports.signOut = async (req, res) => {
  return res
    .clearCookie("authorization_token")
    .status(200)
    .json({ message: "Successfully logged out. Come again soon." });
}

// Retrieve all User from the database (with condition).
exports.findAll = (req, res) => {
  const firstName = req.query.firstName;

  User.getAll(firstName, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send({data});
  });
};

// Find a single User with a id
exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Update a User identified by the id in the request
exports.update = (req, res) => {
  let data = req.body;
  // Validate Request
  if (data.userPass !== null || data.userPass !== undefined) {
    data.userPass = hashSync(data.userPass, 15);
  } console.log(req.body);

  User.updateById(req.params.id, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with userId ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating User with userId " + req.params.id
        });
      }
    } else {
      res.send(data);
      console.log(`Update user with userId ${req.params.id}`)
    }
  }
  );
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with userId ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with userId " + req.params.id
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });

};