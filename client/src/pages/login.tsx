import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      {/* Container */}
      <div className='flex flex-col justify-center items-start py-16 px-12 gap-10 border-2 border-gray rounded-2xl w-[30rem]'>
        {/* Sign in heading */}
        <div className='text-4xl'>
          Sign in
        </div>
        {/*Input box and text*/}
        <div className='flex flex-col justify-center gap-2 text-base w-full'>
          <div className='flex flex-col gap-2 justify-center'>
            <label htmlFor='username'>Username</label>
            <input className='border-2 border-gray rounded-md p-2' type='text' id='username' name='username' />
          </div>
          <div className='flex flex-col gap-2 justify-center'>
            <label htmlFor='password'>Password</label>
            <input className='border-2 border-gray rounded-md p-2' type='text' id='password' name='password' />
          </div>
          {/* Submit Button */}
          <Button className='rounded-3xl text-base w-full mt-6 p-6'>
            Sign in
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
        <div className='flex gap-2'>
          <span>Don't have an account?</span>
          <Link to='/'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
