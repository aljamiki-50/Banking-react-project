import React from "react";
import { features } from "../constants";
import styles from "../style";
import Button from "./Button";
import { layout } from "../style";

const FeatureCard = ({ icon, content, title, index }) => (
  <div
    className={` flex flex-row  rounded-[20px]  p-6  feature-card ${
      index == features.length - 1 ? "mb-0" : "mb-6"
    }`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt="icon"
        className="  
      w-[50%] h-[50%] object-contain "
      />
    </div>
    <div className=" flex-1 flex flex-col  ml-3 " >
    <h4 className=" font-poppins  text-white text-[18px]   leading-[23px] font-semibold mb-1 ">{title}</h4>
    <p className=" font-poppins  text-dimwhite text-[16px]   leading-[24px] font-normal mb-1 ">{content}</p>
    </div>
  </div>
);

const Bussines = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, we’ll <br className="sm:block hidden" /> handle the
        money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>{" "}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Bussines;
