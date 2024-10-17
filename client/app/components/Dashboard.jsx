"use client"; // For Next.js

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react"; // Icon for mobile menu
import Navbar from "./Navbar";

const dummyApplications = [
  { id: 1, name: "John Doe", category: "Education", status: "Pending", documentsVerified: false },
  { id: 2, name: "Jane Smith", category: "Healthcare", status: "Approved", documentsVerified: true },
  { id: 3, name: "Alice Johnson", category: "Food", status: "Pending", documentsVerified: false },
  { id: 4, name: "Mark Brown", category: "Healthcare", status: "Rejected", documentsVerified: false },
  { id: 5, name: "Emily Davis", category: "Education", status: "Pending", documentsVerified: false },
];

// Funds available for each category
const availableFunds = {
  Education: 600,
  Healthcare: 300,
  Food: 150,
  Religion: 200,
  Children: 250,
  Refugees: 100,
  Humanitarian: 50,
};

const categories = Object.keys(availableFunds); // Using keys from the availableFunds object

const AdminDashboard = () => {
  const [applications, setApplications] = useState(dummyApplications);
  const [funding, setFunding] = useState("");
  const [category, setCategory] = useState("");
  const [notification, setNotification] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For responsive sidebar

  const handleApprove = (applicationId) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === applicationId ? { ...app, status: "Approved" } : app
      )
    );
    setNotification("Application approved successfully.");
  };

  const handleReject = (applicationId) => {
    setApplications((prev) =>
      prev.filter((app) => app.id !== applicationId)
    );
    setNotification("Application rejected successfully.");
  };

  const handleVerifyDocuments = (applicationId) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === applicationId ? { ...app, documentsVerified: true } : app
      )
    );
    setNotification("Documents verified successfully.");
  };

  const handleCreateVoucher = () => {
    if (!funding || !category) {
      setNotification("Please enter total funding and select a category.");
      return;
    }
    setNotification(`NFT vouchers created for ${category} with funding $${funding}.`);
    setFunding("");
    setCategory("");
  };

  return (
    <div >
      <div className="hidden md:flex "><Navbar /></div>
    <div className="flex flex-col min-h-screen md:flex-row md:pt-16">
      {/* Mobile menu button */}
      <div className="md:hidden bg-[#203e80] text-white p-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Funders</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`md:flex ${isSidebarOpen ? "block" : "hidden"} block`}>
        <Sidebar />
      </div>

      <div className="flex-grow p-5 bg-gray-100">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Admin Dashboard</h1>

        {notification && (
          <div className="text-green-500 mb-4">{notification}</div>
        )}

        <Card className="mb-5 p-5 shadow-lg rounded-lg bg-white">
          <h2 className="text-3xl mb-4 text-gray-700">Manage Applications</h2>
          {applications.map((app) => (
            <div
              key={app.id}
              className="border-b mb-3 pb-3 flex flex-col md:flex-row md:justify-between items-start md:items-center"
            >
              <p className={`text-lg ${app.status === "Pending" ? "text-gray-600" : app.status === "Approved" ? "text-green-600" : "text-red-600"}`}>
                {app.name} - {app.category} - Status: {app.status} - Documents Verified: {app.documentsVerified ? "Yes" : "No"}
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-0">
                <Button
                  onClick={() => handleApprove(app.id)}
                  className="w-full md:w-auto"
                  disabled={app.status === "Approved"}
                >
                  Approve
                </Button>
                <Button
                  onClick={() => handleReject(app.id)}
                  className="w-full md:w-auto bg-red-500"
                >
                  Reject
                </Button>
                <Button
                  onClick={() => handleVerifyDocuments(app.id)}
                  className="w-full md:w-auto bg-yellow-500"
                  disabled={app.documentsVerified}
                >
                  Verify Documents
                </Button>
              </div>
            </div>
          ))}
        </Card>

        <Card className="p-5 shadow-lg rounded-lg bg-white">
          <h2 className="text-3xl mb-4 text-gray-700">Create NFT Vouchers</h2>
          <Input
            type="text"
            placeholder="Enter total funding"
            value={funding}
            onChange={(e) => setFunding(e.target.value)}
            className="mb-2 border border-gray-300 rounded-lg p-2"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mb-2 border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <Button onClick={handleCreateVoucher} className="bg-blue-600 text-white w-full md:w-auto">
            Create Vouchers
          </Button>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;