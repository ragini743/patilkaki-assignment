import React, { useState, useEffect } from "react";
// import "./problemSolvedSection.css"


const ProblemSolvedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = [
    {
      id: "feature1",
      title: "STOCKOUTS",
      content: "%",
      number:"85",
      text:"Reduction in out-of-stocks"
    },
    {
      id: "feature2",
      title: "CASH RECOVERY CYCLE",
      content: "Days",
      number:"25",
      text:"Reduction in cash recovery"
    },
    {
      id: "feature3",
      title: "REVENUE",
      content: "%",
      number:"15",
      text:"Growth in revenue"
    }
  ];

  useEffect(() => {
    let debounceTimeout;

    const handleScroll = (event) => {
      clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(() => {
        if (event.deltaY > 0) { // Scrolling down
          setCurrentIndex((prevIndex) => (prevIndex + 1) % (features.length + 1));
        } else { // Scrolling up
          setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length + 1) % (features.length + 1));
        }
      }, 100); // Adjust debounce delay as needed
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      clearTimeout(debounceTimeout);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section className="problem-target animated-gradient text-white  py-24 p-8 ">
      
      <div className="grid grid-cols-1 gap-4">
        {features.map((feature, index) => (
          <div key={feature.id} className="text-white">
            <button id="tab"
              className={`tab-button ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              {feature.title}
            </button>
            {currentIndex === index && (
              <div className="mt-4">
                <div className="flex items-baseline justify-center">
                <p className=" font-extrabold text-[10rem]">
                  {feature.number}
                </p>
                <p>{feature.content}</p>
                </div>
                <p className="font-bold text-center text-lg">
                  {feature.text}
                </p>
               
              </div>
            )}
          </div>
        ))}
        {currentIndex === features.length && (
          <div className="full-page-content">
            <h2>Full Page Content</h2>
            <p>This is the content that appears when scrolling past all features.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProblemSolvedSection;
