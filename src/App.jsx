import React from "react";
import style from "./style";
import {
  Navbar,
  Stats,
  Billing,
  Button,
  CTA,
  Footer,
  GetStarted,
  Hero,
  CardDeal,
  Testimonials,
  Clients,
  Bussines,
  FeedBack,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary text-white  w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart} ${style.paddingX} `}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Bussines />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
