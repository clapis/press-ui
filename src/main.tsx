import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import Home from "./Home.tsx";
import App from "./App.tsx";
import Auth from "./Auth.tsx";
import Status from "./Status.tsx";
import Alerts from "./Alerts.tsx";
import ErrorPage from "./Error.tsx";
import Profile from "./Profile.tsx";
import RequireAuth from "./components/RequireAuth.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/app",
        element: (
          <RequireAuth>
            <App />
          </RequireAuth>
        ),
        children: [
          {
            path: "alerts",
            element: <Alerts />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth/*",
    element: <Auth />
  },
  {
    path: "/status",
    element: <Status />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      clientId={import.meta.env.VITE_KINDE_CLIENTID}
      audience={import.meta.env.VITE_API_URL}
      logoutUri={window.location.origin}
      redirectUri={window.location.origin + '/auth/login/callback'}
      isDangerouslyUseLocalStorage={true}
      onRedirectCallback={(_, state) => {
        if (state?.redirectTo) window.location.replace(state.redirectTo as string);
      }}
    >
      <RouterProvider router={router} />
    </KindeProvider>
  </StrictMode>
);
