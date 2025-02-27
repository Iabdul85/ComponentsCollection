import { default as NextImage } from "next/image";
import React from "react";

const Image = (props) => {
  return (
    <NextImage
      {...props}
      // loading="lazy"
      sizes="100vw"
      width={props.width}
      height={props.height}
    />
  );
};

export default Image;
