"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';  // Assuming you're using Framer Motion
import './Signup.css';

const Signup = () => {
  const router = useRouter();
  const [isFormVisible, setFormVisible] = useState(false);
  const [userType, setUserType] = useState('');
  const [voucherCategory, setVoucherCategory] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    cnic: '',
    cgpa: '',
    universityName: '',
    serviceProviderName: '',
    city: '',
    country: '',
    profilePictures: []
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePictures') {
      setFormData({ ...formData, profilePictures: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value === "beneficiary" ? "Beneficiary" : "Service Provider";
    setUserType(selectedUserType);
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      cnic: '',
      cgpa: '',
      universityName: '',
      serviceProviderName: '',
      city: '',
      country: '',
      profilePictures: []
    });
    setVoucherCategory('');
  };

  const handleVoucherChange = (e) => {
    setVoucherCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(file => form.append(key, file));
      } else {
        form.append(key, value);
      }
    });
    form.append('userType', userType);
    form.append('voucherCategory', voucherCategory);
    form.append('Accepted', termsAccepted);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      router.push('/beneficiar');
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Registration failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-11 bg-gray-100 min-h-screen">
      <div className="grid md:grid-cols-1 gap-8 max-w-5xl">
        {/* Form Section */}
        <motion.div
          className={`bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {message && <div className="text-xl text-red-600">{message}</div>}
          <h1 className="text-3xl my-4 text-blue-600 font-semibold text-center">Create Your Account</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700">Are you a Beneficiary or Service Provider?</label>
              <select
                name="userType"
                id="userType"
                className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userType === "Beneficiary" ? "beneficiary" : "serviceProvider"}
                onChange={handleUserTypeChange}
                required
              >
                <option value="">Select</option>
                <option value="beneficiary">Beneficiary</option>
                <option value="serviceProvider">Service Provider</option>
              </select>
            </div>

            {/* Row 1: Name and Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2: CNIC */}
            <div className="w-full">
              <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
                CNIC
              </label>
              <input
                type="text"
                id="cnic"
                name="cnic"
                className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.cnic}
                onChange={handleChange}
                required
              />
            </div>

            {/* Row 3: Password and Confirm Password */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Voucher Category */}
            <div>
              <label htmlFor="vouchers" className="block text-sm font-medium text-gray-700">Voucher Category:</label>
              <select
                id="vouchers"
                className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={voucherCategory}
                onChange={handleVoucherChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
              </select>
            </div>

            {/* Conditional Fields for Education Beneficiaries */}
            {voucherCategory === "Education" && userType === "Beneficiary" && (
              <>
                <div>
                  <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700">CGPA:</label>
                  <input
                    type="number"
                    id="cgpa"
                    name="cgpa"
                    className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.cgpa}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="universityName" className="block text-sm font-medium text-gray-700">University Name:</label>
                  <input
                    type="text"
                    id="universityName"
                    name="universityName"
                    className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.universityName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            {/* Conditional Fields for Service Providers */}
            {userType === "Service Provider" && (
              ["serviceProviderName", "city", "country"].map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))
            )}

            {/* Terms & Conditions */}
            <div className="my-2 flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I accept the terms and conditions.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg py-2"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;



// "use client";
// import { Button } from "../../../components/ui/button";
// import { Input } from "../../../components/ui/input";
// import { Card } from "../../../components/ui/card";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// const Register = () => {
//   const [error, setError] = useState("");
//   const [userType, setUserType] = useState("");
//   const [voucherCategory, setVoucherCategory] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [documents, setDocuments] = useState([]);
//   const [formFields, setFormFields] = useState({
//     name: "",
//     email: "",
//     cnic: "",
//     password: "",
//     confirmPassword: "",
//     serviceProviderName: "",
//     city: "",
//     country: "",
//   });

//   const router = useRouter();

//   const handleInputChange = (e) => {
//     setFormFields({ ...formFields, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e, index) => {
//     if (e.target.files) {
//       const newDocuments = [...documents];
//       newDocuments[index] = e.target.files[0];
//       setDocuments(newDocuments);
//     }
//   };

//   const addDocumentField = () => setDocuments([...documents, null]);
//   const deleteDocumentField = (index) => setDocuments(documents.filter((_, i) => i !== index));

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");

//     if (formFields.password !== formFields.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     if (!termsAccepted) {
//       setError("Please accept the terms and conditions.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       Object.entries(formFields).forEach(([key, value]) => {
//         formData.append(key, value);
//       });
//       formData.append("userType", userType);
//       formData.append("voucherCategory", voucherCategory);
//       documents.forEach((doc) => {
//         if (doc) formData.append("documents", doc);
//       });

//       const response = await axios.post("http://localhost:5000/api/register", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (response.status === 201) {
//         router.push("/afterRegister");
//       } else {
//         setError("Failed to register.");
//       }
//     } catch (e) {
//       setError(e.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center pt-11 bg-gray-100 min-h-screen">
//       <Card className="bg-white shadow-2xl rounded-lg p-8 max-w-lg w-full">
//         {error && <div className="text-xl text-red-600">{error}</div>}
//         <h1 className="text-3xl my-4 text-blue-600 font-semibold text-center">Create an Account</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* User Type */}
//           <div>
//             <label htmlFor="userType" className="block text-sm font-medium text-gray-700">User Type:</label>
//             <select
//               name="userType"
//               id="userType"
//               className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={userType}
//               onChange={(e) => setUserType(e.target.value)}
//               required
//             >
//               <option value="">Select</option>
//               <option value="beneficiary">Beneficiary</option>
//               <option value="serviceProvider">Service Provider</option>
//             </select>
//           </div>

//           {/* Name and Email in one row */}
//           <div className="flex flex-col md:flex-row md:space-x-4">
//             <div className="w-full">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
//               <Input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formFields.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formFields.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* CNIC in one row */}
//           <div>
//             <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">CNIC:</label>
//             <Input
//               type="number"
//               name="cnic"
//               id="cnic"
//               className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formFields.cnic}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* Password and Confirm Password in one row */}
//           <div className="flex flex-col md:flex-row md:space-x-4">
//             <div className="w-full">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="password"
//                 className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formFields.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
//               <Input
//                 type="password"
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={formFields.confirmPassword}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Voucher Category */}
//           <div>
//             <label htmlFor="voucherCategory" className="block text-sm font-medium text-gray-700">Voucher Category:</label>
//             <select
//               name="voucherCategory"
//               id="voucherCategory"
//               className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={voucherCategory}
//               onChange={(e) => setVoucherCategory(e.target.value)}
//               required
//             >
//               <option value="">Select Category</option>
//               <option value="Education">Education</option>
//               <option value="Healthcare">Healthcare</option>
//             </select>
//           </div>

//           {/* Additional fields for Education */}
//           {voucherCategory === "Education" && userType === "beneficiary" && (
//             <>
//               <div>
//                 <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700">CGPA:</label>
//                 <Input
//                   type="text"
//                   name="cgpa"
//                   id="cgpa"
//                   className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="universityName" className="block text-sm font-medium text-gray-700">University Name:</label>
//                 <Input
//                   type="text"
//                   name="universityName"
//                   id="universityName"
//                   className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </>
//           )}

//           {/* Additional fields for Service Provider */}
//           {userType === "serviceProvider" && (
//             <>
//               {["serviceProviderName", "city", "country"].map((field) => (
//                 <div key={field}>
//                   <label htmlFor={field} className="block text-sm font-medium text-gray-700">
//                     {field.charAt(0).toUpperCase() + field.slice(1)}:
//                   </label>
//                   <Input
//                     type="text"
//                     name={field}
//                     id={field}
//                     className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={formFields[field]}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//               ))}
//             </>
//           )}

//           {/* Document Uploads */}
//           {(voucherCategory === "Education" || voucherCategory === "Healthcare" || userType === "serviceProvider") && (
//             <div className="my-4">
//               {documents.map((_, index) => (
//                 <div key={index} className="flex items-center">
//                   <input
//                     type="file"
//                     onChange={(e) => handleFileChange(e, index)}
//                     className="my-2 w-full border-gray-300 rounded-md shadow-sm"
//                     required
//                   />
//                   <Button
//                     type="button"
//                     onClick={() => deleteDocumentField(index)}
//                     className="ml-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               ))}
//               <Button
//                 type="button"
//                 onClick={addDocumentField}
//                 className="mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
//               >
//                 Add Document
//               </Button>
//             </div>
//           )}

//           {/* Terms and Conditions */}
//           <div className="my-2 flex items-center">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={termsAccepted}
//               onChange={() => setTermsAccepted(!termsAccepted)}
//               required
//             />
//             <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
//               I accept the terms and conditions.
//             </label>
//           </div>

//           {/* Register Button */}
//           <Button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg py-2"
//           >
//             Register
//           </Button>
//         </form>
//       </Card>
//       <p className="my-3 text-gray-600">
//         Already have an account?{" "}
//         <Link href="/" className="text-blue-600 underline ml-2">
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Register;
