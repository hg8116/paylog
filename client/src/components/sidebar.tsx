import { useState } from 'react'
import Person from '/person.png'
import { Check, ChevronDownCircleIcon, ChevronsUpDown, ChevronUpCircleIcon, CirclePlus, Eye, FileUser, PartyPopper, RotateCcw, SettingsIcon } from "lucide-react"
import { Link, useNavigate } from 'react-router'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandItem } from '@/components/ui/command'
import { useAuth } from '@/context/authProvider'


const AllProfiles = [
  {
    value: "business",
    name: "Business"
  },
  {
    value: "personal",
    name: "Personal"
  },
  {
    value: "random",
    name: "Random"
  }
]

const Sidebar = () => {

  const navigate = useNavigate()

  const { setIsAuthenticated, user, setUser } = useAuth()

  const [showFriends, setShowFriends] = useState(true)
  const [showGroups, setShowGroups] = useState(true)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [profile, setProfile] = useState("personal")

  const handleLogout = async () => {
    await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      credentials: "include",
    })

    alert("user logged out!")
    console.log("user logged out");
    setIsAuthenticated(false)
    setUser({
      id: 0,
      name: "",
      email: ""
    })
  }

  return (
    <div className="flex flex-col bg-blue-100 w-1/5 gap-6 px-5 py-6 min-h-screen">

      {/* User info & settings */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <img src={Person} alt="user-icon" className="h-12 w-12 rounded-full" />
            <span className="font-bold text-xl">{user?.name}</span>
          </div>
          <SettingsIcon className="cursor-pointer hover:text-blue-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/dashboard/myaccount')}>My Account</DropdownMenuItem>
          <DropdownMenuItem>Create a group</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profiles Section */}
      <div>
        <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-2">
          <span>PROFILES</span>
          <CirclePlus className="cursor-pointer hover:text-blue-700" />
        </div>
        {/*
        <ul className="space-y-2">
          <li className="flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer transition-colors hover:bg-blue-400 hover:text-white">
            <User />
            <span>Personal</span>
          </li>
        </ul>
        */
        }

        <Popover open={showProfileDropdown} onOpenChange={setShowProfileDropdown}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={showProfileDropdown}
              className="w-full justify-between"
            >
              {profile
                ? AllProfiles.find((pro) => pro.value === profile)?.name
                : "Select profile..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command className="w-full">
              <CommandInput placeholder="Search profile..." />
              <CommandList>
                <CommandEmpty>No profile found.</CommandEmpty>
                <CommandGroup>
                  {AllProfiles.map((pro) => (
                    <CommandItem
                      key={pro.value}
                      value={pro.value}
                      onSelect={() => {
                        setProfile(pro.value)
                        setShowProfileDropdown(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          profile === pro.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {pro.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
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
