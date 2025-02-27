"use client";
import React from "react";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import TabsSectionHero from "@/components/TabSectionHero";

const TabSection = ({ topTitle, heading, bottomTitle, paragraph}) => {
  return (
    <section className="secPadding bg-primaryLight">
      <div className="container mx-auto">
        <div className="lg:max-w-[1024px] mx-auto">
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
                className={``}
                blackContent={para}
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <TabsSectionHero />
        </div>
      </div>
    </section>
  );
};

export default TabSection;
