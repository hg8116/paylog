import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface AuthContextType {
  isAuthenticated: boolean | null
  setIsAuthenticated: (authState: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:300/test-auth", {
          method: "GET",
          credentials: "include"
        })

        console.log("set is authenticated: ", response.ok)
        setIsAuthenticated(response.ok)
      }
      catch (err) {
        console.error("Auth check failed: ", err)
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

