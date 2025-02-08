import logo from '/paylog-logo.png'
import { Button } from './ui/button'
import { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='fixed top-0 w-full'>
      <div className="w-full bg-white flex flex-wrap items-center justify-between border-b-2 py-4 px-5 lg:px-20">
        {/*Mobile login*/}
        < div className='lg:hidden flex flex-row items-center justify-start' >
          <Link to='/auth/login'>
            <Button>Login</Button>
          </Link>
        </div >

        {/*logo*/}
        < div className='hover:cursor-pointer justify-center lg:justify-center' >
          <img src={logo} width={81} alt="paylog logo" />
        </div >

        {/*center options*/}
        < div className='hidden lg:flex flex-row items-center justify-center gap-10' >
          <Button variant="ghost" >
            Vision
          </Button>
          <Button variant="ghost" >
            Solutions
          </Button>
          <Button variant="ghost" >
            Pricing
          </Button>
        </div >

        {/*right options*/}
        <div className='hidden lg:flex flex-row items-center justify-end gap-4'>
          <Button variant="ghost">Help</Button>
          <Link to='/auth/login'>
            <Button>Login</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-end">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {/* Add a hamburger menu icon */}
            Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </Button>
        </div>

      </div >
      {/* Mobile Menu */}
      {mobileMenuOpen &&
        <div className='lg:hidden flex flex-col py-4 px-4 bg-white rounded-b-sm'>
          <div className='border-b-2'>
            <button className='px-4 py-2'>Vision</button>
          </div>
          <div className='border-b-2'>
            <button className='px-4 py-2'>Solutions</button>
          </div>
          <div className='border-b-2'>
            <button className='px-4 py-2'>Pricing</button>
          </div>
          <div className='border-b-2'>
            <button className='px-4 py-2'>Help</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar
