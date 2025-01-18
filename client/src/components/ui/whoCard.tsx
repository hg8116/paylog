import { motion } from "framer-motion"

type WhoCardProps = {
  card: {
    image: string
    title: string
    points: string[]
  }
}

const colors = [
  "#cdb4db",
  "#ffc8dd",
  "#bde0fe",
  "#003566",
  "#faedcd",
  "#e9edc9",
];

// Utility function to pick a random color
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const WhoCard = ({ card }: WhoCardProps) => {
  return (
    <motion.li
      className='hover:cursor-pointer text-g-900 w-[350px] h-[450px] flex flex-col justify-start items-start py-10 gap-5 rounded-[20px] border-2 border-g-700'
      animate={{
        backgroundImage: [
          `radial-gradient(150% 100% at 100% 50%, #ffffff 25%, var(--green-500))`,
          `radial-gradient(125% 150% at 100% 50%, #ffffff 50%, var(--green-500))`,
          `radial-gradient(150% 100% at 100% 50%, #ffffff 25%, var(--green-500))`,
        ],
      }}
      whileHover={{
        backgroundImage: [
          `radial-gradient(150% 100% at 100% 50%, #ffffff 25%,${getRandomColor()} )`,
          `radial-gradient(125% 150% at 100% 50%, #ffffff 50%,${getRandomColor()} )`,
          `radial-gradient(150% 100% at 100% 50%, #ffffff 25%,${getRandomColor()} )`,
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {/*Heading*/}
      <div className='text-2xl w-[80%] h-[20%] px-8 font-bold'>
        {card.title}
      </div>
      {/*Subheading*/}
      <div className='text-base text-md px-10 py-5 h-[50%]'>
        <ul>
          {card.points.map((point: string) => (
            <li>~ {point}</li>
          ))}
        </ul>
      </div>
      {/*Image*/}
      <div className='backdrop-blur-xl bg-white/30 w-full flex justify-center items-center h-[30%]'>
        <img src={card.image} width={100} alt={card.image} />
      </div>
    </motion.li>
  )
}

export default WhoCard
