import React from "react";
import { quotes } from "../assets";

const FeedBackcard = ({ content, name, title, img }) => (
  <div className=" flex flex-col justify-between py-12  rounded-[20px] px-10 max-w-[307px] sm:mr-5 md:mr-10 mr-0  my-5 feedback-card">
    <img
      src={quotes}
      alt="w_quotes"
      className=" w-[48px] h-[27px] object-contain"
    />
    <p className=" font-poppins font-normal text-[18px]  leading-[32px]  text-white my-10 ">
      {content}
    </p>

    <div className=" flex  flex-row">
      <img
        src={img}
        alt=" {name}"
        className=" w-[48px] h-[48px] rounded-full"
      />
      <div className=" flex flex-col  ml-4">
        <h4 className=" font-poppins font-semibold text-[20px]  leading-[32px]  text-white  ">
          {name}
        </h4>
        <p className=" font-poppins font-normal text-[16px]  leading-[34px]  text-dimwhite  ">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedBackcard;
