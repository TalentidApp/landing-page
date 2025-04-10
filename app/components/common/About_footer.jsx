"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <img
          src="https://res.cloudinary.com/dfz0wkqij/image/upload/v1743994509/Group_17_hwtopf.png"
          alt="Staar AI Logo"
          className="w-32 h-8 mx-auto mb-14"
        />
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8">
          {/* Product Section */}
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Product</h4>
            <ul className="list-none">
              <li className="mb-1">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/partnership" className="text-gray-400 hover:text-white">
                  Integration
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Resources</h4>
            <ul className="list-none">
              <li className="mb-1">
                <Link href="#" className="text-gray-400 hover:text-white">
                  API Documentation
                </Link>
              </li>
              <li className="mb-1">
                <Link href="https://talentid.tawk.help/" className="text-gray-400 hover:text-white">
                  Knowledge Base
                </Link>
              </li>
              <li className="mb-1">
                <Link href="https://blog.talentid.app/" className="text-gray-400 hover:text-white">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Company</h4>
            <ul className="list-none">
              <li className="mb-1">
                <Link href="/aboutus" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/partnership" className="text-gray-400 hover:text-white">
                  Partnerships
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/contactus" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Legal</h4>
            <ul className="list-none">
              <li className="mb-1">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/refund" className="text-gray-400 hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/optform" className="text-gray-400 hover:text-white">
                  Don't Sell My Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <p className="text-center mb-2 text-lg">
            Made with <span className="text-red-600">❤️</span> from India for the World
          </p>
        </div>
        <p className="text-center text-sm">
          © 2024 Talent ID (Brand of Hirexzo Solutions LLP) All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
