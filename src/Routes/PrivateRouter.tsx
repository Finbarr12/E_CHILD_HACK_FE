// PrivateRouter.tsx
import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../components/Global/Store";

const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: RootState) => state.change.user);
//   console.log("Current user:", user); // Debugging line
  return user ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRouter;
