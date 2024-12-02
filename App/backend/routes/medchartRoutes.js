// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/routes/peopleRoutes.js


const express = require("express");
const router = express.Router();
const {
  getMedCharts,
  getMedChartByID,
  createMedChart,
  updateMedChart,
  deleteMedChart,
} = require("../controllers/medchartController");

router.get("/", getMedCharts);
// router.get("/:id", getMedChartByID);
router.post("/", createMedChart);
router.put("/:id", updateMedChart);
router.delete("/:id", deleteMedChart);

module.exports = router;
