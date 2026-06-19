const bcrypt = require("bcrypt")

const User = require("../models/user-model")

exports.showLanding = (req,res) => {
    res.render("landing")
}

exports.showRegister = (req,res) => {
    res.render("register",{ error: ""})
}

exports.showLogin = (req,res) => {
    res.render("login")
}

exports.register = async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    let error = ""

    if (!username || !password) {
        error += "Missing field(s): Username/Password"
        return res.render("register", {error})
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = {username: username, password: hashedPassword}

    await User.createUser(newUser)

    return res.redirect("/login")

}

exports.login = async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    let error = ""
    const isValidUser = await User.findByUsername(username)

    if (!isValidUser) {
        return res.render("login", {error:"Invalid username or password"})
    }

    const isMatch = await bcrypt.compare(password, isValidUser.password)

    if (!isMatch) {
        return res.render("login", { error: "Invalid username or password" })
    }

    req.session.user = isValidUser

    return res.redirect("/dashboard")
}

exports.logOut = async (req,res) => {
    return req.session.destroy(() => {
        res.redirect("/")
    })
}