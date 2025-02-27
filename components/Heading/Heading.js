import React from "react";

const Heading = ({ heading, className }) => {
  var resultHeading = heading?.split("^");
 
  return (
    <>
      {className?.includes("display2") ? (
        <h2 className={`text-center !font-[600] !leading-normal xl:text-4xl lg:text-3xl md:text-2xl text-xl ${className ? className : "text-black"}`}>
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h2>
      ) : className?.includes("display3") ? (
        <h3 className={`text-center !font-[500] !leading-normal xl:text-3xl lg:text-2xl md:text-xl text-lg ${className ? className : "text-black"}`}>
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h3>
      ) : className?.includes("display4") ? (
        <h4 className={`text-center !font-[600] !leading-normal xl:text-2xl text-xl ${className ? className : "text-black"}`}>
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h4>
      ) : className?.includes("display5") ? (
        <h5 className={`text-center !font-[500] !leading-normal xl:text-xl text-lg ${className ? className : "text-black"}`}>
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h5>
      ) : (
        <h1
          className={`text-center !font-[700] !leading-snug xl:text-5xl lg:text-4xl md:text-3xl text-2xl ${className ? className : "text-black"
          }`}
        >
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h1>
      )}
    </>
  );
};

export default Heading;
