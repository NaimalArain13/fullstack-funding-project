const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  userType: {
    type: String,
    required: true,
  },
  voucherCategory: {
    type: String,
    required: true,
  },
  documents: {
    type: [String], // To store paths or identifiers of uploaded documents
  },
  // Add any other fields from the registration form
  cnic: {
    type: String,
    required: true,
  },
  serviceProviderName: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  universityName: {
    type: String,
  },
  cgpa: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
