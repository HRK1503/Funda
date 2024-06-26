const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Funda';

exports.createuser = async (req, res) => {
    try {
        // Checking for duplicate user
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User with this email already exists" });
        }

        // Create user

        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        });


        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json(authToken);
    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.userlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(400).json({ error: "Please login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            console.log("Password mismatch");

            return res.status(400).json({ error: "Please login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }

        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json(authToken);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
}

