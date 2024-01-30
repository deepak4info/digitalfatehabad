const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  Name: String,
  businessName: String,
  BusinessCategory: String,
  mobileNo: String,
  WhatsappNo: String,
  email: String,
  description: String,
  websiteUrl: String,
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
