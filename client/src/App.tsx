import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router"

import ProtectedRoute from "./components/protectedRoute"
import PastActivity from "./components/pastActivity"
import Sidebar from "./components/sidebar"
import Navbar from "./components/navbar"
import Landing from "./pages/landing"
import Login from "./pages/login"
import Register from "./pages/register"
import Authtest from "./pages/authtest"
import Overview from "./pages/overview"


function Layout() {
  const location = useLocation();
  const showNavbar = ["/", "/auth/login", "/auth/register"].includes(location.pathname);
  const showSidebar = ["/dashboard/test", "/dashboard/overview", "/dashboard/pastactivity"].includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="dashboard">
            <Route path="test" element={<ProtectedRoute><Authtest /></ProtectedRoute>} />
            <Route path="overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
            <Route path="pastactivity" element={<ProtectedRoute><PastActivity /></ProtectedRoute>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App
