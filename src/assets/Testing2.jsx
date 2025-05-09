import React from 'react'
import img from '../assets/mn.avif'
import paramlogo from '../assets/param-logo.png'
import { Link } from 'react-router-dom';
import image from '../assets/admin.jpg'
import { useState } from 'react';
import { FaUserShield, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
function Testing2() {
  const [showPassword, setShowPassword] = useState(false);
  return (

    
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Admin Login
          </h2>
  
          <form className="space-y-5">
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                placeholder="Admin Username"
                className="w-full px-12 py-3 bg-gray-100 rounded-md focus:outline-none"
              />
              <FaUserShield className="absolute left-4 top-3.5 text-gray-500" />
            </div>
  
            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-12 py-3 pr-12 bg-gray-100 rounded-md focus:outline-none"
              />
              <FaLock className="absolute left-4 top-3.5 text-gray-500" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
  
            {/* Forgot Password */}
            <div className="text-right text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
  
            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </button>
  
            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Not an admin?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Switch to user login
              </a>
            </p>
          </form>
        </div>
      </div>
  )
}

export default Testing2
