import AddExpense from "@/components/addExpense";
import SettleUp from "@/components/settleUp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";

const Group = () => {
  const [showAddExpensePopup, setShowAddExpensePopup] = useState(false);
  const [showSettleUpPopup, setShowSettleUpPopup] = useState(false);

  return (
    <div className="container mx-auto p-6">
      {/* Group's name */}
      <div className='flex flex-col justify-center items-center mb-8'>
        <h1 className="text-4xl font-bold text-gray-800">Office Office</h1>
      </div>

      {/* Add expense and settle up buttons */}
      <div className="flex justify-center gap-6 mb-8">
        <Button
          className="h-12 w-40 text-lg font-medium"
          onClick={() => setShowAddExpensePopup(true)}
        >
          Add Expense
        </Button>
        <Button
          className="h-12 w-40 text-lg font-medium"
          onClick={() => setShowSettleUpPopup(true)}
        >
          Settle Up
        </Button>
      </div>

      <AddExpense
        isOpen={showAddExpensePopup}
        onClose={() => setShowAddExpensePopup(false)}
      />
      <SettleUp
        isOpen={showSettleUpPopup}
        onClose={() => setShowSettleUpPopup(false)}
        defaultPaidBy="You"
      />

      <div className='flex gap-8'>
        {/* Main content - Expenses */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Expense History</h2>
          <div className="space-y-4">
            {[
              { date: "Nov 16", title: "Chillis", paidBy: "You", amount: 801, lent: 600, to: "Group" },
              { date: "Aug 25", title: "Galouti", paidBy: "Ekta", amount: 1150, lent: 384, to: "You" },
              { date: "Aug 05", title: "Spotify", paidBy: "Rishab", amount: 180, lent: 45, to: "You" },
              { date: "Jul 31", title: "Krispy creme", paidBy: "Naman", amount: 675, lent: 168, to: "You" },
              { date: "Jul 20", title: "Social", paidBy: "Rishab", amount: 500, lent: 400, to: "You" },
            ].map((expense, index) => (
              <Card key={index} className="p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                <CardContent className="space-y-2">
                  <div className="text-sm text-gray-500 font-medium">{expense.date}</div>
                  {expense.title && <div className="text-lg font-semibold text-gray-800">{expense.title}</div>}
                  <div className="space-y-1">
                    <div className="text-gray-700">{`${expense.paidBy} paid ₹${expense.amount.toFixed(2)}`}</div>
                    {expense.lent > 0 && (
                      <div className="text-sm text-gray-600">
                        {`${expense.paidBy} lent ${expense.to} ₹${expense.lent.toFixed(2)}`}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar - Group Members */}
        <div className="w-80 shrink-0">
          <Card className="sticky top-6">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Group Members</h2>
              <div className="space-y-3">
                {/* Group Member 1 */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full">
                      <CircleUserRound size={24} />
                    </div>
                    <div className="font-medium text-gray-800">Rishab</div>
                  </div>
                  <div className="text-sm font-semibold text-red-500">
                    You owe ₹450
                  </div>
                </div>

                {/* Group Member 2 */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full">
                      <CircleUserRound size={24} />
                    </div>
                    <div className="font-medium text-gray-800">Aman</div>
                  </div>
                  <div className="text-sm font-semibold text-green-500">
                    Owes you ₹300
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Group;
