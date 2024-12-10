"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const Login = () => {
    const router = useRouter();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [forgotPassword, setForgotPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state
    

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        forgotPassword ? await handlePasswordReset() : await handleLogin();
        setLoading(false)
    };

    const handlePasswordReset = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
                email: credentials.email,
                newPassword,
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
            setMessage(error.response ? error.response.data.message : 'Error occurred while resetting the password.');
        }
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, credentials);
            localStorage.setItem('token', res.data.token);
            console.log('Login Response:', res.data);

            if (res.data.userType) {
                setData(res.data);
                setMessage('Login successful!');

                if (res.data.userType === 'Service Provider') {
                    router.push('/service-providers');
                } else if (res.data.userType === 'Beneficiary') {
                    router.push('/beneficiary');
                } else if (res.data.userType === "admin") {
                    router.push("/admin");
                } else {
                    setMessage('Invalid user type!');
                }
            } else {
                setMessage('User type not found in the response!');
            }
        } catch (error) {
            console.error('Login Error:', error);
            setMessage(error.response ? error.response.data.message : 'Login failed!');
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Side - Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-screen">
                <Image
                    src="https://i.pinimg.com/564x/5e/5f/92/5e5f923d06edf09e1d01285e2a8090f3.jpg"
                    alt="Fund-Raising"
                    layout="fill"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200 p-8">
                <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
                    <h1 className="text-3xl my-4 text-blue-600 font-semibold text-center">
                        {forgotPassword ? 'Reset Password' : 'Login to Your Account'}
                    </h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        {!forgotPassword && (
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {/* New Password Field */}
                        {forgotPassword && (
                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                                    New Password:
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`w-full text-white rounded-lg text-lg py-2 ${
                                loading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                            disabled={loading}
                        >
                            {loading ? 'Logging...' : forgotPassword ? 'Reset Password' : 'Login'}
                        </button>
                    </form>

                    {/* Forgot Password or Back to Login */}
                    <p className="my-3 text-gray-600 text-center cursor-pointer" onClick={() => setForgotPassword(!forgotPassword)}>
                        {forgotPassword ? 'Back to Login' : 'Forgot Password?'}
                    </p>

                    {message && <p className="text-center text-red-600 my-2">{message}</p>}

                    <div className="text-center mt-3">
                        <Link href="/register" className="text-blue-600 underline ml-2">Register</Link>
                        <span className="mx-2">|</span>
                        <Link href="/contributor" className="text-blue-600 underline">Contributor</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

// "use client";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Card } from "../../components/ui/card";
// // import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Login form
// export default function LoginForm() {
  

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Left Side - Image */}
//       <div className="relative w-full md:w-1/2 h-64 md:h-screen">
//         <Image
//           src="https://i.pinimg.com/564x/5e/5f/92/5e5f923d06edf09e1d01285e2a8090f3.jpg"
//           alt="Fund-Raising"
//           layout="fill"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Right Side - Login Form */}
//       <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-200 p-8">
//         <Card className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
//           {/* {error && <div className="text-xl text-red-600">{error}</div>} */}
//           <h1 className="text-3xl my-4 text-blue-600 font-semibold text-center">
//             Login to Your Account
//           </h1>
//           <form className="space-y-4">
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email:
//               </label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password:
//               </label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="password"
//                 className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Login Button */}
//             <Link href="/dashboard">
//               <Button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg py-2"
//               >
//                 Login
//               </Button>
//             </Link>
//           </form>

//           <p className="my-3 text-gray-600 text-center">
//             Don't have an account?{" "}
//             <Link href="/register" className="text-blue-600 underline ml-2">
//               Register
//             </Link>
//           </p>
//         </Card>
//       </div>
//     </div>
//   );
// }
