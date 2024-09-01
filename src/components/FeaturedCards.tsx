'use client'
import Image from "next/image"
import Link from "next/link"
import courseData from '@/data/music-courses.json'
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
  id:number,
  title:string,
  slug:string,
  price:Number,
  instructor:string,
  description:string,
  isFeatured:boolean,
  image:string
}

const FeaturesCards = () => {
 const featruedData = courseData.courses.filter((course:Course) => course.isFeatured)

  
  return (
    <div className="py-8 bg-gray-900">
        <div>
          <div className="text-center">
           <h1 className="text-base  text-teal-500 uppercase tracking-wide font-semibold">Features  Courses</h1> 
           <p className=" mt-3 text-3xl sm:text-4xl  font-extrabold  tracking-tight leading-8">Learn With the Best</p>
          </div>
        </div>
        <div className="mt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

      {
        featruedData.map((course:Course)=>(
              <div key={course.id} className="flex justify-center items-center">
                  <BackgroundGradient className="flex flex-col bg-white dark:bg-zinc-900 overflow-hidden  rounded-3xl h-full max-w-sm">
                    <div className="p-4  sm:p-6 flex flex-col items-center text-center  ">
                  <img
                 src ={course.image}
                 className="rounded-lg w-56 h-28 overflow-hidden"
                  />
                    <p className="font-bold text-purple-300 uppercase tracking-tight leading-8 mt-2">{course.title}</p>
                    <p className="max-w-lg text-base mx-2 my-2">{course.description}</p>
                    <p className="text-teal-200 ">{course.instructor}</p>
                    <Link href={'/courses'} >
                    <button className="bg-white p-2 text-purple-800 rounded-lg mt-3 font-medium">
                      view courses
                    </button>
                    </Link>
               
                   </div>
                  </BackgroundGradient>

              </div>
        ))}

        </div>

        </div>
        <div className="mt-12 text-center ">
          <Link href={'/courses'} className="  py-3 px-5 text-white rounded-full bg-gradient-to-r from-teal-600 to-purple-800  font-bold  ">
          View All Courses
          </Link>
        </div>

    </div>
  )
}

export default FeaturesCards