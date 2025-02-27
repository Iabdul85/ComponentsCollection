"use client";
import React from "react";
import Image from "./Image";
import Heading from "./Heading/Heading";
import { contactDetail } from "@/mock/global";
import Button from "./Button/Button";

const PriceCard = ({ logo, price, features, title, quote, providerLogo }) => {
  return (
    <div
      role=""
      className="h-full overflow-hidden rounded-xl bg-white shadow-none before:bg-theme-primary before:w-full before:h-4 before:top-0 "
    >
      <div className="p-6 h-full flex flex-col">
        <div
          floated={false}
          className="shadow-none rounded-none py-2 px-3 bg-transparent"
        >
          {providerLogo && (
            <div className="h-full flex items-center justify-center">
              <Image
                src={providerLogo}
                alt="Provider Logo"
                width={174}
                height={36}
                className="h-20 w-auto xl:h-24"
              />
            </div>
          )}
          <h4 className="text-center font-bold text-theme-primary tracking-[0.4rem]">
            {title}
          </h4>
        </div>
        {(price || price !== 0) && (
          <>
            <p
              variant="small"
              className="display2 text-center py-1 text-theme-secondary font-bold"
            >
              ${price}/
              <span className="text-theme-primary displayPara font-bold">
                mo.
              </span>
            </p>
          </>
        )}
        {quote && <Heading heading={quote} className="mb-0 my-4" />}
        {logo && (
          <div
            className={`flex gap-4 place-content-center place-items-center mb-2 mt-2 `}
          >
            {logo?.map(({ url, altText }, ind) => (
              <Image key={ind} src={url} alt={altText} width={40} height={40} />
            ))}
          </div>
        )}
        <div className="grow p-0 py-4 px-2">
          {features && (
            <ul className="">
              {Array.isArray(features)
                ? features?.map((item, ind) => (
                    <li
                      className="md:text-sm text-xs !text-black font-[400] mb-3"
                      key={ind}
                    >
                      {item}
                    </li>
                  ))
                : JSON.parse(features)?.map((item, ind) => (
                    <li
                      className="md:text-sm text-xs !text-black font-[400] mb-3"
                      key={ind}
                    >
                      {item}
                    </li>
                  ))}
            </ul>
          )}
        </div>
        <div className="p-0 mx-auto">
          <Button text={contactDetail.telNumber} callReqBtn />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
