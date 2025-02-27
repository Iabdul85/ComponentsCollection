"use client";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import PriceCard from "@/components/PriceCard";
import React from "react";

const PriceSection = ({
  topTitle,
  heading,
  bottomTitle,
  paragraph,
  data = [],
}) => {
  return (
    <section className="secPadding bg-[#EFEFEF]">
      <div className="container mx-auto">
        <div className="max-w-[1024px] mx-auto lg:mb-10 mb-5">
          {topTitle && <Heading heading={topTitle} className={`display3`} />}
          <Heading heading={heading} className={`display2`} />
          {bottomTitle && (
            <Heading heading={bottomTitle} className={`display3`} />
          )}
          {paragraph?.map((para, ind) => (
            <Paragraph key={ind} content={para} />
          ))}
        </div>
      <div
        className={
          data.length < 2
            ? "max-w-[400px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3.5rem]"
            : data.length < 3
            ? "max-w-[700px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3.5rem]"
            : data.length < 4
            ? "max-w-[1024px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3.5rem]"
            : "container"
        }
      >
        <div
          className={`grid grid-cols-1 ${
            data.length < 2
              ? "lg:grid-cols-1"
              : data.length < 3
              ? "lg:grid-cols-2 sm:grid-cols-2"
              : data.length < 4
              ? "lg:grid-cols-3 sm:grid-cols-2"
              : "lg:grid-cols-4 sm:grid-cols-2"
          } gap-4`}
        >
          {data?.map((item, i) => (
            <PriceCard {...item} key={i} />
          ))}
        </div>
      </div>
      </div>
      {/* <div className="container mt-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${lg ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {data.length > 0 && data.map((item, index) => (
            <PriceCard key={index} {...item} data={data} />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default PriceSection;
