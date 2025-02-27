"use client";
import React from "react";
import Heading from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph";
import TVProvidersCard2 from "./TVProvidersCard2";

const TabsSectionHero = () => {
  const [activeTab, setActiveTab] = React.useState("lowcost");

  const data = [
    {
      label: "CRM",
      value: "lowcost",
      data: [
        {
          heading: "^Scalify — Our Feature-Rich CRM Saves 20% On Lead Cost",
          subHeading: "^Features That Set Us Apart:",
          list: [
            "Email marketing automation & segmentation",
            "Strong customization options",
            "Data reports",
          ],
          paragraph:
            "Struggling with customer interactions? Manage leads, automate follow-ups, and build stronger relationships—so you never miss a sales opportunity again!",
          imageUrl: "/assets/images/home/tab-1.webp",
          imageAlt: "imageAlt",
        },
      ],
    },
    {
      label: "ON-Page SEO Tool",
      value: "midtier",
      data: [
        {
          heading: "^RankiFy — Rank 2X Higher With Our On-Page SEO Tool",
          subHeading: "^Features That Set Us Apart:",
          list: [
            "SEO made simple for everyone",
            "Fast results, better ranking  ",
            "No expertise required",
          ],
          paragraph:
            'Get discovered faster! Optimize your website’s structure, keywords, and content to rank higher on search engines and attract the right audience.',
          imageUrl: "/assets/images/home/tab-2.webp",
          imageAlt: "imageAlt",
        },
      ],
    },
    {
      label: "Local SEO",
      value: "premium",
      data: [
        {
          heading: "^Localify — Sell 4X More With Local SEO Tool",
          subHeading: "^Features That Set Us Apart:",
          list: [
            "Local presence guaranteed",
            "Audience targeting and segmentation are easier",
            "Analytics",
          ],
          paragraph:
            "Want more local customers? Lacalify ensures your business appears in local searches, maps, and directories, helping you attract nearby customers who are ready to buy.",
          imageUrl: "/assets/images/home/tab-3.webp",
          imageAlt: "imageAlt",
        },
      ],
    },
    {
      label: "Web Builder",
      value: "gold",
      data: [
        {
          heading: "^WebiFy — Get  74% Higher Conversions With Our Lighting Fast Website Builder",
          subHeading: "^Features That Set Us Apart:",
          list: [
            "Zero coding, no tech skills required",
            "Custom web design solutions",
            "Easy to customize & integrate",
          ],
          paragraph:
            "Zero coding and tech knowledge required! Our intuitive website builder makes it easy to create high-performance, professional websites that convert visitors into customers.",
          imageUrl: "/assets/images/home/tab-4.webp",
          imageAlt: "imageAlt",
        },
      ],
    },
    {
      label: "Blog Editor",
      value: "silver",
      data: [
        {
          heading: "^Contentify — Blog Editor That Doubles Your ROI & Customer Loyalty",
          subHeading: "^Features That Set Us Apart:",
          list: [
            "Affordable content management solutions",
            "Scalable CMS",
            "Aligns with your brand messaging",
          ],
          paragraph:
            'Become an industry leader with just a few clicks! Contentify lets you craft, edit, and publish compelling blog posts that keep your audience engaged and coming back for more.',
          imageUrl: "/assets/images/home/tab-5.webp",
          imageAlt: "imageAlt",
        },
      ],
    },
    {
      label: "SMM Post Maker",
      value: "platinum",
      data: [
        {
          heading: "^Socialify — Get Custom-Designed Social Media Posts To Grow 2X Faster",
          subHeading: "^Features That Sets Us Apart:",
          list: [
            "Seamlessly import media and customize social media posts with just a few clicks",
            "Effortlessly schedule & publish content ",
            "Data-driven insights for higher engagement",
          ],
          paragraph:
            "Get noticed. Get engaged. Get results!  Drive more visibility, engagement, and conversion with our powerful social media post maker.",
          imageUrl: "/assets/images/home/tab-6.webp",
          imageAlt: "imageAlt",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-[1280px] mx-auto">
          <div
            className={`rounded-none lg:mx-auto lg:px-0 px-2 md:pb-0 pb-1 flex sm:justify-between justify-start items-center overflow-x-auto border-b border-b-slate-300
                    ${activeTab === "lowcost" ||
                activeTab === "midtier" ||
                activeTab === "premium"
                ? "bg-primaryLight"
                : ""
              }`}
          >
            {data.map(({ label, value }) => (
              <button
                key={value}
                className={`lg:py-3 py-1 sm:px-4 px-2 
                      ${value === activeTab
                    ? "bg-primaryLight !border-b-2 !border-b-primary !text-primary"
                    : ""
                  }
                      `}
                onClick={() => setActiveTab(value)}
              >
                <h5
                  className={`md:w-full sm:w-48 xs:w-32 w-28 text-theme-dark lg:!text-lg sm:!text-sm !text-[12px] font-[500] text-center lg:text-start lg:px-0 border-b-black`}
                >
                  {label}
                </h5>
              </button>
            ))}
          </div>
          <div className="text-black">
            {data.map(({ value, heading, desc, data: cards }) => (
              <div
                className={`${value === activeTab ? "block" : "hidden"}`}
                key={value}
              >
                {heading && (
                <Heading
                  className={`display2`}
                  heading={heading}
                />
                )}
                {desc && (
                <Paragraph
                  className={`lg:!text-left`}
                  blackContent={desc}
                />
                )}

                <div className={`md:mt-5 mt-4`}>
                  {cards.map((item, index) => (
                    <TVProvidersCard2
                      key={index}
                      {...item}
                      allData={item}
                      content3Show={true}
                      content6Show={true}
                      callReqBtn
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsSectionHero;
