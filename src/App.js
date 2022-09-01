import style from './style';

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from './components';

const App = () => (
  <div className='w-full bg-primary overflow-hidden'>
    {/* Navbar */}
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero section */}
    <div className={`${style.flexStart} bg-primary`}>
      <div className={`${style.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${style.flexStart} ${style.paddingX} bg-primary`}>
      <div className={`${style.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
