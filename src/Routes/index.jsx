import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// import DashboardPage from "./pages/DashboardPage";
// import OrdersPage from "./pages/OrdersPage";
// import LoginPage from "./pages/LoginPage";

import Home from "../Components/Home";
import { getStorage } from "../services/Common.services";

function AppRoutes() {
  const setPageTitle = (title) => {
    const loggedInUser = getStorage("loggedInUser");
    const navigate = useNavigate();

    const paths = [
      "/",
      "/sign-up",
      "/administrator",
      "/getresetToken",
      "/forget",
      "/verify",
    ];

    let path = "/" + window.location.pathname.split("/")[1];
    // if (!loggedInUser && !paths.includes(window.location.pathname)) {
    if (!loggedInUser) navigate("/");

    let val = title ? title + " | " : "";
    document.title = val + "TechStyle ";
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          // component={loadable(() => import("./Components/Home/Home"))}
          element={<Home />}
          onEnter={() => {
            setPageTitle("Home");
          }}
        ></Route>
      </Routes>
      {/* <Routes>
        <Route path="/login" element={<LoginPage />} />

        All protected pages wrapped with DashboardLayout
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/"
          element={
            <DashboardLayout>
              <OrdersPage />
            </DashboardLayout>
          }
        />
      </Routes> */}
    </Router>
  );
}

export default AppRoutes;
