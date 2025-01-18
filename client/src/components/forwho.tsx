import WhoCard from "./ui/whoCard"
import briefcase from '/briefcase.svg'
import home from '/home.svg'
import smiley from '/smiley.svg'

const cardContent = [
  {
    image: briefcase,
    title: "Friends and Roomates",
    points: [
      "Split rent, utilities, or any shared expenses without hassle.",
      "Keep track of who owes whom and settle up easily."
    ]
  },
  {
    image: home,
    title: "Families",
    points: [
      "Manage household budgets and shared family expenses efficiently.",
      "Ensure transparency and avoid confusion over payments."
    ]
  },
  {
    image: smiley,
    title: "Travel Enthusiasts",
    points: [
      "Perfect for group trips or vacations.",
      "Track travel expenses, divide costs, and settle seamlessly."
    ]
  },
  {
    image: briefcase,
    title: "Freelancers and Small Teams",
    points: [
      "Keep track of project-related expenses with clients or collaborators.",
      "Easily manage shared costs for tools, subscriptions, and events."
    ]
  },
  {
    image: home,
    title: "Students",
    points: [
      "Ideal for managing shared college or dorm expenses with friends.",
      "Simplify splitting bills for meals, outings, and study materials."
    ]
  }
]

const Forwho = () => {

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-32'>
      {/* Heading */}
      <div className='text-5xl text-g-800 font-extrabold'>
        WHO IS PAYLOG FOR ?
      </div>
      {/*Card carousel*/}
      <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
        <ul className='flex items-center justify-around gap-40 animate-infinite-scroll pl-40'>
          {
            cardContent.map((card, key) => (
              <WhoCard card={card} key={key} />
            ))
          }
        </ul>
        <ul className='flex items-center justify-around gap-40 animate-infinite-scroll pl-40' aria-hidden='true'>
          {
            cardContent.map((card, key) => (
              <WhoCard card={card} key={key} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Forwho
