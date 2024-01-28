import { Navigate } from "react-router-dom";
import { useUser } from "../../context/user-context";
import { NotificationManager } from "react-notifications";

export const WithAdminProtector = ({ children }) => {
  const { isAdmin } = useUser();
  console.log(isAdmin);
  if (isAdmin) {
    return children;
  } else NotificationManager.error("login to procedd");
  return <Navigate to="/" replace />;
};