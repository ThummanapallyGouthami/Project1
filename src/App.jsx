import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Registration/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element=
        {
        <ProtectedRoute>
        <Dashboard />
         </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;