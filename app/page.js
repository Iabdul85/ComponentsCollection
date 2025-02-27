import Heading from "@/components/Heading/Heading";
import Image from "@/components/Image";
import { BetterResults, onePlatformData, verticalData } from "@/mock/global";
import AffiliateSection from "@/sections/AffiliateSection";
import AssetSection from "@/sections/AssetSection";
import HeroSection from "@/sections/HeroSection";
import TabSection from "@/sections/TabSection";
import OnePlatformSection from "@/sections/OnePlatformSection";
import VerticalSlideCardsSection from "@/sections/VerticalSlideCardsSection";
import CardSliderSection from "@/sections/CardSliderSection";
import { cardsVertical, homePhonePrice } from "@/mock/home";
import CtaSection from "@/components/CtaSection";
import PriceSection from "@/sections/PriceSection";

export default function Home() {
  return (
    <>
      <HeroSection
        isHome="/assets/ppc/smm-ppc-assets/HomeBanner.webp"
        heading={`^Select, Customize, & Scale^ With Our All-in-One Toolkit`}
        paragraph={[
          "Stop paying for features you don’t need, Buzinessify offers flexible and scalable tools that deliver exceptional value at every level!",
          "Pay less, grow more with Buzinessify. Our all-in-one powerful CRM gives measurable results, happier customers, and 100% better ROI at every level!",
        ]}
        video={true}
      />
      <CtaSection
        topTitle={"It’s Affordable & Beyond Bandwidth!"}
        heading="Find Low Cost Internet Service Providers In Your Area"
        paragraph={[
          "Connect, explore, & conquer like never before with the best and low cost internet service plans - Hassle free connectivity for your home. Just enter your zip code below to get started!",
        ]}
      />
      <AffiliateSection />

      <AssetSection
        bgblue={true}
        heading="What is Buzinessify?"
        paragraph={[
          "Buzinessify is your all-in-one digital growth partner, packed with powerful tools and services you need to streamline your business operations, supercharge efficiency, and drive results. ",
          "Manage your workflows, boost your online visibility, delight your customers, and track your performance—all from a single platform. With our feature-rich CRM, data-driven marketing solutions, and customizable professional services, we do the digital heavy lifting so you can focus on the day-to-day operations of your business.",
        ]}
        imageUrl="/assets/images/home/assets2.webp"
        imageWidth={632}
        imageHeight={447}
        imageAlt="imageAlt"
        reverse={true}
        callReqBtn
      />

      <VerticalSlideCardsSection
        heading="Our Work Speaks For Itself"
        carddata={verticalData}
      />

      <PriceSection
        heading="The Best Cable TV Plans For Ultimate Entertainment For Your Home"
        paragraph={[
          "Dive in the world of timeless entertainment where thrilling sports, blockbuster movies, and a thousands of channels lineups come together to bring you the best value for your money. The best cable TV providers nationwide ensure you’re always entertained with better quality and never miss a moment of your favorite shows.",
        ]}
        data={homePhonePrice}
      />

      <AssetSection
        bgblue={true}
        heading="Scalify, Our Unified CRM, Lets You Manage All Your Sales & Marketing Efforts From a Single Dashboard"
        paragraph={[
          "Scalify isn’t just another CRM tool; it’s a data-driven platform that has helped businesses globally to engage, convert, and retain customers. With our powerful omnichannel capabilities, you gain:",
        ]}
        list={[
          "3X higher conversion rate",
          "Get 86% more sales success",
          "Double every dollar you spend",
          "Save 5-10 hours every week",
        ]}
        imageUrl="/assets/images/home/assets3.webp"
        imageWidth={634}
        imageHeight={389}
        imageAlt="imageAlt"
        callReqBtn
      />

      <OnePlatformSection
        heading="One Platform --- 100+ Ways To Grow"
        paragraph={[
          "Now, you don’t need to switch between multiple tools and platforms. Buzinessify is your all-in-one solution to streamline operations, amplify your digital presence and accelerate growth. From enhancing customer relationships to optimizing workflows, we bring everything under one roof so you can work smarter and reach your bottom line faster.",
        ]}
        carddata={onePlatformData}
      />

      <TabSection
        heading="Get All The Essential Tools Under One Roof For 6X Better Results"
        paragraph={[
          "STOP OVERPAYING for pieced-together solutions from Zoho and Hubspot. Buzinessify's integrated platform delivers scalable growth without the premium price tag.",
        ]}
      />
      <section className="secPadding">
        <div className="container mx-auto">
          <div className="max-w-[1024px] mx-auto">
            <Heading
              heading={
                "Get Better Results In Just 1 Year With a Tool That’s Better Than Zoho and Other Popular Platforms"
              }
              className={`display2`}
            />
          </div>
          <div className="md:max-w-[1024x] w-full mx-auto">
            <div className="flex justify-center items-center gap-x-6 xs:gap-y-0 gap-y-4 flex-wrap pt-4">
              {BetterResults.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.image}
                    width={367}
                    height={391}
                    alt={"Image"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AssetSection
        bgblue={true}
        heading="One Commerce Solution to Rule Them All – Power, Simplicity, Results!"
        paragraph={[
          "Managing an online store should never feel like a full-time job. Our all-in-one commerce solutions handle the back-end work so you can focus on your growth. From inventory management to tax configuration, we’ve got you covered.",
          "With our powerful commerce solutions, you can:",
        ]}
        list={[
          "Automate inventory tracking & never oversell or run out of stock",
          "Optimize product catalogs for seamless browsing & conversions",
          "Simplify pricing and quotation to close deals faster & sell more",
          "Streamline order management for a seamless shopping experience",
          "Stay tax compliant without lawyers, accountants, or any headaches!",
        ]}
        imageUrl="/assets/images/home/assets4.webp"
        imageWidth={638}
        imageHeight={551}
        imageAlt="imageAlt"
        callReqBtn
      />

      <CardSliderSection
        topTitle="Our Services"
        heading="A Variety Of Digital Marketing Solutions At Your Service"
        paragraph={[
          "HT Visions offers business-to-business digital marketing solutions, using market-driven strategies for performance intelligence and optimizing conversion rates. Click to explore more!",
        ]}
        cardData={cardsVertical}
        varient="vertical"
      />

      <AssetSection
        heading="Stay Ahead of the Competition and Sell 4X Smarter, Faster with Cutting-Edge Digital Solutions"
        paragraph={[
          "Ready to outpace the competition and drive your ROI? Our expert digital transformative products and services are designed to help you grow faster and more effectively.",
        ]}
        imageUrl="/assets/images/home/assets5.webp"
        imageWidth={529}
        imageHeight={452}
        imageAlt="imageAlt"
        callReqBtn
      />
    </>
  );
}
