import React from 'react';
import Paragraph from './Paragraph/Paragraph';
import Heading from './Heading/Heading';
import Image from './Image';

const OnePlatformCards = ({ imageUrl, title, des, }) => {
  return (
    <>
      <div className={`bg-gradient-to-b from-[#fff] to-primary p-4 rounded-xl border border-primary overflow-hidden h-full`}>
        <div className="flex flex-col justify-between items-center gap-4">
          <Heading heading={title} className={`display4`} />
          <Image
            src={imageUrl}
            alt={'clients'}
            width={270}
            height={276}
          />
          <Paragraph blackContent={des} className={`text-white`} />
        </div>
      </div>
    </>

  );
}

export default OnePlatformCards;
