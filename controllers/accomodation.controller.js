const Place = require("../models/place.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports.places = async (req, res, next) => {
  const { access_token } = req.cookies;
  const {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  } = req.body;

  jwt.verify(
    access_token,
    process.env.JWT_SECRET,
    {},
    async (err, userData) => {
      const placeDoc = await Place.create({
        owner: userData._id,
        title,
        address,
        addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
      });
      res.json(placeDoc);
    }
  );
};
