import Heading from "@/components/Heading/Heading";
import Image from "@/components/Image";
import Paragraph from "@/components/Paragraph/Paragraph";
import React from "react";
export async function generateMetadata() {
  return {
    robots: {
      index: false,
      nocache: false,
    },
  };
}

const page = () => {
  return (
    <>
      <section className="h-full bg-[url('/assets/images/pw-thankyou-bg.webp')] bg-cover bg-right-top bg-no-repeat">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mx-auto text-center">
            <div className="lg:w-6/12 py-40 mx-auto">
              <Image
                src="/assets/icons/thankyou-check.svg"
                alt="Check Icon"
                width={150}
                height={151}
                className="mx-auto w-40 bg-primary rounded-full"
              />
              <Heading heading={`THANK YOU`}/>
              <Heading heading={`Thank you for filling out the form.`} className={`display2`}/>
              <Paragraph 
              className="my-4"
              blackContent={`later label about monkey aid business jar teeth carry examine diagram funny round made mail club failed sunlight stand remember acres hair sun real`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
