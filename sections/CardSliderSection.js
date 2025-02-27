import React from "react";
import Heading from "@/components/Heading/Heading";
import ServiceCard from "@/components/ServiceCard";
import SplideSlider from "@/components/SplideSlider/SplideSlider";
import Paragraph from "@/components/Paragraph/Paragraph";
import Button from "@/components/Button/Button";

const CardSliderSection = ({
  varient,
  topTitle,
  heading,
  bottomTitle,
  paragraph,
  cardData,
  callNowBtn,
  callReqBtn,
}) => {
  return (
    <section className="secPadding">
      <div className="container mx-auto relative">
        <div
          className={` relative grid grid-cols-1 ${varient === "vertical" && "lg:grid-cols-2"
            }  ${varient === "horizontal" && "lg:grid-cols-3"} gap-4`}
        >
          <div
            className={`col-span-1 flex flex-col ${varient === "vertical" &&
              "justify-start sticky lg:top-20 !top-12 z-10 backdrop-blur-2xl"
              }  ${varient === "horizontal" && "justify-center"} ${!varient && "max-w-2xl mx-auto"
              }`}
          >
            <div
              className={
                varient === "vertical"
                  ? "bg-white sticky lg:!top-20 !top-12"
                  : ""
              }
            >
              {topTitle && (
                <Heading
                  className={`display3 lg:!text-start`}
                  heading={topTitle}
                />
              )}
              <Heading
                className={`display2 lg:!text-start`}
                heading={heading}
              />
              {bottomTitle && (
                <Heading
                  className={`display3 lg:!text-start`}
                  heading={bottomTitle}
                />
              )}
              <div className="pt-4">
                {paragraph?.map((para, ind) => (
                  <Paragraph
                    key={ind}
                    className={`lg:!text-left`}
                    blackContent={para}
                  />
                ))}
              </div>

              <div className="flex gap-4 mt-4 mx-auto lg:mx-0">
                {callNowBtn && (
                  <Button
                    text={contactDetail.telNumber}
                    href={`tel:${contactDetail.telNumber}`}
                  />
                )}
                {callReqBtn && (
                  <Button
                    text={contactDetail.btntitle}
                    className={`font-[600] `}
                    callReqBtn
                  />
                )}
              </div>
            </div>
          </div>
          {varient === "horizontal" && (
            <div className={`col-span-1 lg:col-span-2`}>
              <SplideSlider data={cardData}>
                <ServiceCard />
              </SplideSlider>
            </div>
          )}
          {varient === "vertical" && (
            <div className={`col-span-1 relative`}>
              <div className="flex flex-col gap-4 relative">
                {cardData?.map((items, ind) => (
                  <ServiceCard {...items} key={ind} />
                ))}
              </div>
            </div>
          )}
          {varient === "staticGrid" && (
            <div
              className={`${cardData?.length % 3 === 0
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                : cardData?.length % 4 === 0
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                  : cardData?.length % 5 === 0
                    ? "flex justify-center flex-wrap gap-4"
                    : cardData?.length % 7 === 0
                      ? "flex justify-center flex-wrap gap-4"
                      : ""
                } `}
            >
              {cardData?.map((item, i) => (
                <ServiceCard
                  iconBg="bg-theme-primary-light"
                  // themeColor={themeColor}
                  {...item}
                  key={i}
                  className={`${cardData?.length % 5 === 0
                    ? "basis-full md:basis-[48%] lg:!basis-[32%]"
                    : cardData?.length % 7 === 0
                      ? "basis-full md:basis-[48%] lg:basis-[32%] xl:basis-[23%]"
                      : ""
                    } `}
                />
              ))}
            </div>
          )}
          {!varient && (
            <div>
              <SplideSlider data={cardData}>
                <ServiceCard />
              </SplideSlider>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardSliderSection;
