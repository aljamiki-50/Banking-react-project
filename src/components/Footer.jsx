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
        {footerLinks.map((footerLink,ind) => (
          <div
            className=" flex flex-col gap-y-4 ss:my-0 my-4 min-w-[150px] text-3xl text-bold  "
            key={ind}
          >
            <h4>{footerLink.title}</h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={index}
                  className={`  font-poppins font-normal text-[16px] leading-[24px] text-dimWhite   hover:text-secondary cursor-pointer`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
