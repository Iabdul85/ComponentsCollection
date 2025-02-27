"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";

const SplideSlider = ({
  children,
  data,
  options,
  onMoved,
}) => {
  return (
    <>
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
        onMoved={onMoved}
        role="group"
      >
        <SplideTrack className="py-5">
          {data?.map((item, index) => {
            const childrenWithProps = React.Children.map(
              children,
              (child, ind) => {
                if (React.isValidElement(child)) {
                  const dataProps = item || {};
                  return React.cloneElement(child, {
                    ...dataProps,
                  });
                }
                return child;
              }
            );
            return (
              <SplideSlide aria-roledescription="none" role="group" key={index}>
                {childrenWithProps}
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </>
  );
};

export default SplideSlider;
