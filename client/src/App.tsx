import Navbar from "./components/navbar"
import Landing from "./pages/landing"
import Login from "./pages/login"

import { BrowserRouter as Router, Routes, Route } from "react-router"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='auth'>
          <Route path='login' element={<Login />} />
          <Route path='register' />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
