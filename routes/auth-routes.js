const express = require("express")

const router = express.Router()

const authMiddleware = require("../middleware/auth-middleware")

const userController = require("../controllers/user-controller")


router.get("/", userController.showLanding)

router.get("/register", userController.showRegister)
router.post("/register", userController.register )

router.get("/login", userController.showLogin)
router.post("/login",userController.login)

// router.get("/dashboard", authMiddleware, memoryController.showDashboard)

router.get("/logout", userController.logOut)

module.exports = router
