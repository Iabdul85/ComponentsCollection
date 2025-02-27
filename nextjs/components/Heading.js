import React from "react";

const Heading = ({ heading, className }) => {
  var resultHeading = heading?.split("^");

  return (
    <>
      {className?.includes("display2") ? (
        <h2 className={`!font-bold ${className ? className : "text-black"}`}>
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h2>
      ) : className?.includes("display3") ? (
        <h3 className={`!font-bold ${className ? className : "text-black"}`}>
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h3>
      ) : className?.includes("display4") ? (
        <h4 className={`!font-bold ${className ? className : "text-black"}`}>
          {resultHeading?.map((text, index) =>
            index % 2 === 0 ? (
              text
            ) : (
              <span className={"text-primary"} key={index}>{` ${text} `}</span>
            )
          )}
        </h4>
      ) : className?.includes("display5") ? (
        <h5 className={`!font-bold ${className ? className : "text-black"}`}>
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
          className={`display1 !font-bold ${
            className ? className : "text-black"
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
