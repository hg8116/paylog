import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router"

import ProtectedRoute from "./components/protectedRoute"
import PastActivity from "./components/pastActivity"
import Sidebar from "./components/sidebar"
import Navbar from "./components/navbar"
import Landing from "./pages/landing"
import Login from "./pages/login"
import Register from "./pages/register"
import Authtest from "./pages/authtest"
import Overview from "./pages/overview"
import Friend from "./pages/friend"
import Group from "./pages/group"
import MyAccount from "./pages/myAccount"
import { useAuth } from "./context/authProvider"


function Layout() {
  const location = useLocation();
  const { isAuthenticated } = useAuth()

  // Define public routes that don't require authentication
  const publicRoutes = ["/", "/auth/login", "/auth/register"]
  const isPublicRoute = publicRoutes.includes(location.pathname)
  const isDashboardRoute = location.pathname.startsWith("/dashboard")


  if(!isAuthenticated && !isPublicRoute) {
    return <Navigate to="/" replace />
  }

  // Redirect logic
  if (isAuthenticated && !isDashboardRoute) {
    return <Navigate to="/dashboard/overview" replace />
  }



  return (
    <div className="flex">
      {isDashboardRoute && <Sidebar />}
      <div className="flex-1">
        {isPublicRoute && <Navbar />}
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
            <Route path="friend" element={<ProtectedRoute><Friend /></ProtectedRoute>} />
            <Route path="group" element={<ProtectedRoute><Group /></ProtectedRoute>} />
            <Route path="myaccount" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
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
