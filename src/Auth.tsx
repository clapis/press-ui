import { useLocation, useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Loader2Icon } from "lucide-react";

export default function Auth() {

    const location = useLocation();
    const navigate = useNavigate();
    const { isLoading, isAuthenticated, register } = useKindeAuth();

    if (location.pathname === "/auth/login") {
        const from = location.state?.from?.pathname || "/";

        if (!isLoading && !isAuthenticated)
            register({ app_state: { redirectTo: from }});
                
        if (!isLoading && isAuthenticated)
            navigate(from, { replace: true });    
    }


    if (location.pathname === "/auth/login/callback") {

    }

    return <Loader2Icon className="fixed left-[50%] top-[30%] animate-spin" />
}