const bcrypt = require("bcrypt")
const User = require("../models/user-model")

exports.showLanding = (req, res) => {
    res.render("landing")
}

exports.showRegister = (req, res) => {
    res.render("register")
}

exports.register = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = { username: username, password: hashedPassword }

        await User.createUser(newUser)
        return res.redirect("/login")
    } catch (error) {
        console.error(error)
        res.status(500).send("Something went wrong, please try again")
    }
}

exports.showLogin = (req, res) => {
    res.render("login", { error: "" })
}

exports.login = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const isValidUser = await User.findByUsername(username)

        if (!isValidUser) {
            return res.render("login", { error: "Invalid username or password" })
        }

        const isMatch = await bcrypt.compare(password, isValidUser.password)

        if (!isMatch) {
            return res.render("login", { error: "Invalid username or password" })
        }

        req.session.user = isValidUser
        return res.redirect("/dashboard")
    } catch (error) {
        console.error(error)
        res.status(500).send("Something went wrong, please try again")
    }
}

exports.logOut = async (req, res) => {
    try {
        return req.session.destroy(() => {
            res.redirect("/")
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Something went wrong, please try again")
    }
}