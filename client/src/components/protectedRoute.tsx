import { ReactNode } from "react"
import { Navigate } from "react-router"
import { useAuth } from "@/context/authProvider"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  // Show a loading state while the auth status is being determined
  if (isAuthenticated === null) return (
    <div className="h-screen flex items-center justify-center">
      <span>Checking authentication...</span>
    </div>
  )
  // Redirect to login if not authenticated
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute
