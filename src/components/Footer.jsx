import React from "react";
import TextS from "./elements/TextS";
import WhatsApp from "@/assets/images/WhatsApp.svg";
import Instagram from "@/assets/images/instagram.svg";
import Link from "next/link";
import { instaUrl, whatsappUrl } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-3">
          <TextS className="text-sm">JARSY: walk proud, walk Indian</TextS>
        </div>
        <div className="flex justify-center gap-3 md:gap-6 md:w-1/2 w-full px-3 text-TextColor mx-auto mb-3">
          <TextS className="hover:text-gray-400">
            <Link href="/">Home</Link>
          </TextS>
          <TextS className="hover:text-gray-400">
            <Link href="#explore">Explore Items</Link>
          </TextS>
          <TextS>
            <a
              href={whatsappUrl}
              className="flex items-center text-green-500 hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="w-6 h-6 mr-2" />
              Chat with us
            </a>
          </TextS>
          <TextS>
            <a
              href={instaUrl}
              className="flex items-center text-[#cd5c5c] hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 mr-2" />
              Follow us
            </a>
          </TextS>
        </div>
        <div className="text-center mb-6 text-sm">
          <TextS>
            Phone:{" "}
            <a href="tel:+919872078281" className="hover:text-gray-400">
              +919872078281
            </a>
          </TextS>
          <TextS>
            Email:{" "}
            <a
              href="mailto:customer.service@jarsy.in"
              className="hover:text-gray-400"
            >
              customer.service@jarsy.in
            </a>
          </TextS>
          <TextS>
            Address:{" "}
            <a
              href="https://maps.app.goo.gl/rQMoHMLzyEVezEGc6"
              className="hover:text-gray-400"
            >
              NH-73 Ramgarh, Panchkula Haryana, India
            </a>
          </TextS>
        </div>
        <div className="text-center text-xs text-gray-500">
          <TextS>&copy; 2025 JARSY. All Rights Reserved.</TextS>
        </div>
        <div className="text-center mt-2">
          <div className="flex flex-wrap justify-center gap-2 text-[11px] text-gray-400">
            <Link href="/help/terms" className="hover:text-gray-300">
              Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link href="/help/privacypolicy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/help/refundpolicy" className="hover:text-gray-300">
              Refund Policy
            </Link>
            <span>|</span>
            <Link href="/help/returnpolicy" className="hover:text-gray-300">
              Return Policy
            </Link>
            <span>|</span>
            <Link href="/help/shipping" className="hover:text-gray-300">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
