const express = require("express");
const router = express.Router();
const Item = require("../models/Item");


// READ http://localhost:3000/api/items
router.get("/", (req, res, next) => {
    // Get all the items
   Item.find()
      .then((itemDocuments) => {
        res.status(200).json(itemDocuments);
      })
      .catch((error) => {
        next(error);
      });
  });

  // DELETE http://localhost:3000/api/items/{some-id}
router.delete("/:id", (req, res, next) => {
    // Deletes a burger
    Item.findByIdAndDelete(req.params.id)
      .then((itemDocument) => {
        // res.sendStatus(204)
        res.status(204).json({
          message: "Successfuly deleted !",
        });
      })
      .catch((error) => {
        next(error);
      });
  });

  // READ http://localhost:3000/api/items/{some-id}
router.get("/:id", (req, res, next) => {
    //Get one specific item
    Item.findById(req.params.id)
      .then((itemDocument) => {
        res.status(200).json(itemDocument);
      })
      .catch((error) => {
        next(error);
      });
  });

// UPDATE http://localhost:3000/api/items/{some-id}
router.patch("/:id", (req, res, next) => {
    // Update a specific burger
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((itemDocument) => {
        res.status(200).json(itemDocument);
      })
      .catch((error) => {
        next(error);
      });
  });
  

// CREATE http://localhost:3000/api/items
router.post("/", (req, res, next) => {
    // Create an item
    Item.create(req.body)
      .then((itemDocument) => {
        res.status(201).json(itemDocument);
      })
      .catch((error) => {
        next(error);
      });
  });



module.exports = router;