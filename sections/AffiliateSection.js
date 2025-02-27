"use client";
import React from "react";
import Image from "@/components/Image";
import Heading from "@/components/Heading/Heading";
import { Companies } from "@/mock/global";

const AffiliateSection = () => {
  return (
    <section className="secPadding">
      <div className="container mx-auto">
        <div className="max-w-[1024px] mx-auto">
          <Heading
            heading={"Accredited By The Best"}
            className={`display2`} />
        </div>
        <div className="md:max-w-[1024x] w-full mx-auto">
          <div className="flex justify-center items-center gap-x-6 xs:gap-y-0 gap-y-4 flex-wrap pt-4">
            {Companies.map((item, index) => (
                <div
                  key={index}
                  className="block shadow-md xs:px-6 px-4 py-3 rounded-lg">
                  <Image
                    src={item.image}
                    width={120}
                    height={100}
                    alt={"imageAlt"}
                  />
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
