import styles from "./page.module.css";

import Hero from "./Pocetna/Hero";
import About from "./Pocetna/About";
import ZastoJa from "./Pocetna/ZastoJa";
import Cta from "./Pocetna/Cta";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero />
            <About />
            <ZastoJa />
            <Cta />
        </div>
    );
}
