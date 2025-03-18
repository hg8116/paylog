import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface AuthContextType {
  isAuthenticated: boolean | null
  setIsAuthenticated: (authState: boolean) => void
  user: User | null
  setUser: (user: User) => void
}

interface User {
  id: number
  name: string
  email: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3000/users/me", {
          method: "GET",
          credentials: "include"
        })

        if (response.ok) {
          setIsAuthenticated(true)
          const data = await response.json()
          setUser(data)
        }
        else {
          setIsAuthenticated(false)
        }
      }
      catch (err) {
        console.error("Auth check failed: ", err)
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
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

