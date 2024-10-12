import { Navigate, useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Loader2Icon } from "lucide-react";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading)
    return <Loader2Icon className="fixed left-[50%] top-[30%] animate-spin" />

  if (!isAuthenticated)
    return <Navigate to="/auth/login" state={{ from: location }} replace={true} />;

  return children;
}
