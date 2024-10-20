"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from "next/link"
import { useRouter } from 'next/navigation';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const router = useRouter();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [forgotPassword, setForgotPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState(null);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        forgotPassword ? await handlePasswordReset() : await handleLogin();
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
                    router.push('/beneficiar');
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
        <div className="containerLogin">
            <h2 className="login-titleLogin">{forgotPassword ? 'Reset Password' : 'Login'}</h2>
            <form className="login-formLogin" onSubmit={handleSubmit}>
                <input
                    className="input-fieldLogin"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                {!forgotPassword && (
                    <input
                        className="input-fieldLogin"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                )}
                {forgotPassword && (
                    <input
                        className="input-fieldLogin"
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                )}
                <button type="submit" className="submit-buttonLogin">
                    {forgotPassword ? 'Reset Password' : 'Login'}
                </button>
            </form>
            <p className="signup-textLogin" onClick={() => setForgotPassword(!forgotPassword)}>
                {forgotPassword ? 'Back to Login' : 'Forgot Password?'}
            </p>
            {message && <p className="message-textLogin">{message}</p>}
            <div className="navigation-linksLogin">
                <Link className="nav-textLogin" href={"/register"}>Register</Link>
                <Link className="nav-textLogin" href={"/contributor"}>Contributor</Link>
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
