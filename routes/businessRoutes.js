const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessController");
router.post("/register", businessController.registerBusiness);
router.get("/allbusinesses", businessController.getAllBusinesses);
router.get("/businesses/count", businessController.getTotalBusinessCount);

module.exports = router;
