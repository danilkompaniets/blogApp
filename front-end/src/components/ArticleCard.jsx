import React from "react";
import { images } from "../constants";
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${className}`}
    >
      <img
        src={images.Post1Image}
        alt="title"
        className="w-full h-auto md:h-52 lg:h-48 xl:h-60  object-cover object-center "
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl md:text-2xl text-dark-soft lg:text-[28px]">
          Future of Work
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex justify-between items-center flex-nowrap mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img src={images.PostProfileImage} alt="profile image" className="w-9 h-9 md:w-10 md:h-10"/>
            <div className="flex flex-col ">
              <h4 className="font-bold italic text-dark-soft text-sm">
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2 ">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1 rounded-full">
                  <BsCheckLg className="w-2 h-2 fill-[#36B37E]" />
                </span>
                <span className="italic text-dark-light text-xs">
                  verified writer
                </span>
              </div>
            </div>
          </div>
          <div className="font-bold text-dark-light italic text-sm md:text-base">02 May</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
