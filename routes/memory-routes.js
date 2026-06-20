const express = require("express")
const router = express.Router()
const memoryController = require("../controllers/memory-controller")
const authMiddleware = require("../middleware/auth-middleware")


router.get("/dashboard", authMiddleware, memoryController.showDashboard)
router.get("/memories", memoryController.getMemoriesByMonth)
router.post("/memories", memoryController.addMemory)

module.exports = router