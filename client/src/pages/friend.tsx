import AddExpense from "@/components/addExpense";
import SettleUp from "@/components/settleUp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Friend = () => {
  const [showAddExpensePopup, setShowAddExpensePopup] = useState(false);
  const [showSettleUpPopup, setShowSettleUpPopup] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Friend's name */}
      <h1 className="text-4xl font-bold text-center">Rishab</h1>

      {/* Add expense and settle up buttons */}
      <div className="flex justify-center gap-4">
        <Button
          className="h-12 w-32"
          onClick={() => setShowAddExpensePopup(true)}
        >
          Add Expense
        </Button>
        <Button
          className="h-12 w-32"
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

      {/* List of expenses and activities */}
      <div className="space-y-4">
        {[
          { date: "Mar 02", title: "Pickle Ball", paidBy: "You", amount: 450, lent: 450, to: "Rishab" },
          { date: "Feb 12", title: "", paidBy: "You", amount: 75, lent: 0, to: "Rishab" },
          { date: "Feb 05", title: "Spotify", paidBy: "Rishab", amount: 100, lent: 25, to: "You" },
          { date: "Jan 31", title: "Burger", paidBy: "Rishab", amount: 20, lent: 10, to: "You" },
          { date: "Jan 20", title: "", paidBy: "Rishab", amount: 88, lent: 0, to: "You" },
          { date: "Jan 20", title: "Sunburn", paidBy: "Rishab", amount: 150, lent: 100, to: "You" },
          { date: "Jan 05", title: "Clothes", paidBy: "You", amount: 55, lent: 55, to: "Rishab" },
        ].map((expense, index) => (
          <Card key={index} className="p-4 shadow-md rounded-2xl">
            <CardContent className="space-y-2">
              <div className="text-sm text-gray-500">{expense.date}</div>
              {expense.title && <div className="text-lg font-semibold">{expense.title}</div>}
              <div className="space-y-1">
                <div>{`${expense.paidBy} paid $${expense.amount.toFixed(2)}`}</div>
                {expense.lent > 0 && (
                  <div className="text-sm text-gray-600">
                    {`${expense.paidBy} lent ${expense.to} $${expense.lent.toFixed(2)}`}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Friend;
