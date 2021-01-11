const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// UPDATE http://localhost:3000/users/me
router.patch("/me", (req, res, next) => {
    User.findByIdAndUpdate(req.session.currentUser, req.body, {new: true}) 
      .then((userInfo) => {
        res.status(200).json(userInfo);
      })
      .catch((error) => {
        next(error);
      });
  });

  // http://localhost:3000/api/users/{some-id}
router.get("/me", (req, res, next) => {
  //Get one specific burger
  User.findById(req.session.currentUser)
    .then((oneInfoUser) => {
      res.status(200).json(oneInfoUser);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
