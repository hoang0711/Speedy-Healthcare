// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/routes/peopleRoutes.js


const express = require("express");
const router = express.Router();
const {
  getTests,
  getTestByID,
  createTest,
  updateTest,
  deleteTest,
} = require("../controllers/testController");

router.get("/", getTests);
// router.get("/:id", getTestByID);
router.post("/", createTest);
router.put("/:id", updateTest);
router.delete("/:id", deleteTest);

module.exports = router;
