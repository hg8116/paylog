import { useEffect, useState } from "react"

const Authtest = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

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

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {isAuthenticated ? <div>YES</div>: <div>NO</div>}

    </div>
  )
}

export default Authtest
