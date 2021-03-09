const User = require('../models/Users')

const isNullOrUndefined = (val) => val === null || val === undefined || val === '';

module.exports = {

    // for Testing...
    test: (req, res) => {
        res.send("Testing...")
    },

    // for signup
    signup: async(req, res) => {
        const { username, password } = req.body
        const existingUser = await User.findOne({ username, })
        if (isNullOrUndefined(existingUser)) {
            const newUser = new User({
                username,
                password,
            })
            await newUser.save()
            res.status(201).send({ success: "Signup Successfully" })
        }
        else {
            res.status(400).send({
                err: `USername ${username} already exists. Please choose another.`,
            })
        }
    },

    // for login
    login: async (req, res) => {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username, })
        if (isNullOrUndefined(existingUser)) {
            res.status(401).send({
                err: "Username does not exist."
            })
        }
        else {
            const pwd = existingUser.password
            if (password == pwd) {
                res.status(200).send({
                    success: "Logged in"
                })
            }
            else {
                res.status(401).send({
                    err: "Password id incorrect."
                })
            }
        }
    }
}