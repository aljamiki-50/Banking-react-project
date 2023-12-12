import React from "react";
import { stats } from "../constants";
import style from "../style";
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter}  flex-row flex-wrap sm:mb-20 mb-6 `}
  >
    {stats.map((stat, index) => (
      <div
        className={`${styles.flexCenter}  flex-1 items-center flex-row m-3`}
        key={stat.id}
      >
        <h4 className=" font-poppins font-semibold xs:text-[40px] text-white text-[30px] xs:leading-[53px] leading-[43px] ">
          {stat.value}
        </h4>
        <p className=" font-poppins font-normal xs:text-[20px] text-white text-[10px] xs:leading-[26px] leading-[21px] text-gradient ml-3 ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
