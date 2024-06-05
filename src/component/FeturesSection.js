import React, { useState } from "react";
import "./feature.css";

const Features = () => {
  const [activeTab, setActiveTab] = useState("0");

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="problem-target">
      <h2 className="text-2xl md:text-[2.5rem] font-bold mb-8">
        Things your spreadsheet wishes it could do
      </h2>
      <div className="md:flex md:justify-between items-center">
        <div className="md:w-[30%] md:order-2">
          <img src="./spreadsheet-icon.png"alt=""></img>
        </div>
        <div className=" grid  grid-cols-1 gap-4 mt-8 md:w-[30%] ">
        <div>
          <button className="tab-button border-b-2 border-gray-400 mt-4 w-[100%]" onClick={() => showTab("feature1")}>
            Accurate Demand Forecasting
          </button>
          { activeTab==="feature1" && (
            <div>
              <p>
                Dynamically predict future demand across all channels .with high
                accuracy and lowest granularity .Crest takes into account what
                traditional forecasts don't : trends real time market signals
                ,promotional activities , and even logistics disruptions .
              </p>
              <button>Learn More -</button>
            </div>
          )}
        </div>
        <div className="">
          <button className="tab-button border-b-2 border-gray-400 mt-4 w-[100%]" onClick={() => showTab("feature2")}>
            HELIX:Workflow Automation
            
          </button>
          {activeTab==="feature2"  && (
            <div>
              <p>
                Dynamically predict future demand across all channels .with high
                accuracy and lowest granularity .Crest takes into account what
                traditional forecasts don't : trends real time market signals
                ,promotional activities , and even logistics disruptions .
              </p>
              <button>Learn More -</button>
            </div>
          )}
        </div>
        <div className="">
          <button className="tab-button border-b-2 border-gray-400 mt-4 w-[100%]" onClick={() => showTab("feature3")}>
          Automated Purchase Planning
          </button>
          {activeTab==="feature3" && (
            <div>
              <p>
                Dynamically predict future demand across all channels .with high
                accuracy and lowest granularity .Crest takes into account what
                traditional forecasts don't : trends real time market signals
                ,promotional activities , and even logistics disruptions .
              </p>
              <button>Learn More -</button>
            </div>
          )}
        </div>
        <div className="">
          <button className="tab-button border-b-2 border-gray-400 mt-4 w-[100%]" onClick={() => showTab("feature4")}>
          Automated Distribution Planning
          </button>
          {activeTab=== "featture4" && (
            <div>
              <p>
                Dynamically predict future demand across all channels .with high
                accuracy and lowest granularity .Crest takes into account what
                traditional forecasts don't : trends real time market signals
                ,promotional activities , and even logistics disruptions .
              </p>
              <button>Learn More -</button>
            </div>
          )}
        </div>
        <div className="">
          <button className="tab-button border-b-2 border-gray-400 mt-4  w-[100%]" onClick={() => showTab("feature5")}>
         Easy Integration
          </button>
          {activeTab==="feature5" && (
            <div>
              <p>
                Dynamically predict future demand across all channels .with high
                accuracy and lowest granularity .Crest takes into account what
                traditional forecasts don't : trends real time market signals
                ,promotional activities , and even logistics disruptions .
              </p>
              <button>Learn More -</button>
            </div>
          )}
        </div>
        <div className="">
          <button className="tab-button border-b-2 border-gray-400 mt-4 w-[100%]" onClick={() => showTab("feature6")}>
       Custom Dashboards
          </button>
          {activeTab==="feature6"  && (
            <div>
              <p>
                Dynamically predict future demand across all channels .with high
                accuracy and lowest granularity .Crest takes into account what
                traditional forecasts don't : trends real time market signals
                ,promotional activities , and even logistics disruptions .
              </p>
              <button>Learn More -</button>
            </div>
          )}
        </div>
        <div className="">
          <button className="tab-button border-b-2 border-gray-400 mt-4 w-[100%]" onClick={() => showTab("feature7")}>
        Consensus Planning
          </button>
          {activeTab==="feature7"  && (
            <div>
              <p>
                Dynamically predict future demand across all channels .with high
                accuracy and lowest granularity .Crest takes into account what
                traditional forecasts don't : trends real time market signals
                ,promotional activities , and even logistics disruptions .
              </p>
              <button>Learn More -</button>
            </div>
          )}
        </div>

        
      </div>
      </div>
      
    
    </section>
  );
};

export default Features;
