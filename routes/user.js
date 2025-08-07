const express = require("express")
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js")

router
  .route("/signup") 
  .get(userController.renderSignupForm) //Show Signup Route
  .post(userController.signup) //Post Signup Route

router  
  .route("/login")
  .get(userController.renderLoginForm) //Show Login Route
  .post(saveRedirectUrl,
    passport.authenticate("local" , {failureRedirect: "/login" , failureFlash: true}),
    userController.login) //Post Login Route

//Logout Route    
router.get("/logout" , userController.logout)

module.exports = router;