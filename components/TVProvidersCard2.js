import React from "react";
import Paragraph from "./Paragraph/Paragraph";
import Image from "./Image";
import Heading from "./Heading/Heading";
import Button from "./Button/Button";
import { contactDetail } from "@/mock/global";

const TVProvidersCard2 = ({ heading, subHeading, paragraph, imageUrl, imageAlt, list, callNowBtn, callReqBtn }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className={`flex flex-col justify-center`}>
        <Heading
          className={`display3 lg:!text-start`}
          heading={heading}
        />
        <Paragraph
          className={`lg:!text-left`}
          blackContent={paragraph}
        />
        <Heading
          className={`display4 !text-start`}
          heading={subHeading}
        />
        {list && (
          <ul className="list-disc pl-4">
            {list?.map((item, ind) => (
              <li className="displayPara " key={ind}>
                {item}
              </li>
            ))}
          </ul>
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
      <div className={`flex justify-center items-center`}>
        <Image
          src={imageUrl}
          alt={imageAlt || "imageAlt"}
          width={735}
          height={500}
        />
      </div>
    </div>
  );
};

export default TVProvidersCard2;
