import React from "react";
import LogoWhite from "../../img/LogoWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Verification = () => {
  return (
    <section className="bg-darkPurple rounded-lg md:w-11/12 text-white  mx-auto md:my-8  p-3 pb-60 text-center sm:w-fit">
      <img src={LogoWhite} alt="" />
      <div className="text-4xl text-center pt-16">
        <FontAwesomeIcon className="text-green" icon={faCircleCheck} />
        <h1 className=" mt-2 text-4xl font-bold ">Check email for verification</h1>
        <p className="text-xl  ">
          We sent a verification link to your email
        </p>
      </div>
    </section>
  );
};

export default Verification;
