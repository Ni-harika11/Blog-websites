"use client";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/user", {
          credentials: "include", // send cookies!
        });
        const data = await res.json();
        console.log("User Data:", data); // ✅ PRINTS IN CONSOLE
      } catch (err) {
        console.error("Error fetching user", err);
      }
    };

    fetchUser();
  }, []);

  return <div>Welcome to Dashboard!</div>;
}
