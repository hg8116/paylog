import { Button } from "@/components/ui/button"

const Dashboard = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div>Dashboard</div>
      {/* Totals */}
      <div>
        <div>
          <span>Total balance</span>
          <span>+$1,771.15</span>
        </div>
        <div>
          <span>You Owe</span>
          <span>$350.00</span>
        </div>
        <div>
          <span>You are Owed</span>
          <span>$2,121.15</span>
        </div>
      </div>

      {/* Add and Settle */}
      <div>
        <Button>Add an expense</Button>
        <Button>Settle up</Button>
      </div>

      {/* Last 10 activity*/}
      <div>
        <ul>
          <li>Momos - 100 rupee - </li>
        </ul>
      </div>

      {/* Friends and Groups*/}
      <div>
        <div>
          <div>Friends</div>
          <div>
            <ul>
              <li>Rahul</li>
              <li>Rohan</li>
              <li>Aman</li>
              <li>Simran</li>
              <li>Shera</li>
              <li>Salman</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>Groups</div>
        <div>
          <ul>
            <li>Pahad chalo</li>
            <li>Roadtrip goa</li>
            <li>Gang</li>
            <li>Office Office</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
