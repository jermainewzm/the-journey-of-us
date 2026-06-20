
const Memory = require("../models/memory-model")

exports.showDashboard = (req,res) => {
    return res.render("dashboard", {username: req.session.user.username})
}

exports.addMemory = async (req,res) => {
    const title = req.body.title
    const description = req.body.description
    const date = req.body.date
    const imageUrl = req.body.imageUrl

    const dateObj = new Date(date)

    const month = dateObj.getMonth() + 1
    const year = dateObj.getFullYear()

    const memoryObj = {title: title,
                    description: description,
                    date: dateObj,
                    month: month,
                    year: year,
                    imageUrl : imageUrl
    }
    const newMemory = await Memory.createMemory(memoryObj)

    return res.json({message: "Memory added successfully!"})
}

exports.getMemoriesByMonth = async (req,res) => {
    const month = req.query.month
    const year = req.query.year

    const memories = await Memory.findByMonth(month,year)

    return res.json({memories})
}
