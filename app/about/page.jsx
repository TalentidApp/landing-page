"use client";
import React from "react";
import { Header } from "../components/common";
import { motion } from "framer-motion";
import About_footer from "../components/common/About_footer";

const images = [
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kym5sco05zqoyvfygiwz",
    alt: "Alpha Ed Logo",
  },
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/rftttuaoctvxm204v952",
    alt: "Bio Reform Logo",
  },
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/mgmky9jsvhvottghskd0",
    alt: "Gamology Logo",
  },
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/phmpylyzhyb8snxaoy4j",
    alt: "Goodmind Logo",
  },
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kym5sco05zqoyvfygiwz",
    alt: "Alpha Ed Logo",
  },
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/rftttuaoctvxm204v952",
    alt: "Bio Reform Logo",
  },
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/mgmky9jsvhvottghskd0",
    alt: "Gamology Logo",
  },
  {
    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/phmpylyzhyb8snxaoy4j",
    alt: "Goodmind Logo",
  },
];

export default function AboutPage() {
  return (
    <div>
        <Header />
      <div className="h-screen pb-20 md:pb-0 overflow-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#652d96,_#e9d5ff)]">
        <div className="h-screen mx-auto p-4 pt-6 md:p-6 lg:p-10">
          <div className="max-w-6xl mt-2 mx-auto bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center">
            <div className="p-8 w-full md:w-3/4">
            <div className="text-center">
<h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#170a24] to-[#7133a8]">
    Talent ID - HireXzo Solutions LLP <br /> <br />
  </h3>
</div>


              <div className="text-base md:text-lg lg:text-xl text-justify mt-6">
                <ul className="space-y-4">
                  <li>
                    We were born from frustration. The traditional methods of
                    talent acquisition felt slow, clunky, and offered little
                    insight into the effectiveness of our efforts. We saw a
                    disconnect between the time and resources invested and the
                    quality of candidates we attracted.
                  </li>
                  <li>
                    We knew it had to be user-friendly, data-driven, and
                    powerful enough to transform the way companies find and hire
                    their best people.
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-8 w-full md:w-1/4 flex justify-center">
              <img
                src="https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/ynfiarpor3kxwwxzxtc8"
                alt="About Us Image"
                className="h-60 rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className="text-center p-8 py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Talent ID’s Mission 🎯
          </h1>
          <p className="mb-12 text-[#9CA3A6] max-w-prose text-base md:text-lg lg:text-lg mx-auto">
            Talent ID aims to solve the problem of last-minute dropouts and help
            1000+ organizations make data-driven solutions by 2025.
          </p>
        </div>
        <section className="h-[70vh] py-6 md:py-24 bg-white ">
          <h2 className="my-5  text-4xl md:text-5xl font-bold text-center text-[#111827]">
            Helping Businesses Grow
          </h2>

          <div className="flex items-center justify-center">
            <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
              <motion.div
                className="flex gap-14 animate-scroll"
                style={{ width: "fit-content" }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...images, ...images, ...images].map((image, idx) => (
                  <img
                    key={idx}
                    className="   w-40 h-auto object-contain"
                    src={image.src}
                    alt={`Partner Logo ${idx + 1}`}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/120";
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <About_footer />
    </div>
  );
}
