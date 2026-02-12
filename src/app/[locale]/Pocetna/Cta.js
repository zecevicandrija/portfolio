'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from "./Cta.module.css";

export default function Cta() {
    const t = useTranslations('home');

    return (
        <section className={styles.ctaSection}>
            {/* Background effects */}
            <div className={styles.ctaBackground}>
                <div className={styles.ctaBgGrid}></div>
                <div className={styles.ctaBgGlow}></div>

                {/* Floating particles */}
                <div className={styles.ctaParticle} style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
                <div className={styles.ctaParticle} style={{ top: '70%', left: '85%', animationDelay: '1.5s' }}></div>
                <div className={styles.ctaParticle} style={{ top: '40%', left: '90%', animationDelay: '2s' }}></div>
            </div>

            <div className={styles.ctaContent}>
                <span className={styles.ctaTagline}>
                    <span className={styles.ctaTaglineIcon}></span>
                    {t('cta.tagline')}
                </span>
                <h2>{t('cta.title')}</h2>
                <p>{t('cta.description')}</p>
                <Link href="/kontakt" className={styles.ctaButton}>
                    <span className={styles.btnText}>{t('cta.button')}</span>
                    <span className={styles.btnShine}></span>
                </Link>
            </div>
        </section>
    );
}
