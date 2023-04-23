import { React, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";





const SocialMediaSidebar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-6">
    <ul>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600">
        <a
          className="flex justify-between items-center w-full text-[#f6e5e5]"
          href="https://www.linkedin.com/in/drew-greenblatt33/"
          target="_blank"
        >
          LinkedIn <FaLinkedin size={25} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333333]">
        <a
          className="flex justify-between items-center w-full text-[#f6e5e5]"
          href="https://github.com/catalystix"
          target="_blank"
        >
          GitHub <FaGithub size={25} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#690303]">
        <a
          className="flex justify-between items-center w-full text-[#f6e5e5]"
          href="mailto:dcode.green@gmail.com"
          target="_blank"
        >
          Email <HiOutlineMail size={25} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#00c914]">
        <a
          className="flex justify-between items-center w-full text-[#f6e5e5]"
          href=""
          target="_blank"
          download
        >
          Resume <BsFillPersonLinesFill size={25} />
        </a>
      </li>
    </ul>
  </div>
  );
};

export default SocialMediaSidebar;