"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For smooth animations

// Donation Form Component
const DonationForm = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [beneficiary, setBeneficiary] = useState('Select the option to distribute Ether');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating form submission
    setSubmitted(true);

    setTimeout(() => {
      alert('Donation form submitted successfully!');
      // Reset the form
      setName('');
      setOrganization('');
      setBeneficiary('Healthcare');
      setDescription('');
      setAmount('');
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600"> 
      {/* Donation Form */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-1/2 lg:w-1/3" // Adjusted widths for mobile-first
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-600 mb-4 sm:mb-6">Make a Donation</h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </motion.div>

          {/* Organization Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <label className="block text-sm font-medium text-gray-700">Your Organization</label>
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your organization name"
            />
          </motion.div>

          {/* Beneficiary Dropdown */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <label className="block text-sm font-medium text-gray-700">Select Beneficiary</label>
            <select
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select the option to distribute Ether</option>
              <option value="Healthcare">Healthcare</option>
              <option value="University">University</option>
              <option value="Food">Food</option>
            </select>
          </motion.div>

          {/* Amount Input (in ETH) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <label className="block text-sm font-medium text-gray-700">Donation Amount (ETH)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0.01"
              step="0.01"
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter donation amount in ETH"
            />
          </motion.div>

          {/* Description Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a message or description for your donation"
              rows={4}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={submitted}
            className={`w-full px-3 sm:px-4 py-2 text-white font-semibold rounded-lg focus:outline-none ${
              submitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } transition-all duration-300 ease-in-out`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {submitted ? 'Submitting...' : 'Submit Donation'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default DonationForm;
