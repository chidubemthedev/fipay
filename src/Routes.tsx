import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/";

import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/Error/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

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
