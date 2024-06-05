import React from "react";

const KeyMetricSection = () => {
  return (
    <div>
      <section class="my-16 md:px-10">
        <h2 className="font-bold text-2xl md:text-4xl my-16 ml-8">Four key questions answered by Crest</h2>
        <div class=" my-16 grid mx-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div class="bg-gray-200 py-10 px-8  rounded-[2rem]">
            <div className="w-[25%]">
            <img src="icon.png" alt="Metric Icon"></img>
            </div>
            <h1 className="md:text-3xl my-4">
            What to order
            </h1>

            <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
          </div>
          <div class="bg-gray-200 py-10 px-8 rounded-[2rem] ">
            <div className="w-[25%]">
            <img src="icon.png" alt="Metric Icon"></img>
            </div>
            <h1 className="md:text-3xl my-4">
            When to order
            </h1>

            <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
          </div>
          <div class="bg-gray-200 py-10 px-8 rounded-[2rem] ">
            <div className="w-[25%]">
            <img src="icon.png" alt="Metric Icon"></img>
            </div>
            <h1 className="md:text-3xl my-4">
            How much to stock
            </h1>

            <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
          </div>
          <div class="bg-gray-200 py-10 px-8 rounded-[2rem] ">
            <div  className="w-[25%]">
            <img src="icon.png" alt="Metric Icon"></img>
            </div>
            <h1 className="md:text-3xl my-4">
            Where to place
            </h1>

            <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default KeyMetricSection;
