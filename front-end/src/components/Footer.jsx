import React from "react";
import { images } from "../constants";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillHeart,
} from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <section className="bg-dark-hard -translate-y-1">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-x-5 gap-y-10 md:pt-20 md:grid-cols-12 lg:grid-cols-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2 md:col-start-5 lg:col-start-auto">
          <h3 className="text-dark-light font-bold">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt="logo"
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-dark-light text-sm mt-4 text-center md:text-left md:text-base">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <AiOutlineFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <AiOutlineYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <SlSocialVkontakte className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary rounded-full text-white p-2">
            <AiFillHeart className="w-6 h-auto"/>
          </div>
          <p className="mt-3 text-dark-light text-sm font-bold italic">
          Copyright © 2019. Moonfo with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
