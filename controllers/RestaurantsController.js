const Restaurant = require("../models/RestaurantsModel.js");

// Create and Save a new Restaurant
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Add a Restaurant
    const restaurant = new Restaurant({
        restaurantName: req.body.restaurantName,
        restaurantDescription: req.body.restaurantDescription,
        imgUrl: req.body.imgUrl,
        galleryImgUrl: req.body.galleryImgUrl,
        galleryImgUrl2: req.body.galleryImgUrl2,
        galleryImgUrl3: req.body.galleryImgUrl3,
        location: req.body.location,
        address: req.body.address,
        rating: req.body.rating,
        hoursOfOperation: req.body.hoursOfOperation
    });

    // Save Restaurant in the database
    Restaurant.create(restaurant, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Restaurant."
            });
        else res.send(data);
    });
};

// Retrieve all Restaurant from the database (with condition).
exports.findAll = (req, res) => {
    const restaurantName = req.query.restaurantName;

    Restaurant.getAll(restaurantName, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving restaurant."
            });
        else res.send(data);
    });
};

// Find a single Restaurant with a id
exports.findOne = (req, res) => {
    Restaurant.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Restaurant with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Restaurant with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Update a Restaurant identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Restaurant.updateById(
        req.params.id,
        new Restaurant(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Restaurant with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Restaurant with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Restaurant with the specified id in the request
exports.delete = (req, res) => {
    Restaurant.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Restaurant with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Restaurant with id " + req.params.id
                });
            }
        } else res.send({ message: `Restaurant was deleted successfully!` });
    });

};