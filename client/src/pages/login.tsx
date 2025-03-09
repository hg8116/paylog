import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router"

import Hide from "/hide.png"
import View from "/view.png"
import useAuthCheck from "@/hooks/useAuthCheck"

const Login = () => {
  const isAuthenticated = useAuthCheck()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || "Login failed")
      }

      const data = await response.json()
      console.log("Login success: ", data)

      navigate('/dashboard/overview')
      alert("Login successful!")
    }
    catch (error: any) {
      console.error("Login error: ", error)
      alert(error.message)
    }
  }

  return isAuthenticated
    ?
    <Navigate to='/dashboard/overview' replace />
    :
    (
      <div className='h-screen flex items-center justify-center'>
        {/* Container */}
        <div className='flex flex-col justify-center items-start py-16 px-12 gap-10 border-2 border-gray rounded-2xl w-[30rem]'>
          {/* Sign in heading */}
          <div className='text-4xl'>
            Sign in
          </div>
          {/*Input box and text*/}
          <div className='flex flex-col justify-center gap-2 text-base w-full'>
            {/* Email */}
            <div className='flex flex-col gap-2 justify-center'>
              <label htmlFor='email'>Email</label>
              <input className='border-2 border-gray rounded-md p-2'
                onChange={(e) => setEmail(e.target.value)}
                type='text' id='email' name='email' value={email} />
            </div>
            {/* Password */}
            <div className='flex flex-col gap-2 justify-center mt-2'>
              <div className='flex justify-between'>
                <label htmlFor='password'>Password</label>
                {
                  showPass ?
                    <span className='flex gap-2 pr-2 hover:cursor-pointer'
                      onClick={() => setShowPass(false)}
                    >
                      <img src={Hide} alt='hide password' width="20" height="20" />
                      <span>
                        Hide
                      </span>
                    </span>
                    :
                    <span className='flex gap-2 pr-2 hover:cursor-pointer'
                      onClick={() => setShowPass(true)}
                    >
                      <img src={View} alt='view password' width="20" height="20" />
                      <span>
                        View
                      </span>
                    </span>
                }
              </div>
              <input className='border-2 border-gray rounded-md p-2'
                onChange={(e) => setPassword(e.target.value)}
                type={showPass ? 'text' : 'password'} id='password' name='password' value={password} />
            </div>
            {/* Submit Button */}
            <Button className='rounded-3xl text-base w-full mt-6 p-6'
              onClick={handleLogin}
              type='button'
            >
              Log in
            </Button>
            {/* Remember - Forgot */}
            <div className='flex justify-between w-full'>
              <div className='flex gap-2'>
                <input className='accent-black' type='checkbox' id='remember' name='remember' />
                <label htmlFor='remember'>Remember me</label>
              </div>
              <Link to='/'>
                Need help?
              </Link>
            </div>
          </div>

          {/*Sign up?*/}
          <div className='flex gap-1'>
            <span>Don't have an account?</span>
            <Link to='/auth/register' className='font-semibold'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Login
