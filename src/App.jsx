import { Routes, Route, Navigate } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import OpportunityForm from "./pages/OpportunityForm";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/opportunity/edit/:id"
        element={<OpportunityForm />}
      />

      <Route
        path="/opportunity/new"
        element={
          <ProtectedRoute>
            <OpportunityForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/opportunity/edit/:id"
        element={
          <ProtectedRoute>
            <OpportunityForm />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
}

export default App;