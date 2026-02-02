'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from "./About.module.css";

export default function About() {
    const t = useTranslations('home');

    return (
        <>
            {/* Services Section - Premium Luxury Design */}
            <section className={styles.services}>
                {/* Grid Background Effect */}
                <div className={styles.servicesBackground}>
                    <div className={styles.bgGrid}></div>
                    <div className={styles.bgGlow}></div>

                    {/* Floating particles */}
                    <div className={styles.particle} style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
                    <div className={styles.particle} style={{ top: '80%', left: '90%', animationDelay: '1.5s' }}></div>
                    <div className={styles.particle} style={{ top: '45%', left: '15%', animationDelay: '2.5s' }}></div>
                    <div className={styles.particle} style={{ top: '65%', left: '85%', animationDelay: '3.5s' }}></div>
                </div>

                <div className={styles.sectionHeader}>
                    <span className={styles.tagline}>
                        <span className={styles.taglineIcon}></span>
                        {t('services.subtitle')}
                    </span>
                    <h2>{t('services.title')}</h2>
                </div>

                <div className={styles.servicesGrid}>
                    {/* Service Card 1 */}
                    <div className={styles.serviceCard} style={{ animationDelay: '0s' }}>
                        <div className={styles.serviceCardInner}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.serviceIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <h3>{t('services.items.web.title')}</h3>
                            <p>{t('services.items.web.description')}</p>
                            <div className={styles.cardBar}>
                                <div className={styles.cardBarFill}></div>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className={styles.serviceCard} style={{ animationDelay: '0.15s' }}>
                        <div className={styles.serviceCardInner}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.serviceIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                </svg>
                            </div>
                            <h3>{t('services.items.design.title')}</h3>
                            <p>{t('services.items.design.description')}</p>
                            <div className={styles.cardBar}>
                                <div className={styles.cardBarFill}></div>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className={styles.serviceCard} style={{ animationDelay: '0.3s' }}>
                        <div className={styles.serviceCardInner}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.serviceIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </div>
                            <h3>{t('services.items.ecommerce.title')}</h3>
                            <p>{t('services.items.ecommerce.description')}</p>
                            <div className={styles.cardBar}>
                                <div className={styles.cardBarFill}></div>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 4 */}
                    <div className={styles.serviceCard} style={{ animationDelay: '0.45s' }}>
                        <div className={styles.serviceCardInner}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.serviceIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <h3>{t('services.items.seo.title')}</h3>
                            <p>{t('services.items.seo.description')}</p>
                            <div className={styles.cardBar}>
                                <div className={styles.cardBarFill}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className={styles.sectionDecor}>
                    <div className={styles.decorLine}></div>
                    <div className={styles.decorDot}></div>
                    <div className={styles.decorLine}></div>
                </div>
            </section>

            {/* About Preview Section - Premium Design */}
            <section className={styles.aboutPreview}>
                {/* Background elements */}
                <div className={styles.aboutBackground}>
                    <div className={styles.aboutBgGlow}></div>
                    <div className={styles.aboutGrid}></div>
                </div>

                <div className={styles.aboutContent}>
                    <span className={styles.aboutTagline}>
                        <span className={styles.aboutTaglineIcon}></span>
                        {t('about.tagline')}
                    </span>
                    <h2>{t('about.title')}</h2>
                    <p>{t('about.description')}</p>

                    <div className={styles.stats}>
                        <div className={styles.statItem} style={{ animationDelay: '0s' }}>
                            <div className={styles.statInner}>
                                <div className={styles.statGlow}></div>
                                <span className={styles.statNumber}>20+</span>
                                <span className={styles.statLabel}>{t('about.stats.projects')}</span>
                                <div className={styles.statBar}>
                                    <div className={styles.statBarFill}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.statItem} style={{ animationDelay: '0.15s' }}>
                            <div className={styles.statInner}>
                                <div className={styles.statGlow}></div>
                                <span className={styles.statNumber}>6+</span>
                                <span className={styles.statLabel}>{t('about.stats.clients')}</span>
                                <div className={styles.statBar}>
                                    <div className={styles.statBarFill}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.statItem} style={{ animationDelay: '0.3s' }}>
                            <div className={styles.statInner}>
                                <div className={styles.statGlow}></div>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>{t('about.stats.experience')}</span>
                                <div className={styles.statBar}>
                                    <div className={styles.statBarFill}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Premium Luxury */}
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
        </>
    );
}
