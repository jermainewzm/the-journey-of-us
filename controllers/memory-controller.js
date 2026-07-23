const Memory = require("../models/memory-model")

exports.showDashboard = (req, res) => {
    res.render("dashboard", { username: req.session.user.username })
}

exports.addMemory = async (req, res) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const date = req.body.date
        const imageUrl = req.body.imageUrl

        const dateObj = new Date(date)

        const {month, year} = exports.getMonthYearFromDate(dateObj)
        

        const memoryObj = { title, description, date: dateObj, month, year, imageUrl }

        await Memory.createMemory(memoryObj)
        return res.json({ message: "Memory added successfully!" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Something went wrong, please try again" })
    }
}

exports.getMonthYearFromDate = (date) => {
    return {
        month: date.getMonth() + 1,
        year:  date.getFullYear()
    }
}

exports.getMemoriesByMonth = async (req, res) => {
    try {
        const month = req.query.month
        const year = req.query.year

        const memories = await Memory.findByMonth(month, year)
        return res.json({ memories })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Something went wrong, please try again" })
    }
}