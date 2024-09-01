'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
  {
    id: 1,
    name: 'Aneela Kiran',
    designation: 'Vocal Coach',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    name: 'Kanwal Heer',
    designation: 'Guitar Instructor',
    image: '/assets/1.png',
  },
  {
    id: 3,
    name: 'Shanza Gulab',
    designation: 'Piano Teacher',
    image: '/assets/2.png',
  },
  {
    id: 4,
    name: 'Naimal Arain',
    designation: 'Drum Instructor',
    image: '/assets/3.png',
  },
  {
    id: 5,
    name: 'Fahad Hashim',
    designation: 'Violin Teacher',
    image: '/assets/4.png',
  }
];


const Instructors = () => {
  return (
    <div className=' relative h-[40rem] flex justify-center items-center overflow-hidden'>
      <WavyBackground className="w-full mx-auto h-full mx-w-7xl flex flex-col justify-center items-center ">
      <h2 className="text-2xl md:text-4xl lg:text-7xl text-stone-50 font-bold mb-8 ">Meet Our Instructor</h2>
      <p className="text-base lg:text-lg ">Discover the talented Professionals who will Guide Your Musical Journey 
      </p>

      <div className="flex flex-row items-center justify-center mb-10 mt-16 w-full">
      <AnimatedTooltip items={instructors} />
    </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors