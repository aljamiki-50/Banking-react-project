import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className=" w-[100%] h-[100%] relative z-[5]"
      />
      <div className=" z-[3]  absolute -left-1/2 top-0 w-[50%] h-[50%]  rounded-full white__gradient " />
      <div className=" z-[0]  absolute -left-1/2 bottom-0 w-[50%] h-[50%]  rounded-full pink__gradient " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className=" sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]  mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className=" flex  flex-row   flex-wrap sm:mt-10 mt-6 ">
        <img
          src={apple}
          alt="apple_store"
          className=" w-[128px] h-[42px] cursor-pointer object-contain  mr-5 "
        />
        <img
          src={google}
          alt="google_store"
          className=" w-[128px] h-[42px] cursor-pointer object-contain  "
        />
      </div>
    </div>
  </section>
);

export default Billing;
