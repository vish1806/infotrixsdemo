import { NotificationManager } from "react-notifications";
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/user-context";

export const WithLoginProtector = ({ children }) => {
  const { user } = useUser();
  console.log(user);
  if (user) {
    return children;
  } else {
    NotificationManager.error("Please login to proceed!");
  }
  return <Navigate to="/" replace />;
};