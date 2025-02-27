// import SearchBar from "@/components/SearchBar/SearchBar";
import React from "react";
import Heading from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button/Button";
import { contactDetail } from "@/mock/global";

const CtaSection = ({
  heading,
  paragraph,
  topTitle,
  bottomTitle,
  containerbg,
}) => {
  return (
    <section
      className={`secPadding ${
        containerbg ? "" : "bg-gradient-to-r from-[#8F34E9] to-[#600AAB]"
      }`}
    >
      <div className={`container mx-auto rounded-lg`}>
        <div className="lg:w-[1024px] w-full lg:px-5 px-0 mx-auto">
          {topTitle && (
            <Heading heading={topTitle} className={`text-white display3`} />
          )}
          <Heading heading={heading} className={`text-white display2`} />
          {bottomTitle && (
            <Heading heading={bottomTitle} className={`text-white display3`} />
          )}
          {paragraph?.map((para, ind) => (
            <Paragraph
              content={para}
              textAlign="text-center"
              key={ind}
              className={`text-white`}
            />
          ))}
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button
              text={contactDetail.telNumber}
              href={`tel:${contactDetail.telNumber}`}
              widthClass="w-full sm:w-auto"
              textColor="text-primary hover:text-white"
              btn={false}
            />
            <Button
              textColor="text-primary hover:text-white"
              text={"Call Request"}
              widthClass="w-full sm:w-auto"
              callReqBtn
              btn={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
