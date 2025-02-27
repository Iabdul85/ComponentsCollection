"use client";
// import GetInTouch from "@/sections/GetInTouch";
import React, { useState } from "react";

const Button = ({
  loading,
  text,
  href,
  widthClass,
  className,
  callReqBtn,
  visiblity,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen((prevValue) => !prevValue);
  // };

  return (
    <>
      {href ? (
        <a
          href={href ? href : "#"}
          className={`${widthClass} ${visiblity ? "" : "hidden"} sm:block`}
        >
          <button
            className={`displayPara rounded-full px-4 bg-primary text-white font-normal py-2 normal-case ${className}`}
            loading={loading}
          >
            {text}
          </button>
        </a>
      ) : callReqBtn ? (
        <button
          className={`displayPara rounded-full px-4 bg-primary text-white font-normal py-2 normal-case ${className}`}
          loading={loading}
          // onClick={toggleModal}
        >
          {text}
        </button>
      ) : (
        ""
      )}
      {/* {isModalOpen && (
        <GetInTouch isModalOpen={isModalOpen} toggleModal={toggleModal} />
      )} */}
    </>
  );
};

export default Button;
