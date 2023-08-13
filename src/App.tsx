import IntroSection from './sections/IntroSection';
import AchivementsSection from './sections/AchivementsSection';
import BenefitsSection from './sections/BenefitsSection';
import FeaturesSection from './sections/FeaturesSection';
import PlansSection from './sections/PlansSection';
import ContactUsSection from './sections/ContactUsSection';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div className="landing-page">
      <Header />
      <div className="wrapper">
        <IntroSection />
        <AchivementsSection />
        <BenefitsSection />
        <FeaturesSection />
        <PlansSection  />
        {/* <ContactUsSection /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
