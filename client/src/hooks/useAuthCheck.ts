import { useEffect, useState } from "react"

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3000/test-auth", {
          method: "GET",
          credentials: "include"
        })

        if (response.ok) {
          setIsAuthenticated(true)
        }
        else {
          setIsAuthenticated(false)
        }
      }
      catch (error) {
        console.error("Auth check failed:", error)
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  return isAuthenticated
}

export default useAuthCheck
