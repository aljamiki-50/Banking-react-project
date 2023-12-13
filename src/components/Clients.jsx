import React from "react";
import { clients } from "../constants";
import styles from "../style";
import { feedback } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter}  my-4`}>
    <div className={`${styles.flexCenter} flex-wrap  w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] flex-1`}
        >
          <img
            src={client.logo}
            alt="client"
            className={` sm:w-[192px]  cursor-pointer  feature-card  w-[100%] object-contain`}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
