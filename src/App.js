import HeroSection from "./component/HeroSection";
import KeyMetricSection from "./component/KeyMetricSection";
import ProblemSolvedSection from "./component/ProblemSolvedSection";
import ReviewSection from "./component/ReviewSection";
import FeaturesSection from "./component/FeturesSection";
import CTASection from "./component/CTASection";
import FooterSection from "./component/FooterSection";


function App() {
  return (
    <div className="App">
     <HeroSection />
     <div>
     <KeyMetricSection />
     <ProblemSolvedSection /> 

     </div>
     <div>
      <ReviewSection />
      <FeaturesSection />
     </div>
     <div>
      <CTASection />
      <FooterSection />
     </div>
     
    </div>
  );
}

export default App;
