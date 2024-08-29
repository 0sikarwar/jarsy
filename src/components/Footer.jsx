import React from "react";
import TextS from "./elements/TextS";
import WhatsApp from "@/assets/images/WhatsApp.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-3">
          <TextS className="text-sm">JARSY: walk proud, walk Indian</TextS>
        </div>
        <div className="flex justify-center gap-6 md:w-1/2 w-full px-3 text-TextColor mx-auto mb-3">
          <TextS className="hover:text-gray-400">
            <Link href="/">Home</Link>
          </TextS>
          <TextS className="hover:text-gray-400">
            <Link href="#explore">Explore Items</Link>
          </TextS>
          <TextS>
            <a
              href="https://wa.me/918283844494?text=Hello,%20I%20am%20interested%20in%20learning%20more%20about%20JARSY%20shoes.%20Could%20you%20please%20provide%20more%20information?"
              className="flex items-center text-green-500 hover:opacity-70"
              target="_blank"
            >
              <WhatsApp className="w-6 h-6 mr-2" />
              Chat with us
            </a>
          </TextS>
        </div>
        <div className="text-center mb-6 text-sm">
          <TextS>
            Email:{" "}
            <a href="mailto:support@jarsy.com" className="hover:text-gray-400">
              support@jarsy.com
            </a>
          </TextS>
          <TextS>Address: NH-73 Ramgarh, Panchkula Haryana, India</TextS>
        </div>
        <div className="text-center text-xs text-gray-500">
          <TextS>&copy; 2024 JARSY. All Rights Reserved.</TextS>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
