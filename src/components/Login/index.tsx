// "use client";
// // Simple login page for admin panel
// import React from 'react';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { FcGoogle } from 'react-icons/fc'; 
// // import Loader from '../loader/page';
// import { Loader } from 'next/dynamic';
// export default function LoginPage() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const router = useRouter();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log("Submitting login form", { username, password });
//         // const baseurl = "/api";
//         // Use Next.js API route for login
//         const baseurl = "/api";
//         console.log("Base URL:", baseurl);
//         try {
//             const response = await fetch(`${baseurl}/login`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ username, password }),
//                 //sending data to the backends
//             });
//             console.log("Response status:", response.status);
            
//             if (!response.ok) {
//                 throw new Error("Invalid credentials");
//             }
//             // <Loader/>
//             const data = await response.json();
//             console.log("Login success:", data);
//             if (data.token) {
//                 localStorage.setItem("token", data.token);
//                 alert("Login successful!");
//                 router.push("/dashboard");
//             } else {
//                 throw new Error("No token received from server");
//             }
//         } catch (err: any) {
//             console.log("Login error:", err);
//             setError(err.message || "Login failed");
//         } 
//     }
//     const handleGoogleLogin = () => {
//         window.location.href = "http://localhost:5000/auth/google";
//     };

//     return (
//         <main className="flex flex-col items-center justify-center min-h-screen bg-white">
//             <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-md">
//                 <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Admin Login</h2>
//                 {error && (
//                     <div className="mb-4 text-sm text-red-600">{error}</div>
//                 )}
//                 <div className="mb-4">
//                     <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">Username</label>
//                     <input
//                         onChange={(e) => setUsername(e.target.value)}
//                         value={username}
//                         id="username" name="username" type="text" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
//                     <input
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         id="password" name="password" type="password" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                 </div>
//                 <button type="submit" className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition">Login</button>
//                 <button
//           type="button"
//           onClick={handleGoogleLogin}
//           className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-100 transition text-gray-700"
//         >
//           <FcGoogle className="text-xl" />
//           Login with Google
//         </button>
//             </form>
           
//             {/* <div className="mt-8 text-center">
//                 <Link href="/dashboard" className="text-blue-600 hover:underline">Go to Dashboard</Link>
//             </div> */}
//         </main>
//     );
// }

"use client"
export default function Login() {
    const handleGoogleLogin = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };
  
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Login with Google
        </button>
      </div>
    );
  }
  