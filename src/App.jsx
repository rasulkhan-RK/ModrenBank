import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  Billing,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Stats,
  Testimonials,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className="max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className="max-w-[1380px] flex flex-col justify-center items-center">
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className="max-w-[1280px] w-full flex flex-col justify-center items-center">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />,
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
