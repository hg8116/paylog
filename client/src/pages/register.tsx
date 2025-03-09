import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link, Navigate } from "react-router"

import Hide from "/hide.png"
import View from "/view.png"
import { useAuth } from "@/context/authProvider"

const Register = () => {

  const { isAuthenticated } = useAuth()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const handleRegister = async () => {
    try {
      let response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: firstname.trim() + " " + lastname.trim(),
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
      console.log("Register success: ", data)

      alert("Register successful!")
    }

    catch (error: any) {
      console.log("Register error: ", error)
      alert(error.message)
    }
  }

  return (
    isAuthenticated ?
      <Navigate to='/dashboard/overview' replace />
      :
      <div className='h-screen flex items-center justify-center'>
        {/* Container */}
        <div className='flex flex-col justify-center items-start py-16 px-12 gap-10 border-2 border-gray rounded-2xl'>
          {/* Sign in heading */}
          <div className='text-4xl'>
            Register
          </div>
          {/*Input box and text*/}
          <div className='flex flex-col justify-center gap-2 text-base w-full'>
            {/* Name */}
            <div className='flex gap-4'>
              <div className='flex flex-col gap-2 justify-center w-1/2'>
                <label htmlFor='first-name'>First Name</label>
                <input className='border-2 border-gray rounded-md p-2'
                  type='text' id='first-name' name='first-name'
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                />
              </div>
              <div className='flex flex-col gap-2 justify-center w-1/2'>
                <label htmlFor='last-name'>Last Name</label>
                <input className='border-2 border-gray rounded-md p-2'
                  type='text' id='last-name' name='last-name'
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                />
              </div>
            </div>
            {/* Email */}
            <div className='flex flex-col gap-2 justify-center'>
              <label htmlFor='email'>Email</label>
              <input className='border-2 border-gray rounded-md p-2'
                type='text' id='email' name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
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
              {/* Password conditions */}
              <div>
                <ul className='list-disc ml-6 flex gap-8 text-sm text-stone-500'>
                  <div>
                    <li>Use 8 or more characters</li>
                    <li>Use a number (e.g. 1234)</li>
                  </div>
                  <div>
                    <li>Use upper and lower case letters (e.g. Aa)</li>
                    <li>Use a symbol (e.g. !@#$)</li>
                  </div>
                </ul>
              </div>
            </div>
            {/* Submit Button */}
            <Button className='rounded-3xl text-base w-full mt-6 p-6'
              onClick={handleRegister}
              type='button'
            >
              Sign in
            </Button>
          </div>

          {/*Sign up?*/}
          <div className='flex gap-1'>
            <span>Already have an account?</span>
            <Link to='/auth/login' className='font-semibold'>
              Log in
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Register
