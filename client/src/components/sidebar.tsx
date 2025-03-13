import { useState } from 'react'
import Person from '/person.png'
import { ChevronDownCircleIcon, ChevronUpCircleIcon, CirclePlus, Eye, FileUser, PartyPopper, RotateCcw, SettingsIcon, User } from "lucide-react"
import { Link, useNavigate } from 'react-router'

const Sidebar = () => {
  const navigate = useNavigate()

  const [showFriends, setShowFriends] = useState(true)
  const [showGroups, setShowGroups] = useState(true)

  return (
    <div className="flex flex-col bg-blue-100 w-1/5 gap-6 px-5 py-6 min-h-screen">

      {/* User info & settings */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={Person} alt="user-icon" className="h-12 w-12 rounded-full" />
          <span className="font-bold text-xl">Rahul Dalal</span>
        </div>
        <SettingsIcon className="cursor-pointer hover:text-blue-700" />
      </div>

      {/* Profiles Section */}
      <div>
        <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-2">
          <span>PROFILES</span>
          <CirclePlus className="cursor-pointer hover:text-blue-700" />
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer transition-colors hover:bg-blue-400 hover:text-white">
            <User />
            <span>Personal</span>
          </li>
        </ul>
      </div>

      {/* Pages Section */}
      <div>
        <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-2">
          <span>PAGES</span>
          <CirclePlus className="cursor-pointer hover:text-blue-700" />
        </div>
        <ul className="space-y-1">
          <Link to='/dashboard/overview'>
            <li className="flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer transition-colors hover:bg-blue-400 hover:text-white">
              <Eye />
              <span>Overview</span>
            </li>
          </Link>

          {/* Friends Dropdown */}
          <li>
            <div
              className="flex justify-between items-center px-3 py-3 rounded-md cursor-pointer transition-colors hover:bg-blue-400 hover:text-white"
              onClick={() => setShowFriends(!showFriends)}
            >
              <div className="flex items-center gap-3">
                <FileUser />
                <span>Friends</span>
              </div>
              {showFriends ? <ChevronUpCircleIcon /> : <ChevronDownCircleIcon />}
            </div>
            {showFriends && (
              <ul className="pl-8 space-y-1">
                {["Parth", "Shubham", "Kajal", "Naman", "Salman", "Shobhit", "Jackson"].map((friend) => (
                  <li key={friend} className="py-2 cursor-pointer hover:text-blue-700" onClick={() => navigate('/dashboard/friend')}>
                    {friend}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Groups Dropdown */}
          <li>
            <div
              className="flex justify-between items-center px-3 py-3 rounded-md cursor-pointer transition-colors hover:bg-blue-400 hover:text-white"
              onClick={() => setShowGroups(!showGroups)}
            >
              <div className="flex items-center gap-3">
                <PartyPopper />
                <span>Groups</span>
              </div>
              {showGroups ? <ChevronUpCircleIcon /> : <ChevronDownCircleIcon />}
            </div>
            {showGroups && (
              <ul className="pl-8 space-y-1">
                {["Pahad Chalo", "Roadtrip Goa", "Gurgaon Gang", "Office Office"].map((group) => (
                  <li key={group} className="py-2 cursor-pointer hover:text-blue-700" onClick={() => navigate('/dashboard/group')}>
                    {group}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer transition-colors hover:bg-blue-400 hover:text-white"
            onClick={() => navigate('/dashboard/pastactivity')}
          >
            <RotateCcw />
            <span>Past Activity</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
