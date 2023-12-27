import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/";

import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/Error/NotFound";
import Payments from "./pages/Payment";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payments />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Broken Link */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
