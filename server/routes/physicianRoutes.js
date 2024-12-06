// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/routes/peopleRoutes.js


const express = require("express");
const router = express.Router();
const {
  getPhysicians,
  getPhysicianByID,
  createPhysician,
  updatePhysician,
  deletePhysician,
} = require("../controllers/physicianController");

router.get("/", getPhysicians);
// router.get("/:id", getPhysicianByID);
router.post("/", createPhysician);
router.put("/:id", updatePhysician);
router.delete("/:id", deletePhysician);

module.exports = router;
