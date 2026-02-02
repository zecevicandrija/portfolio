import styles from "./page.module.css";

import Hero from "./Pocetna/Hero";
import About from "./Pocetna/About";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero />
            <About />
        </div>
    );
}
