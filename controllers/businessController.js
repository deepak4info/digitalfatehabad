const Business = require("../models/Business");

exports.registerBusiness = async (req, res) => {
  try {
    const {
      Name,
      businessName,
      BusinessCategory,
      mobileNo,
      WhatsappNo,
      email,
      description,
      websiteUrl,
    } = req.body;

    // Create a new business instance
    const newBusiness = new Business({
      Name,
      businessName,
      BusinessCategory,
      mobileNo,
      WhatsappNo,
      email,
      description,
      websiteUrl,
      // Additional fields as per your Business model
    });

    // Save the new business to the database
    const savedBusiness = await newBusiness.save();

    res.status(201).json({
      message: "Business registered successfully",
      business: savedBusiness,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();

    res.json({ businesses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getTotalBusinessCount = async (req, res) => {
  try {
    const totalCount = await Business.countDocuments();

    res.json({ totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
