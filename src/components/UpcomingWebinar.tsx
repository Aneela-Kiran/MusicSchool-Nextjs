
    'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinar = () => {

  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true
    },
    {
      title: 'The Art of Songwriting',
      description: 'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: false
    },
    {
      title: 'Mastering Music Production',
      description: 'Explore the techniques used in modern music production and sound design.',
      slug: 'mastering-music-production',
      isFeatured: true
    },
    {
      title: 'Improvisation for Musicians',
      description: 'Unlock the secrets of improvisation and develop spontaneity in your musical expression.',
      slug: 'improvisation-for-musicians',
      isFeatured: false
    },
    {
      title: 'Advanced Vocal Techniques',
      description: 'Enhance your vocal range and control with advanced singing techniques.',
      slug: 'advanced-vocal-techniques',
      isFeatured: true
    },
    {
      title: 'Building a Music Career',
      description: 'Learn the business side of the music industry and how to build a sustainable music career.',
      slug: 'building-a-music-career',
      isFeatured: false
    }
  ];
  





  return (
    <div className="p-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
      <div className="text-center">
      <h2 className="text-base text-teal-500 uppercase tracking-wide font-semibold">Featured Webinar</h2>
      <p  className=" mt-3 text-3xl sm:text-4xl  font-extrabold  tracking-tight leading-8">Enhance your musical Journey</p>
      </div>
      <div className="mt-10">

      <HoverEffect items={featuredWebinars.map(webinar=>(
        {
          title:webinar.title,
          description:webinar.description,
          link:'/courses'
        }
      ))} />
      </div>
      <div className="mt-10 text-center">
                    <Link href={'/courses'} >
                    <button className="bg-white p-2 px-4 text-teal-500 rounded-lg mt-3 font-bold">
                      view all Webinar
                    </button>
                    </Link>
      </div>
      </div>
    </div>
  )
}

export default UpcomingWebinar