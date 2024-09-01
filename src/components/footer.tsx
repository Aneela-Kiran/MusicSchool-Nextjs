import Link from 'next/link';
import React from 'react'
import { FaFacebook ,FaLinkedin , FaInstagram , FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' w-full mx-auto bg-gray-900 pt-10 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left'>
        {/* logo section  */}
      <div>
        <h2  className='mt-6 font-bold text-2xl ml-4 '>Music school</h2>
      </div>
      {/* quick links  */}
      <div className='flex flex-col justify-center items-center  py-2 sm:items-start'>
        <h3 className='font-bold  underline underline-offset-4 decoration-teal-500'>Quick Links</h3>
        <ul className='mt-4 cursor-pointer space-y-3'>
        <Link href={'/'}><li>Home</li></Link>
         <Link href={'/'}><li>About us</li></Link> 
          <Link href={'/courses'}> <li>Courses</li></Link>
         <Link href={'/contact'}> <li>Contact us</li></Link> 
        </ul>
      </div>
      {/* contact secton */}
      <div className='flex flex-col items-center sm:items-start'>
        <h3 className='font-bold underline underline-offset-4 decoration-teal-500 mt-[8px]'>Contact Us</h3>
          <ul className='mt-4 space-y-2 text-white'>
            <li>location : Lahore , Pakistan </li>
            <li>Email: musicschool@gmail.com</li>
            <li>phone: +92312567888</li>
          </ul>
        </div>
      {/* follow us */}
        <div  className=''>
         <h3 className='font-bold  underline underline-offset-4 decoration-teal-500'>Follow us</h3>
       
          <ul className='flex mt-5  justify-center items-center space-x-4 cursor-pointer text-2xl sm:items-start sm:justify-start text-teal-400'>
            
            <li>
              < FaFacebook/>
            </li>
            <li>
              <FaLinkedin/>
            </li>
            <li>
            <FaTwitter/>
            </li>
            <li>    
          <FaInstagram/>
            </li>
          </ul>
        </div>

      </div>
      <p className='text-center mt-8 text-xs'> ©2024 Music School.All right reserved</p>
    </div>
  )
}

export default Footer