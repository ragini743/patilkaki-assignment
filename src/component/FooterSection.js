import React from "react";

const FooterSection = () => {
  return (
    <div>
      <footer className="text-gray-200 grid sm:grid-cols-2 md:grid-cols-4 grid-flow-row gap-4">
    
        <div class="footer-content">
        <div>
            <img src="./Crest-Logo.png" alt=""></img>
        </div>
         
          <p>
            Crest is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more. This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </p>
        </div>
        
          <div className=" flex flex-col justify-center text-white">
            Explore
            <ul className="text-gray-200">
              <li>Product</li>
              <li>Pricing</li>
              <li>Customer Stories</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center text-white">
            Learn
            <ul className="text-gray-200">
              <li>About us</li>
              <li>Blog</li>
            </ul>
          </div>
        

        <div className="text-white flex flex-col justify-center">
          COntact crest
          <div className="text-gray-200">
            <p>
              {" "}
              <a href="https://www.getcrest.ai/#scroll-to-revenue">
                sales@getcrest.ai
              </a>
            </p>
            <p>
              Registered Office:<br></br>
              1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India.
              560102
            </p>
            <p>
              Corporate Office:<br></br>
              291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR
              Layout, Bengaluru, India. 560102
            </p>
          </div>
        </div>
        <div className="text-white flex flex-col justify-center">
          <ul>
            <li>Copyright 2024 Crest</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <p>
            Conifer Innovations Private Limited <br></br>
            CIN: U72900KA2022PTC163144
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
