"use client";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Login form
export default function LoginForm() {
  

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
        <Card className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full">
          {/* {error && <div className="text-xl text-red-600">{error}</div>} */}
          <h1 className="text-3xl my-4 text-blue-600 font-semibold text-center">
            Login to Your Account
          </h1>
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                className="my-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Login Button */}
            <Link href="/dashboard">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg py-2"
              >
                Login
              </Button>
            </Link>
          </form>

          <p className="my-3 text-gray-600 text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 underline ml-2">
              Register
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
