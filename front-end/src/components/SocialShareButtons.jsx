import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaWhatsappSquare 
} from "react-icons/fa";

const SocialShareButtons = (url, title) => {
  return (
    <div className="w-full flex justify-between">
      <a target="_blank" rel="noreferrer" href="/">
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <FaWhatsappSquare className="text-[#25d366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
