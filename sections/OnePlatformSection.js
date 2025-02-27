"use client";
import React from "react";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import SplideSlider from "@/components/SplideSlider/SplideSlider";
import OnePlatformCards from "@/components/onePlatformCards";

const OnePlatformSection = ({ bottomTitle, topTitle, paragraph, heading, carddata }) => {
  const options = {
    type: "loop",
    // rewind: true,
    // focus: "center",
    perPage: 1,
    padding: "0.8rem",
    perMove: 1,
    pagination: false,
    gap: "15px",
    arrows: false,
    autoplay: true,
    autoScroll: {
      speed: 0.5,
    },
    mediaQuery: "min",
    breakpoints: {
      768: { perPage: 2, arrows: true, },
      1280: { perPage: 5 },
    },
  };
  return (
    <>
      <section className={`secPadding`}>
        <div className="container mx-auto">
          <div className="max-w-[1024px] w-full mx-auto xl:flex xl:flex-col xl:justify-center h-full">
            {topTitle && (
              <Heading
                className={`display3`}
                heading={topTitle}
              />
            )}
            <Heading
              className={`display2`}
              heading={heading}
            />
            {bottomTitle && (
              <Heading
                className={`display3`}
                heading={bottomTitle}
              />
            )}
            <div className="pt-4">
              {paragraph?.map((para, ind) => (
                <Paragraph
                  key={ind}
                  blackContent={para}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <SplideSlider data={carddata} options={options} ScrollingAuto={true}>
            <OnePlatformCards />
          </SplideSlider>
        </div>
      </section>
    </>
  );
}

export default OnePlatformSection;