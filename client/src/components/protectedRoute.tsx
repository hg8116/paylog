import useAuthCheck from "@/hooks/useAuthCheck"
import { ReactNode } from "react"
import { Navigate } from "react-router"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useAuthCheck()

  if (isAuthenticated === null) return <div>Loading...</div>

  return (
    isAuthenticated ? <>{children}</> : <Navigate to='/auth/login' replace />
  )
}

export default ProtectedRoute
