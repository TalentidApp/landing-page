"use client";

import React from "react";
import Header from "../components/common/header";
import AboutFooter from "../components/common/About_footer";
import { motion } from "framer-motion";
import PartnershipCard from "../components/common/PartnershipCard";
import { useRouter } from "next/navigation";
import FAQs from "../components/common/FAQs";
const images = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kyfqq7fta6nlkf8afffc",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/htpsqkmkohpevuoyrnma",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/ayx3u8loxloztsdzro4n",
  }, // Add more partners as needed
];
const Parternship = () => {
    const router = useRouter();
  return (
    <>
      <div className=" bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#652d96,_#e9d5ff)]">
        <Header />
        <div className=" mb-10 text-black">
          <div className="py-2 flex items-center justify-center">
            <div className=" bg-white rounded-2xl max-w-6xl w-full flex flex-col md:flex-row items-center py-4">
              <div className="p-4 px-10  md:w-1/2">
                <div className="text-xl text-justify">
                  <div className="flex items-center mb-4">
                    {/* <button className="mr-4">
                  <img
                    src="/src/Images/partnership/backArrow.png"
                    alt="Back Arrow"
                    className="h-6"
                  />
                </button> */}
                    <h2 className="my-5 section-title text-4xl md:text-4xl font-bold text-center text-gray-900">
                      Help your clients hire better
                    </h2>
                  </div>
                  <p className="text-base">
                    You're looking to grow your business, and we're here to help
                    with the Talent ID partner program. Join the Talent ID
                    family, and start providing HR services to clients around
                    the world. Whether you're working with a staffing agency or
                    internal HR, you can monetize your knowledge and grow with
                    your customers.
                  </p>
                  <div className="mt-4">
                    <button
                      className="bg-purple-900 text-white px-4 py-2 rounded-xl font-normal text-lg hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
                      onClick={() => (window.location.href = "/contactus")}
                    >
                      Become a Partner
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8 md:w-1/2 flex justify-center">
                <img
                  src="https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/bt0zkwsdxhxcpdwn1jls"
                  alt="About Us Image"
                  className="h-64 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="h-[60vh] py-20 bg-white ">
          <div className="flex flex-col items-center mb-5">
            <h2 className="text-black text-4xl font-bold">Our Partners</h2>
            <p className="text-black text-lg">
              Let's build something great together
            </p>
          </div>

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
                    src={image.image}
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
        <PartnershipCard/>
        <section className="bg-white py-10 text-center">
        <h2 className="my-5 section-title text-4xl md:text-5xl py-5 font-bold text-center text-gray-900">
        Let's Grow Together
                    </h2>
      
      <button
         onClick={() => router.push("/contact")}
        className="bg-black text-white py-2 px-6 rounded-xl font-bold hover:bg-gray-900 hover:shadow-lg hover:shadow-black-500/50 transition duration-300"
      >
        Convinced? Get Started →
      </button>
      <div className="mt-8">
        <img
          src="https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/xingkqbfu0mbbraj8n8a"
          alt="Growth Image"
          className="mx-auto h-96"
        />
      </div>
    </section>
    <FAQs/>
        <AboutFooter />
      </div>
    </>
  );
};

export default Parternship;
