import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
      className={`${styles.flexCenter}${styles.paddingY} md:flex-row flex-col mb-8 w-full `}
    >
      <div className={` flex flex-1  justify-start mr-10 flex-col`}>
        <img
          src={logo}
          alt="logo"
          className=" w-[266px] h-[72px] object-contain  "
        />
        <p className={`${styles.paragraph} mt-4  max-2-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className=" flex flex-row justify-between flex-wrap md:mt-0 mt-10  w-full flex-[1.5]">
        {footerLinks.map((footerLink, ind) => (
          <div
            className=" flex flex-col gap-y-4 ss:my-0 my-4 min-w-[150px] text-3xl text-bold  "
            key={ind}
          >
            <h4 className=" font-poppins text-white leading-[27px]  font-medium-text-[18px]">
              {footerLink.title}
            </h4>
            <ul className=" list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={index}
                  className={` ${
                    index === footerLink.lengeth - 1 ? "mb-0" : "mb-4"
                  }   font-poppins font-normal text-[16px] leading-[24px] text-dimWhite   hover:text-secondary cursor-pointer`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className=" flex   justify-between w-full  items-center md:flex-row  flex-col  pt-6 border-t-[1px] border-t-[#3f3e45] ">
      <p className=" font-normal text-center text-white leading-[27px]  font-medium-text-[18px]">
        {" "}
        2021 HooBank. All Rights Reserved.
      </p>
      <div className=" flex flex-row  md:mt-0 mt-6" Ì>
        {socialMedia.map((social, index) => (
          <img
          src={social.icon}
            key={social.id}
            alt={social.name}
            className={`${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            } w-[21px] hover:scale-[1.3] hover:ring-secondary  hover:shadow-xl   h-[21px] object-contain cursor-pointer `}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
