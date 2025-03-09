import { CircleUserRound } from "lucide-react";

const dummyActivities = [
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
  {
    user: "Aman",
    action: "settled up with",
    recipient: "Rahul",
    group: "Trip to Manali",
    amount: "$600.00",
    amountColor: "text-red-500",
    date: "10/01/2025 3:20 PM",
  },
  {
    user: "You",
    action: "paid for",
    recipient: "Hotel Booking",
    group: "Vacation Goa",
    amount: "$2,500.00",
    amountColor: "text-green-500",
    date: "05/01/2025 7:10 PM",
  },
  {
    user: "Sanya",
    action: "added",
    recipient: "Weekend Party",
    group: "Friends Forever",
    date: "01/01/2025 10:30 AM",
  },
  {
    user: "Rohit",
    action: "recorded a payment from",
    recipient: "You",
    group: "Office Team Lunch",
    amount: "$450.00",
    amountColor: "text-red-500",
    date: "30/12/2024 6:15 PM",
  },
  {
    user: "Mehak",
    action: "was added to the group",
    recipient: "Gym Buddies",
    date: "25/12/2024 8:00 AM",
  },
  {
    user: "You",
    action: "paid",
    recipient: "Spotify Subscription",
    group: "Entertainment",
    amount: "$10.99",
    amountColor: "text-green-500",
    date: "20/12/2024 11:59 PM",
  },
  {
    user: "You",
    action: "added",
    recipient: "Netflix",
    group: "Subscriptions",
    amount: "$15.99",
    amountColor: "text-green-500",
    date: "15/12/2024 6:45 PM",
  },
  {
    user: "Aditi",
    action: "recorded a payment from",
    recipient: "You",
    group: "Hostel Rent",
    amount: "$1,200.00",
    amountColor: "text-red-500",
    date: "10/12/2024 2:30 PM",
  },
  {
    user: "Varun",
    action: "added",
    recipient: "Pizza Party",
    group: "Late Night Fun",
    date: "05/12/2024 9:50 PM",
  },
  {
    user: "You",
    action: "paid",
    recipient: "Electricity Bill",
    group: "Apartment Expenses",
    amount: "$220.00",
    amountColor: "text-green-500",
    date: "01/12/2024 4:00 PM",
  },
];

const PastActivity = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">All Past Activities</h2>
      <ul className="space-y-3">
        {dummyActivities.map((activity, index) => (
          <li
            key={index}
            className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-200 text-gray-600 rounded-full">
              <CircleUserRound size={28} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                <span className="font-semibold">{activity.user}</span> {activity.action} {" "}
                {activity.recipient && <span className="font-semibold">{activity.recipient}</span>} {" "}
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
  );
};

export default PastActivity;
