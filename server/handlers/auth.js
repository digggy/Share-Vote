const jwt = require('jsonwebtoken');

const db = require("../models");

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        const {
            id,
            username
        } = user;

        // Generating the token for authentication
        const token = jwt.sign({
            id,
            username
        }, process.env.SECRET);

        // Setting the response status code and the json
        res.status(201).json({
            id,
            username,
            token
        });
    } catch (err) {
        if (err.code === 11000) {
            err.message = 'Username already taken';
        }
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const user = await db.User.findOne({
            username: req.body.username
        });

        const {
            id,
            username
        } = user;
        const valid = await user.comparePassword(req.body.password);

        if (valid) {

            // Generating the token for authentication only if the user vaild is true
            const token = jwt.sign({
                id,
                username
            }, process.env.SECRET);
            res.json({
                id,
                username,
                token
            });
        } else {
            throw new Error("Invalid Username/Password");
        }
    } catch (err) {
        err.message = 'Invalid Username/Password';
        next(err);
    }
};