import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-5">
          <button className="flex justify-center items-center bg-black py-1 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
              className="mr-2"
            >
              <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
            </svg>
            VIA SUPPORT CHAT
          </button>
          <button className="flex justify-center items-center bg-black py-1 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
              className="mr-2"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            VIA CALL
          </button>
        </div>
        <button className="flex justify-center items-center border w-full border-black py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            className="mr-2"
          >
            <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
          VIA EMAIL FORM
        </button>
        <div className="relative border border-gray-400">
          <label
            htmlFor="Name"
            className="absolute left-10 -top-3 bg-white px-1"
          >
            Name
          </label>
          <input type="text" className=" border w-full py-1" />
        </div>
        <div className="relative border border-gray-400">
          <label
            htmlFor="Name"
            className="absolute left-10 -top-3 bg-white px-1"
          >
            E-Mail
          </label>
          <input type="text" className=" border w-full py-1" />
        </div>
        <div className="relative border border-gray-400">
          <label
            htmlFor="Name"
            className="absolute left-10 -top-3 bg-white px-1"
          >
            text
          </label>
          <textarea name="" id="" className=" border w-full py-1"></textarea>
        </div>
        <button className="flex justify-center items-center bg-black py-1 text-white rounded-md w-[50%] ml-auto">
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default ContactForm;
