"use client"

import React, { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Header from "../components/common/header";
import About_footer from "../components/common/About_footer";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

const ContactUs = () => {
//   const navigate = useNavigate();
//   const apiUrl = import.meta.env.VITE_API_URL;

  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOptionChange = (event) => setSelectedOption(event.target.value);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${apiUrl}/api/contactus/contact-us`, {
        ...formData,
        queryOptions: selectedOption,
      });
     
      setFormData({ fullname: "", company: "", email: "", phone: "", message: "" });
      navigate("/");
    } catch (error) {
     
    }
  };

return (
    <>
            <Header />
            <div className="h-[130vh] px-10  pb-20 md:pb-0 overflow-hidden flex justify-between items-center bg-[#E9D5FF]">
            {/* Contact Details Section */}
            <div className=" p-8  h-[120vh] max-w-lg w-full flex flex-col justify-center ">
                <div className="mb-6">

                <h2 className="text-5xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-6 text-gray-600">
                    
                Email, call or complete the form to learn how
                talentId can solve your messaging problem.
                </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-xl text-black" />
                        <p>Support@talentid.app</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-xl text-black" />
                        <p>+91 7799112167, 9505001969</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-xl text-black mt-1" />
                        <p>HireXzo Solutions LLP, Balaji Nagar, Mallapur, Hyderabad, Telangana, India - 500005</p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white mt-5 h-[115vh] p-8 rounded-xl shadow-2xl max-w-lg w-full border border-gray-200">
                <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
                <p className="text-gray-600 mb-6">You can reach us anytime.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                        <div className="relative w-full flex items-center">
                            <FaUser className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                value={formData.fullname}
                                onChange={handleInputChange}
                                className="pl-10 w-full p-3 border rounded-full"
                            />
                        </div>
                        <div className="relative w-full flex items-center">
                            <FaBuilding className="absolute left-3 text-gray-500" />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="pl-10 w-full p-3 border rounded-full"
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-3 text-gray-500" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 w-full p-3 border rounded-full"
                        />
                    </div>
                    <div className="relative flex items-center">
                        <span className="absolute left-3 text-gray-500">+91</span>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your mobile number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-12 w-full p-3 border rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-2">How can we help?</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {["Pricing Query", "Partnership issues", "Affiliate program", "Integration partnership", "Book a demo", "Others"].map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="queryOptions"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                        className="cursor-pointer"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg resize-none"
                        placeholder="Message here..."
                        rows="4"
                    ></textarea>
                    <button type="submit" className="w-full bg-[#652D96] text-white p-3 rounded-full font-semibold hover:bg-purple-700 transition">
                        Submit
                    </button>
                    <p className="text-center font-light text-sm px-10">By contacting us, you agree to our
                    <span className="font-semibold">  Terms of service </span> and <span className="font-semibold">Privacy Policy</span> </p>
                </form>
            </div>
        </div>
        <About_footer />
    </>
);
};

export default ContactUs;
