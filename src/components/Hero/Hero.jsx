import React from 'react'
import Order from "../Order/Order";
import chips from  "../../assets/chips.jpg";
import Lead from "../../assets/Lead.jpg";
import Story from "../../assets/Story.jpg";
import Orders from "../../assets/Orders.jpg";
import Deals from "../../assets/Deals.jpg";
const Hero = () => {

  return (
    <> 
    <Order
        image={chips}
        title="Free Fries Now. Free McDonald’s Later.*"
        alt="chips"
        text="Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves only in the app with 1500 bonus points after your first purchase. *Offer valid 1x thru the last day of the month for first time app users at participating McDonald's until 10/31/22. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery. McD app download and registration required."
    />
        <Order
        image={Lead}
        title="Lead The Change"
        alt="Lead"
        text="To all those feeding and fostering community by embracing your passion, apply for a chance to be a McDonald’s® Black & Positively Golden® Change Leader and ignite your story. Whether you are an activist, financial guru, artist or creator, McDonald’s is empowering those who are leading change."
    />
        <Order
        image={Orders}
        title="Order McDelivery® Now*"
        alt="Orders"
        text="Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats, DoorDash or Grubhub. *At participating McDonald’s. Prices may be higher than at restaurants. Delivery/service fees apply"
    />
        <Order
        image={Deals}
        title="Free Fries Now. Free McDonald’s Later.*"
        alt="chips"
        text="Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup. *Mobile Order & Pay at participating McDonald’s."
    />
    </>
  )
}

export default Hero