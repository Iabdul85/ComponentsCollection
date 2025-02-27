import React from "react";
import Paragraph from '@/components/Paragraph/Paragraph';
import Heading from "@/components/Heading/Heading";
import { contactDetail } from "@/mock/global";
import Image from "@/components/Image";
import Button from "@/components/Button/Button";


const AssetSection = ({
  topTitle,
  heading,
  bottomTitle,
  paragraph,
  list,
  imageUrl,
  imageWidth,
  imageHeight,
  reverse,
  imageAlignEnd,
  callNowBtn,
  callReqBtn,
  tags,
  bgblue,
}) => {
  return (

    <section className={` 
      ${bgblue ? "bg-primaryLight" : ""} 
    ${imageAlignEnd ? "secPaddingImageEnd" : "secPadding"} 
    `}>
      <div className="container mx-auto" >
        <div className="grid lg:grid-cols-2 gap-4">
          <div className={`flex flex-col justify-center ${imageAlignEnd ? "lg:pb-14" : ""}`} >
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
              {list && (
                <ul className="list-disc pl-4">
                  {list?.map((item, ind) => (
                    <li className="displayPara " key={ind}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {tags && (
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 mt-2">
                {tags?.map((content, ind) => (
                  <>
                    <div key={ind} className=" border border-black rounded-lg text-sm py-2 px-1 text-center h-full w-full grid place-items-center">
                      {content}
                    </div>
                  </>
                ))}
              </div>
            )}

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
          <div className={`flex justify-center ${reverse ? "lg:order-first order-last" : ""}`} >
            <Image
              src={imageUrl}
              alt={"imageAlt"}
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default AssetSection;
