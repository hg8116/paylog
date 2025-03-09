import AddExpense from "@/components/addExpense"
import SettleUp from "@/components/settleUp"
import { Button } from "@/components/ui/button"
import { CircleUserRound } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"

const Overview = () => {
  const navigate = useNavigate()

  const [showAddExpensePopup, setShowAddExpensePopup] = useState(false)
  const [showSettleUpPopup, setShowSettleUpPopup] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<{ name: string; amount: string } | null>(null)

  return (
    <div className='flex flex-col p-4 gap-8'>
      <div className='text-5xl font-bold'>Overview</div>

      {/* Top half */}
      <div className='flex flex-row gap-10'>
        {/* Total balance */}
        <div className='border-2 border-gray-400 flex flex-col gap-2 justify-center p-5 rounded-xl'>
          <div className='text-xl font-semibold'>Total Balance</div>
          <div className='text-4xl font-semibold'>+$1,771.15</div>
        </div>

        {/* You Owe */}
        <div className='border-2 border-gray-400 flex flex-col gap-2 justify-center p-5 rounded-xl'>
          <div className='text-xl font-semibold'>You Owe</div>
          <div className='text-4xl font-semibold'>$350.00</div>
        </div>

        {/* You owed */}
        <div className='border-2 border-gray-400 flex flex-col gap-2 justify-center p-5 rounded-xl'>
          <div className='text-xl font-semibold'>You Owed</div>
          <div className='text-4xl font-semibold'>$2,121.15</div>
        </div>
        {/* Add Expense & Settle Up */}
        <div className='flex flex-col gap-2 justify-center'>
          <div>
            <Button className='h-12 w-18'
              onClick={() => setShowAddExpensePopup(!showAddExpensePopup)}
            >Add Expense</Button>
            <AddExpense isOpen={showAddExpensePopup} onClose={() => setShowAddExpensePopup(false)} />
          </div>
          <div>
            <Button className='h-12 w-18'
              onClick={() => setShowSettleUpPopup(!showSettleUpPopup)}
            >Settle Up</Button>
            <SettleUp isOpen={showSettleUpPopup} onClose={() => setShowSettleUpPopup(false)}
              defaultAmount={selectedPerson?.amount}
              defaultPaidBy="You"
              defaultPaidTo={selectedPerson?.name}
            />
          </div>
        </div>
      </div>

      {/* Bottom half */}
      <div className='flex flex-row gap-10'>
        {/* You owe and owed details */}
        <div className='flex flex-row gap-10'>
          {/* You owe details */}
          <div className="p-6 bg-white rounded-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">You Owe</h2>
            <ul className="space-y-3">
              {[
                { name: "Prabhas", amount: "$500.00" },
                { name: "Satyam", amount: "$211.00" },
                { name: "Ekta", amount: "$115.00" },
              ].map((person, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg bg-gray-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-200 text-red-600 rounded-full">
                    <CircleUserRound size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900">{person.name}</div>
                    <div className="text-red-600 text-sm font-medium">You owe {person.amount}</div>
                  </div>
                  <button
                    onClick={() => { setSelectedPerson(person); setShowSettleUpPopup(true) }}
                    className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition">
                    Settle
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* You are owed details */}
          <div className="p-6 bg-white rounded-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">You Are Owed</h2>
            <ul className="space-y-3">
              {[
                { name: "Prabhas", amount: "$500.00" },
                { name: "Satyam", amount: "$211.00" },
                { name: "Ekta", amount: "$115.00" },
              ].map((person, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg bg-gray-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-200 text-green-600 rounded-full">
                    <CircleUserRound size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900">{person.name}</div>
                    <div className="text-green-600 text-sm font-medium">Owes you {person.amount}</div>
                  </div>
                  <button className="px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition">
                    Remind
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 bg-white border border-gray-300 rounded-xl w-full max-w-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <button
              onClick={() => { navigate("/dashboard/pastactivity") }}
              className="text-sm font-medium text-blue-600 hover:underline">View all</button>
          </div>

          {/* Activity List */}
          <ul className="space-y-3">
            {[
              {
                user: "You",
                action: "paid",
                recipient: "Prabhas",
                group: "Naan Paneer",
                amount: "$1,384.90",
                amountColor: "text-green-500",
                date: "06/03/2025 9:08 PM",
              },
              {
                user: "Saksham",
                action: "was added to the group",
                recipient: "Naan Paneer",
                date: "04/03/2025 4:35 AM",
              },
              {
                user: "You",
                action: "added",
                recipient: "Doosrakhana",
                amount: "$250.00",
                amountColor: "text-green-500",
                date: "19/02/2025 8:40 AM",
              },
              {
                user: "Ishita",
                action: "added",
                recipient: "Dinner",
                group: "Roz ke kharche",
                date: "15/02/2025 12:28 AM",
              },
              {
                user: "Karan",
                action: "added",
                recipient: "Ekta",
                group: "Office Office",
                date: "14/02/2025 1:28 PM",
              },
              {
                user: "Prabhas",
                action: "recorded a payment from",
                recipient: "You",
                group: "Convocation",
                amount: "$1,000.00",
                amountColor: "text-red-500",
                date: "14/01/2025 9:15 AM",
              },
            ].map((activity, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg bg-gray-50"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 text-gray-600 rounded-full">
                  <CircleUserRound size={28} />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <span className="font-semibold">{activity.user}</span> {activity.action}{" "}
                    {activity.recipient && <span className="font-semibold">{activity.recipient}</span>}{" "}
                    {activity.group && <>in <span className="font-semibold">{activity.group}</span></>}
                  </p>
                  {activity.amount && (
                    <p className={`text-sm font-semibold ${activity.amountColor}`}>
                      {activity.user === "You" ? "You paid" : ""} {activity.amount}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Overview
