"use client";
import React, { useState } from "react";
import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKa0F-UJcXPoMZvSF66BcQDMeHMAN_kuQ",
    authDomain: "datascape-86d5c.firebaseapp.com",
    projectId: "datascape-86d5c",
    storageBucket: "datascape-86d5c.firebasestorage.app",
    messagingSenderId: "1066069838361",
    appId: "1:1066069838361:web:634dc2254a88cde63cf888",
    measurementId: "G-W7SG4LSQ9X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleEmailSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User Registered: ", userCredential.user);
            //    router.push("/");  // ✅ Redirect to home page
        } catch (error: any) {
            setError(error.message);
            console.error("Error signing up with email/password: ", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("User Info: ", result.user);
            //  router.push("/");  // ✅ Redirect to home page
        } catch (error: any) {
            setError(error.message);
            console.error("Error signing in with Google: ", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

                {/* Google Sign-Up Button */}
                {/* Google Sign-In Button */}
                <button
                    className="flex items-center hover:cursor-pointer justify-center border border-gray-300 text-black px-4 py-2 rounded-lg w-full hover:bg-red-50 transition mb-4"
                    onClick={handleGoogleSignIn}
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                d="M44.5 20H24V28.5H36.9C35.5 32.5 31.2 35 24 35C16.8 35 10.5 28.7 10.5 21.5C10.5 14.3 16.8 8 24 8C27.3 8 30.1 9.2 32.2 11.1L37.6 6C34.1 2.8 29.4 1 24 1C11.8 1 2 10.8 2 23C2 35.2 11.8 45 24 45C36.2 45 46 35.2 46 23C46 21.7 45.8 20.8 45.5 20Z"
                                fill="#FFC107"
                            />
                            <path
                                d="M6.3 14.1L12.9 18.6C14.7 14.6 18.9 11.5 24 11.5C26.7 11.5 29.1 12.5 31 14.1L36.6 8.5C33.2 5.5 28.9 3.5 24 3.5C16.1 3.5 9.1 8.8 6.3 14.1Z"
                                fill="#FF3D00"
                            />
                            <path
                                d="M24 44.5C29.2 44.5 33.8 42.6 37.1 39.7L31.1 34.6C29.2 36.1 26.8 37 24 37C18.9 37 14.7 33.9 12.9 29.9L6.3 34.9C9.1 40.2 16.1 44.5 24 44.5Z"
                                fill="#4CAF50"
                            />
                            <path
                                d="M44.5 20H24V28.5H36.9C36.2 30.5 34.9 32.2 33.1 33.4L39.4 38.7C42.7 35.7 45 31.2 45 23C45 21.7 44.8 20.8 44.5 20Z"
                                fill="#1976D2"
                            />
                        </g>
                    </svg>
                    Sign in with Google
                </button>

                {/* OR Divider */}
                <div className="text-gray-500 mb-4">or</div>

                {/* Email/Password Signup Form */}
                <form onSubmit={handleEmailSignup} className="space-y-4">
                    <input
                        type="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg w-full hover:cursor-pointer transition"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-500">
                    Already have an account?
                    <a href="/login" className="text-purple-600 hover:underline"> Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
