// Module.js

import React, { useEffect, useState } from "react";
import { varsityData } from "./KnowledgeHubData";
import { useParams } from "react-router-dom";
import pic from "src/assets/Ch1-1.jpeg";
import pic1 from "src/assets/ch1-2.jpg";
import pic2 from "src/assets/ch1-3.png";

function Module() {
  return (
    <div style={{ backgroundColor: "bg-gray-900", minHeight: "100vh" }}>
      <div className="bg-gray-900">
        <div className="heading">
          <h1 className="text-black text-6xl font-extrabold pt-[50px] pl-[50px]">
            {/* {article.num}. {article.title} */}
          </h1>
        </div>
        <div className="pb-[50px]">
          <h1 className="text-black text-4xl font-bold pl-[50px]">
            {/* {article.subtitle} */}
          </h1>
        </div>
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={pic}
            alt="pic"
            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
          />
          <p className="text-justify px-[300px]"></p>
          <img
            src={pic1}
            alt="pic1"
            style={{ maxWidth: "50%", maxHeight: "40%", margin: "20px auto" }}
          />
          <p className="text-justify px-[300px]">
            If one were to analyze these numbers, one would soon realize this is
            a scary situation. A few things are quite obvious – After 20 years
            of hard work, you have accumulated Rs.1.7Crs. Since your expenses
            are fixed, your lifestyle has not changed over the years, and you
            probably even suppressed your lifelong aspirations – a better home,
            car, vacations, etc. After you retire, assuming the expenses will
            continue to grow at 8%, the retirement corpus of Rs.1.7Crs is good
            enough to sail you through roughly 8 years of post-retirement life.
            8th year onwards, you will be in a tight spot with literally no
            savings left to back you up. What would you do after you run out of
            money in 8 years? How do you fund your life? Is there a way to
            ensure that you collect a more considerable sum at the end of 20
            years? At this point, you may think that the assumptions are simple
            and that real life does not work like this. I agree, and I won’t
            dispute that fact. However, the point to note in the above
            calculation is that no investments are made, hence the cash retained
            has a flat or zero growth. Let’s consider another scenario where
            instead of keeping the cash idle, you choose to invest the cash in
            an investment option that grows at, let’s say, 12% per annum. For
            example – in the first year, you retained Rs.240,000/- which, when
            invested at 12% per annum for 20 years (19 years assuming you invest
            at the end of 1st year), yields Rs.2,067,063/- at the end of the
            20th year. For those interested in math, here is how that works – =
            240000*(1+12%)^(19) = 2067063 Dont worry about the math at this
            point. We will explain that later in this module (and several other
            modules in Varsity). Here is how the table looks if you choose to
            invest.
          </p>
          <img
            src={pic2}
            alt="pic2"
            style={{ maxWidth: "50%", maxHeight: "40%", margin: "20px auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Module;
