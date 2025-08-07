const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn ,validateListing , isOwner  } = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer  = require('multer')
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage })


router
  .route("/")
  .get(wrapAsync(listingController.index)) //Index Route
  .post( isLoggedIn, validateListing , upload.single('listing[image]') , wrapAsync(listingController.createListing)) // Create Route

//New Route
router.get("/new" , isLoggedIn , listingController.renderNewForm);

router.get("/filter/:category", wrapAsync(listingController.filter)); //Filter Get Route
router.get("/search", wrapAsync(listingController.search)); //Search Get Route

router 
  .route("/:id")
  .get(wrapAsync(listingController.showListing)) //Show Route
  .put(isLoggedIn , isOwner ,  upload.single('listing[image]') ,validateListing , wrapAsync(listingController.updateListing)) //Update Route
  .delete(isLoggedIn , isOwner , wrapAsync(listingController.deleteListing)) //Delete Route

//Edit Route
router.get("/:id/edit" , isLoggedIn , isOwner , wrapAsync(listingController.renderEditForm));

router.get(
  "/:id/reservelisting",
  isLoggedIn,
  wrapAsync(listingController.reserveListing)
);


module.exports = router;