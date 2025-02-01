"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-h-screen">
      <section className="text-gray-800 body-font text-lg font-serif font-bold">
        <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col justify-center items-center">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-12 flex flex-col md:items-center md:text-left  items-center text-center">
            <p className="pb-3 text-4xl text-blue-900 mt-14">
              Welcome to My Blog
            </p>
            <h1 className="title-font text-center mt-3 md:mb-10 text-lg font-medium text-black">
              Discover in-depth knowledge, step-by-step tutorials, and engaging content on web development, programming, and technology. Whether you&#39;re a seasoned developer or a newcomer to coding, you&#39;ll uncover practical tips, detailed how-to guides, and innovative ideas. Join a community dedicated to simplifying complex concepts, sparking your curiosity, and fueling your enthusiasm for tech.
            </h1>
            <div className="flex justify-center items-center md:pt-1 pt-5">
              <Link
                href={"/blog"}
                className="inline-flex bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-600  transition-colors duration-300 shadow-md"
              >
                Explore Now
              </Link>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:max-w-lg md:pr-20 lg:w-full md:w-1/2 w-5/6 rounded-2xl">
            <Image
              className="object-contain md:h-[480px] h-[355px] rounded-3xl"
              alt="hero blog image"
              src="/hero.jpg"
              width={500}
              height={350}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
