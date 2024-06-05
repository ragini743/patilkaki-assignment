import React, { useState } from "react";

const Header = () => {
  const [isOption, setIsOption] = useState(false);
  function showOption() {
    console.log("hello");
    setIsOption(!isOption);
  }
  console.log("isOption", isOption);
  return (
    <div>
      <div className="flex ">
        <div className="w-[30%]">
          <img src="./Crest-Logo.png" className="w-[60%] " alt=""></img>
        </div>
        <ul className="hidden  md:w-[70%] md:flex md:items-center md:justify-end ">
          <li className="mr-8">Product</li>
          <li className="mr-8">Pricing</li>
          <li className="mr-8">Industry</li>
          <li className="mr-8">Customer Stories</li>
          <li className="mr-8">About</li>
          <li className="mr-8">Blog</li>
        </ul>

        <div className="md:hidden w-[70%] justify-end flex items-center ">
          <div className="absolute top-0 right-0 pr-4 w-[10%] mt-2" onClick={showOption}>
            <img src={!isOption?"./option-icon2.png":"cross-icon.png"}alt=""></img>
          </div>
        </div>
      </div>
      {
                isOption && <ul className="relative top-0 right-0 bg-white text-black text-right pr-8">
                <li className='shadow-sm pb-2'>Product</li>
                <li className='shadow-sm pb-2'>Pricing</li>
                <li className='shadow-sm pb-2'>Industry</li>
                <li className='shadow-sm pb-2'>Customer Stories</li>
                <li className='shadow-sm pb-2'>About</li>
                <li className='shadow-sm pb-2'>Blog</li>
                
            </ul>
            }
    </div>
  );
};

export default Header;
