import { Button } from "./ui/button"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    // Section Container
    <motion.div
      animate={{
        backgroundImage: [
          `radial-gradient(150% 90% at 15% 0%, #ffffff 55%, var(--green-500))`,
          `radial-gradient(125% 125% at 25% 0%, #ffffff 55%, var(--green-500))`,
          `radial-gradient(150% 90% at 50% 0%, #ffffff 55%, var(--green-500))`,
          `radial-gradient(125% 125% at 75% 0%, #ffffff 55%, var(--green-500))`,
          `radial-gradient(150% 90% at 85% 0%, #ffffff 55%, var(--green-500))`,
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className='flex flex-col justify-center items-center h-screen'>
      {/*Content Container*/}
      <div className='flex flex-col justify-center items-center gap-2'>
        {/*Line 1*/}
        <div className='text-[4rem] font-extrabold leading-tight flex flex-row gap-5 text-g-800'>
          {/*Track*/}
          <span className=''>
            <span className='hover:cursor-pointer flex flex-row gap-1 hover:text-[#1982c4]'>
              <span className='hover:-rotate-12 transition-all duration-300 hover:font-thin'>T</span>
              <span className='hover:rotate-6 transition-all duration-300 hover:font-thin'>R</span>
              <span className='hover:-rotate-3 transition-all duration-300 hover:font-thin'>A</span>
              <span className='hover:rotate-12 transition-all duration-300 hover:font-thin'>C</span>
              <span className='hover:-rotate-6 transition-all duration-300 hover:font-thin'>K</span>
              <span className='hover:rotate-12 transition-all duration-300 hover:font-thin'>.</span>
            </span>
          </span>
          {/*Split*/}
          <span className=''>
            <span className='hover:cursor-pointer flex flex-row gap-1 hover:text-[#136f63]'>
              <span className='hover:-rotate-12 transition-all duration-300 hover:font-thin'>S</span>
              <span className='hover:rotate-6 transition-all duration-300 hover:font-thin'>P</span>
              <span className='hover:-rotate-3 transition-all duration-300 hover:font-thin'>L</span>
              <span className='hover:rotate-12 transition-all duration-300 hover:font-thin'>I</span>
              <span className='hover:-rotate-6 transition-all duration-300 hover:font-thin'>T</span>
              <span className='hover:-rotate-12 transition-all duration-300 hover:font-thin'>.</span>
            </span>
          </span>
          {/*Settle*/}
          <span className=''>
            <span className='hover:cursor-pointer flex flex-row gap-1 hover:text-[#ffca3a]'>
              <span className='hover:-rotate-12 transition-all duration-300 hover:font-thin'>S</span>
              <span className='hover:rotate-6 transition-all duration-300 hover:font-thin'>E</span>
              <span className='hover:-rotate-3 transition-all duration-300 hover:font-thin'>T</span>
              <span className='hover:rotate-12 transition-all duration-300 hover:font-thin'>T</span>
              <span className='hover:-rotate-6 transition-all duration-300 hover:font-thin'>L</span>
              <span className='hover:rotate-3 transition-all duration-300 hover:font-thin'>E</span>
              <span className='hover:rotate-12 transition-all duration-300 hover:font-thin'>.</span>
            </span>
          </span>
        </div>
        {/*Line 2*/}
        <div className='text-[10rem] font-extrabold leading-tight flex flex-row gap-5'>
          {/*Paylog*/}
          <span className='font-doto font-extrabold'>
            <span className='hover:cursor-pointer flex flex-row gap-1'>
              <span className='hover:-rotate-12 transition-all duration-30 hover:text-[#560bad] hover:font-extralight'>P</span>
              <span className='hover:rotate-12 transition-all duration-300 hover:text-[#ee6c4d] hover:font-extralight'>A</span>
              <span className='hover:-rotate-6 transition-all duration-300 hover:text-[#31572c] hover:font-extralight'>Y</span>
              <span className='hover:rotate-12 transition-all duration-300 hover:text-[#003566] hover:font-extralight'>L</span>
              <span className='hover:-rotate-12 transition-all duration-300 hover:text-[#dd2d4a] hover:font-extralight'>O</span>
              <span className='hover:rotate-6 transition-all duration-300 hover:text-[#603808] hover:font-extralight'>G</span>
            </span>
          </span>
        </div>
        {/*Line 3*/}
        <div className='text-2xl font-normal text-gray-700 tracking-wide text-center mb-2'>
          Effortlessly Manage Expenses Anywhere and Anytime.
        </div>
        {/*CTA*/}
        <div className='flex flex-col gap-2 mt-2 items-center group'>
          <div className='invisible group-hover:visible text-gray-600 text-lg transition-opacity duration-300'>
            Here to handle your expenses
          </div>
          <Button className='transition-transform duration-300 group-hover:scale-105'>
            Try Now!
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
