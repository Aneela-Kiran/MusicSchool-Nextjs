"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem]  w-full rounded flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 w-full text-center p-4">
        <h1 className="mt-20 text-4xl md:mt-0 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-8 max-w-lg mx-auto text-neutral-300 md:text-lg text-base">
          Dive into our comperihensive music courses and transformer your
          musical journey today  wheather you are beginner or looking to refine
          your skills  join us to unlock your true potential .
        </p>
        <div className="mt-10">
          <Link href={"/courses"}>
            <Button 
             borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold ">
              Explor courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
