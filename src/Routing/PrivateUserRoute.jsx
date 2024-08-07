import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PrivateUserLayout from "../Layout/PrivateUserLayout";

export default function PrivateUserRoute({ children }) {
//  const accessToken = "cdsfgsf"
  const {accessToken}=useSelector((state)=>state.auth)

  console.log("accessToken",accessToken)

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <PrivateUserLayout children={children} />;
}
