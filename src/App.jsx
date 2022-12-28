import styles from "./style";
import {Navbar, Hero, Stats ,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer,} from "./components/"

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* esto es para crear el NavBar */}
    <div className={`${styles.paddingX}  ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Esto va a contener la seccion del Hero */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats  />
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


export default App