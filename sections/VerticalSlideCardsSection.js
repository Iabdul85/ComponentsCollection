"use client";
import React from "react";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import SplideSlider from "@/components/SplideSlider/SplideSlider";
import Image from "@/components/Image";

const VerticalSlideCardsSection = ({ bottomTitle, topTitle, paragraph, heading, carddata }) => {
    const sliderOptions = {
        type: 'loop',
        drag: 'free',
        // focus: 'center',
        perPage: 1,
        padding: "0.8rem",
        perMove: 1,
        direction: "ttb",
        height: "auto",
        pagination: false,
        gap: "15px",
        arrows: false,
        autoplay: true,
        autoScroll: {
            speed: 1,
        },
    };

    return (
        <section className="secPadding">
            <div className="container mx-auto">
                <div className="max-w-[1024px] w-full mx-auto xl:flex xl:flex-col xl:justify-center h-full">
                    {topTitle && <Heading className="display3" heading={topTitle} />}
                    <Heading className="display2" heading={heading} />
                    {bottomTitle && <Heading className="display3" heading={bottomTitle} />}
                    <div className="pt-4">
                        {paragraph?.map((para, ind) => (
                            <Paragraph key={ind} blackContent={para} />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:grid lg:grid-cols-5 masonry overflow-hidden h-[620px]">
                    {[...Array(5)].map((_, index) => (
                        <SplideSlider key={index} data={carddata} options={sliderOptions} ScrollingAuto={true}>
                            <VerticalSlideCard />
                        </SplideSlider>
                    ))}
                </div>
                <div className="lg:hidden grid grid-cols-2 masonry overflow-hidden h-[620px]">
                    {[...Array(2)].map((_, index) => (
                        <SplideSlider key={index} data={carddata} options={sliderOptions} ScrollingAuto={true}>
                            <VerticalSlideCard />
                        </SplideSlider>
                    ))}
                </div>
            </div>
        </section>
    );
};

const VerticalSlideCard = ({ imageUrl }) => {
    return (
        <>
            <Image
                src={imageUrl}
                alt={'clients'}
                width={270}
                height={276}
            />

        </>

    );
}

export default VerticalSlideCardsSection;
