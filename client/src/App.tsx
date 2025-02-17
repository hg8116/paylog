import Navbar from "./components/navbar"
import Landing from "./pages/landing"
import Login from "./pages/login"
import Register from "./pages/register"
import Authtest from "./pages/authtest"

import { BrowserRouter as Router, Routes, Route } from "react-router"
import ProtectedRoute from "./components/protectedRoute"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='auth'>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='test' element={<ProtectedRoute><Authtest /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
