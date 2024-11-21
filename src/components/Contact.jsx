import React from "react";
import image from "/src/assets/contact.svg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="w-[70%] grid grid-cols-2 mx-auto mt-14">
        <ContactForm />
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
