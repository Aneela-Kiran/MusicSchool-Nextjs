"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/wave.jpg"
          width={800}
          height={800}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Unleash Your Inner Musician with Expert Guidance",
    description:
      "Our experienced instructors are passionate about helping you unlock your full musical potential. Whether you're a beginner or an advanced musician, our tailored lessons will guide you toward achieving your musical dreams.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music-school.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "A Community of Music Enthusiasts Await You",
    description:
      "Join a vibrant community of like-minded individuals who share your passion for music. Collaborate, learn, and grow together in an inspiring and supportive environment that fosters creativity and innovation.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/guitar.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Tailored Programs for All Ages and Skill Levels",
    description:
      "From young beginners to seasoned musicians, we offer programs for every age and experience level. Our flexible curriculum ensures that you get the personalized attention and guidance you need to thrive, no matter where you are on your musical journey.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/druming.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];


const   WhyChooseUs = () => {
  return (
    <div> 
         <h1 className=" text-center bg-gray-900 py-8 text-3xl sm:text-4xl  text-teal-500 uppercase tracking-wide font-bold">Why Choose Us</h1> 
<StickyScroll content={content} />

    </div>
  )
}

export default WhyChooseUs