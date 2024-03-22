import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  // useAuthContext ->custom hook, COMES FROM THE AuthContextProvider
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.err) {
        throw new Error(data.err);
      }
      // LOCALSTORAGE WORK HERE IF NO DATA ERROR
      localStorage.setItem("chat-user", JSON.stringify(data));

      // CONTEXT PASSES HERE
      setAuthUser(data);

      // console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    // console.log("error no field");
    toast.error("Please fill in all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    // console.log("error passwrd");

    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    // console.log("error length");

    toast.error("Password must be atleast 6 characters");
    return false;
  }

  return true;
}

export default useSignup;
