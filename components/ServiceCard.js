"use client";
import React from "react";
import Link from "next/link";
import Image from "./Image";
import Heading from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button/Button";

const ServiceCard = ({
  icon,
  iconBg,
  num,
  title,
  content,
  list,
  link,
  className,
  url,
}) => {
  return (
    <div className={`border border-theme-primary rounded-xl  ${className}`}>
      <div className={`h-full flex p-4 flex-col bg-transparent rounded-none`}>
        <div
          floated={false}
          className="shadow-none bg-transparent rounded-none"
        >
          <div className="">
            {num && (
              <div className="mb-3">
                <div className="bg-primary-light w-5 h-5 lg:w-10 lg:h-10 rounded-full"></div>
                <h3
                  variant="h3"
                  className="font-[500] !text-black -mt-5 ml-3 lg:-mt-10 lg:ml-5"
                >
                  {num}
                </h3>
              </div>
            )}
            {icon && (
              <div
                className={`flex mb-3 ${
                  iconBg && `${iconBg} w-max p-3 rounded-xl`
                } `}
              >
                <Image src={icon} alt={title} width={40} height={40} />
              </div>
            )}
            {url ? (
              <Link href={url}>
                <Heading
                  heading={title}
                  className="!text-start display4"
                />
              </Link>
            ) : (
              <Heading
                heading={title}
                className="!text-start display4"
              />
            )}
          </div>
        </div>
        <div className="grow p-0 pb-2">
          {content &&
            content?.map((para, ind) => (
              <Paragraph key={ind} content={para} className="text-start" />
            ))}
          {list && (
            <ul className="list-disc pl-4">
              {list?.map((item, ind) => (
                <li
                  className="displayPara text-black font-[300] mb-1"
                  key={ind}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        {link && (
          <div>
            <Button
              text="Explore Now"
              href={link}
              theme="theme1"
              arrow={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
