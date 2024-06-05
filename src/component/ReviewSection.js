import React from "react";

const ReviewSection = () => {
  return (
    <div className="">
      <section class="reviews">
        <h2 className="text-2xl font-bold md:text-4xl py-4 ">What Our Customers Say</h2>
        <div class="review">
          <p className="md:text-[1.2rem]">
            D2C brands face issues with supply chain management and high growth
            startups are not equipped to run their demand forecast manually.
            Crest automates all the workflows and helps brands predict high
            demand periods and be ready to cater to customer demands. It has a
            direct impact on the revenue readiness of a company and that's the
            value we see Crest unlocking for many companies in the future. Rahul
            and team have built a robust product with years of their experience
            distilled into the workflows.
          </p>
        </div>
        <div class="review flex justify-between items-center mt-4">
            <div className="flex items-center">
            <div className="w-[14%] mr-2 md:mr-4">
            <img src="./user-icon.png" alt=""></img>
          </div>
          <div>
            <h1 className="md:text-lg">Diksha Pande</h1>
            <p>Co-founder , Samosa Party</p>
          </div>
            </div>
            <div className="w-[30%] md:w-[10%]">
                <img src="./food-icon.png"alt=""></img>
            </div>
         
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
