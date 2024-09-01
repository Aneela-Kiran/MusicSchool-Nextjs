'use client'
import { Meteors } from "@/components/ui/meteors";
const Contact = () => {
  return (
    <div className='relative py-8 w-full  min-h-screen  mt-36 bg-gray-950 text-center flex flex-col justify-center items-center overflow-hidden'>

      <div className="w-full max-w-3xl px-4 pr-8 md:px-0">
        <h1 className='text-3xl md:text-6xl text-center font-bold text-white'>Contact Us</h1>
        <p className=' text-sm md:text-base font-normal text-neutral-500  max-w-xl mx-auto mt-5 '>We are here to help you any question about our Courses or programs and Events. Reach out and let us know how we can assits you in your Musical Journey.</p>
        <form action="" className="mt-6">
       <input type="text" className='w-full  bg-gray-800 outline-none m-4 p-3 rounded-lg ' placeholder='Your Email Address'/>
       <textarea  id=" messgae" rows={6} className='w-full  bg-gray-800 p-3 m-4 rounded-lg outline-none ' placeholder='Your Message'></textarea>
       <button type="submit" className='py-2 px-4 font-semibold bg-teal-500 rounded-lg hover:bg-teal-600 transition duration-200'>Send Message</button>
        </form>
        <Meteors number={60} />
      </div>
      
    </div>
  
  )
}

export default Contact