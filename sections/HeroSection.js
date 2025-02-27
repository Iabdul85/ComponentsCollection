"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import { Video } from "@/components/video";

const HeroSection = ({
  topTitle,
  heading,
  blackHeading,
  bottomTitle,
  paragraph,
  paragraph2,
  imageUrl,
  imageWidth,
  imageHeight,
  video,
  imageAlign,
  imageAlt,
  topTitleBlack,
  bottomTitleBlack,
  contentAlignment,
  list,
  isHome,
  counterReview,
  listTitle,
  sIcon,
}) => {
  return (
    <section
      className={`bg-cover relative h-auto bg-primaryLight ${isHome &&
        "bg-[url('/assets/ppc/smm-ppc-assets/HomeBanner.webp')] bg-no-repeat bg-cover bg-center"
        }`}
    >
      <div className="container mx-auto">
        <div
          className={`grid lg:grid-cols-2 grid-cols-1 gap-4 ${imageAlign
              ? "pt-8 pb-8"
              : isHome
                ? "lg:py-32 py-10"
                : "lg:py-32 py-20"
            } `}
        >
          <div
            className={`flex flex-col ${contentAlignment ? contentAlignment : "lg:justify-center"
              }`}
          >
            {(topTitle || topTitleBlack) && (
              <Heading
                heading={topTitle}
                blackText1={topTitle}
                blackHeading={topTitleBlack}
                className={"lg:!text-start"}
              />
            )}
            <Heading
              heading={heading}
              blackHeading={blackHeading}
              className={"lg:!text-start"}
            />
            {(bottomTitle || bottomTitleBlack) && (
              <Heading
                heading={bottomTitle}
                blackText1={bottomTitle}
                blackHeading={bottomTitleBlack}
                className={"lg:!text-start"}
              />
            )}
            {sIcon && (
              <Image
                src={"/assets/ppc/smm-ppc-assets/Group1000007165.webp"}
                width={18}
                height={36}
                className="absolute sm:right-8 right-0 sm:bottom-0 bottom-12 sm:w-auto w-52 sm:h-auto"
                alt="arrow"
              />
            )}
            <div
              className={`grid grid-cols-1 ${imageUrl ? "grid-cols-1" : ""}`}
            >
              <div className="flex flex-col justify-center items-start">
                {paragraph?.map((para, ind) => (
                  <Paragraph
                    blackContent={para}
                    key={ind}
                    className={"lg:!text-start"}
                  />
                ))}

                {list && (
                  <div>
                    {listTitle && (
                      <Heading heading={listTitle} className={`display5 lg:!text-left`} />
                    )}
                    <ul className="list-disc pl-4">
                      {list?.map((item, ind) => (
                        <li
                          className="displayPara text-theme-black text-sm py-1"
                          key={ind}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {paragraph2?.map((para, ind) => (
                  <Paragraph
                    content={para}
                    blackText1={para}
                    key={ind}
                    className={`${isHome && "pt-4"
                      }`}
                  />
                ))}
                {counterReview && (
                  <div className="overflow-hidden w-full">
                    <div className="pt-6 py-4 flex divide-x overflow-x-auto no-scrollbar">
                      {counterReview.map((item, i) => (
                        <div
                          key={i}
                          className="px-4 flex flex-col items-center justify-start whitespace-nowrap"
                        >
                          <Heading
                            heading={item.numbers}
                            className="!text-center"
                          />
                          {item.description && (
                            <Paragraph
                              content={item.description}
                              className="!text-center !text-sm sm-w-28 w-32 text-wrap !mb-0"
                            />
                          )}
                          {item.icon && (
                            <Image
                              src={item.icon}
                              width={18}
                              height={36}
                              className="w-auto h-auto"
                              alt="arrow"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>


          </div>
          {imageUrl && (
            <div
              className={`flex ${imageAlign ? imageAlign : "items-center"
                } justify-center px-20 md:px-0`}
            >
              <Image
                src={imageUrl}
                alt={"imageAlt"}
                width={imageWidth}
                height={imageHeight}
                className="w-auto h-auto"
                priority
              />
            </div>
          )}

          {video && (
           <div className="flex justify-center items-center">
           <Video />
           </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
