import { useState } from 'react'
import Person from '/person.png'
import { ChevronDownCircleIcon, ChevronUpCircleIcon, CirclePlus, Eye, FileUser, PartyPopper, SettingsIcon, User } from "lucide-react"

const Sidebar = () => {

  const [showFriends, setShowFriends] = useState(true)
  const [showGroups, setShowGroups] = useState(true)

  return (
    <div className='flex flex-col bg-blue-100 w-1/5 gap-5 px-4 py-4'>
      {/* User info & settings */}
      <div>
        <div className='flex justify-between items-center gap-20'>
          <div className='flex justify-center items-center gap-2'>
            <img src={Person} alt="user-icon" height={50} width={50} />
            <span className='font-bold text-xl'>Rahul Dalal</span>
          </div>
          <SettingsIcon />
        </div>
      </div>

      {/* Profiles */}
      <div className='flex flex-col'>
        <div className='flex justify-between text-l font-semibold text-gray-800'>
          <span>PROFILES</span>
          <CirclePlus />
        </div>
        <ul className='px-2 py-3'>
          <li className='flex flex-row gap-2 hover:bg-blue-500 px-2 py-4 hover:rounded-md hover:cursor-pointer'>
            <User />
            <span>Personal</span>
          </li>
        </ul>
      </div>

      {/* Pages */}
      <div>
        <div className='flex justify-between text-l font-semibold text-gray-800'>
          <span>PAGES</span>
          <CirclePlus />
        </div>
        <ul className='px-2 py-3'>
          <li className='flex flex-row gap-2 hover:bg-blue-500 px-2 py-4 hover:rounded-md hover:cursor-pointer'>
            <Eye />
            <span>Overview</span>
          </li>
          <li>
            <div className='flex flex-row justify-between hover:bg-blue-500 px-2 py-4 hover:rounded-md hover:cursor-pointer'
              onClick={() => setShowFriends(!showFriends)}
            >
              <div className='flex flex-row gap-2'>
                <FileUser />
                <span>Friends</span>
              </div>
              {showFriends ? <ChevronUpCircleIcon /> : <ChevronDownCircleIcon />}
            </div>
            {showFriends &&
              <ul className='pl-8'>
                <li className='hover:cursor-pointer py-1'>Parth</li>
                <li className='hover:cursor-pointer py-1'>Shubham</li>
                <li className='hover:cursor-pointer py-1'>Kajal</li>
                <li className='hover:cursor-pointer py-1'>Naman</li>
                <li className='hover:cursor-pointer py-1'>Salman</li>
                <li className='hover:cursor-pointer py-1'>Shobhit</li>
                <li className='hover:cursor-pointer py-1'>Jackson</li>
              </ul>}
          </li>
          <li>
            <div className='flex flex-row justify-between gap-2 hover:bg-blue-500 px-2 py-4 hover:rounded-md hover:cursor-pointer'
              onClick={() => setShowGroups(!showGroups)}
            >
              <div className='flex flex-row gap-2'>
                <PartyPopper />
                <span>Groups</span>
              </div>
              {showGroups ? <ChevronUpCircleIcon /> : <ChevronDownCircleIcon />}
            </div>
            {showGroups &&
              <ul className='pl-8'>
                <li className='hover:cursor-pointer py-1'>Pahad Chalo</li>
                <li className='hover:cursor-pointer py-1'>Roadtrip Goa</li>
                <li className='hover:cursor-pointer py-1'>Gurgaon Gang</li>
                <li className='hover:cursor-pointer py-1'>Office Office</li>
              </ul>}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
