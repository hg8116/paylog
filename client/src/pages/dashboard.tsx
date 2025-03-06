import Overview from '@/components/overview'
import Sidebar from '@/components/sidebar'

const Dashboard = () => {
  return (
    <div className='h-screen w-screen flex'>
      {/* Sidebar */}
      <Sidebar />
      <Overview />
    </div >
  )
}

export default Dashboard
