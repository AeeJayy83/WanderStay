const Listing = require("../models/listing.js")

module.exports.index = async (req, res) => {
  let allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings })
}

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs")
}

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner")
  if (!listing) {
    req.flash("error", "Listing you want to view does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing })
  }
}

module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename }
  await newListing.save();
  req.flash("success", "New Listing Created!")
  res.redirect("/listings")
}

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you want to edit does not exist!")
    res.redirect("/listings")
  } else {
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/ar_1.0,c_fill,h_200,w_200/bo_3px_solid_black")
    res.render("listings/edit.ejs", { listing, originalImageUrl })
  }
}

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename
    listing.image = { url, filename }
    await listing.save()
  }
  req.flash("success", "Listing Updated!")
  res.redirect(`/listings/${id}`)
}



module.exports.filter = async (req, res, next) => {
  let { category } = req.params;
  let allListings = await Listing.find({ category: { $all: [category] } });
  if (allListings.length != 0) {
    res.locals.success = `Listings Filtered by ${category}!`;
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", `There is no any Listing for ${category}!`);
    res.redirect("/listings");
  }
};

module.exports.search = async (req, res) => {
  let input = req.query.q.trim().replace(/\s+/g, " ");
  if (input == "" || input == " ") {
    req.flash("error", "Please enter search query!");
    res.redirect("/listings");
    return;
  }

  let data = input.split("");
  let element = "";
  let flag = false;
  for (let index = 0; index < data.length; index++) {
    if (index == 0 || flag) {
      element = element + data[index].toUpperCase();
    } else {
      element = element + data[index].toLowerCase();
    }
    flag = data[index] == " ";
  }

  let allListings = await Listing.find({
    title: { $regex: element, $options: "i" },
  });
  if (allListings.length != 0) {
    res.locals.success = "Listings searched by Title!";
    res.render("listings/index.ejs", { allListings });
    return;
  }

  if (allListings.length == 0) {
    allListings = await Listing.find({
      category: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Category!";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  if (allListings.length == 0) {
    allListings = await Listing.find({
      country: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Country!";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }

  if (allListings.length == 0) {
    allListings = await Listing.find({
      location: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Location!";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }

  const intValue = parseInt(element, 10);
  const intDec = Number.isInteger(intValue);

  if (allListings.length == 0 && intDec) {
    allListings = await Listing.find({ price: { $lte: element } }).sort({
      price: 1,
    });
    if (allListings.length != 0) {
      res.locals.success = `Listings searched by price less than Rs ${element}!`;
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  if (allListings.length == 0) {
    req.flash("error", "No listings found based on your search!");
    res.redirect("/listings");
  }
};

module.exports.reserveListing = async (req, res) => {
  let { id } = req.params;
  if (!res.locals.currUser) {
    req.flash("error", "you must be logged in to reserve a listing")
    req.redirect("/login")
  } else {
    req.flash("success", "Reservation Details sent to your Email!");
    res.redirect(`/listings/${id}`);
  }

};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id)
  req.flash("success", "Listing Deleted!")
  res.redirect("/listings")
}

