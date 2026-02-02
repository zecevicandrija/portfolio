'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from "./page.module.css";

export default function ContactPage() {
    const t = useTranslations('contact');

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                {/* Premium Motion Grid Background */}
                <div className={styles.gridBackground}>
                    {/* Clean architectural grid */}
                    <div className={styles.gridLayer}></div>

                    {/* Vertical flow lines - subtle movement */}
                    <div className={styles.verticalFlow}></div>

                    {/* Intersection highlights */}
                    <div className={styles.gridHighlight} style={{ top: '30%', left: '20%', animationDelay: '0s' }}></div>
                    <div className={styles.gridHighlight} style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
                    <div className={styles.gridHighlight} style={{ top: '20%', left: '70%', animationDelay: '4s' }}></div>
                    <div className={styles.gridHighlight} style={{ top: '70%', left: '30%', animationDelay: '1.5s' }}></div>
                    <div className={styles.gridHighlight} style={{ top: '40%', left: '50%', animationDelay: '3s' }}></div>

                    {/* Floating accent squares */}
                    <div className={styles.accentSquare} style={{ top: '15%', left: '10%' }}></div>
                    <div className={styles.accentSquare} style={{ top: '25%', left: '85%', animationDelay: '2s' }}></div>
                    <div className={styles.accentSquare} style={{ top: '65%', left: '90%', animationDelay: '4s' }}></div>
                    <div className={styles.accentSquare} style={{ top: '80%', left: '20%', animationDelay: '1s' }}></div>
                    <div className={styles.accentSquare} style={{ top: '45%', left: '60%', animationDelay: '3s' }}></div>

                    {/* Central ambient glow */}
                    <div className={styles.ambientGlow}></div>

                    {/* Corner frames - architectural details */}
                    <div className={styles.cornerFrame} data-position="top-left"></div>
                    <div className={styles.cornerFrame} data-position="top-right"></div>
                    <div className={styles.cornerFrame} data-position="bottom-left"></div>
                    <div className={styles.cornerFrame} data-position="bottom-right"></div>
                </div>

                <div className={styles.heroContent}>
                    <span className={styles.tagline}>
                        <span className={styles.taglineIcon}></span>
                        {t('hero.tagline')}
                    </span>

                    <h1 className={styles.headline}>
                        {t('hero.headline')}<br />
                        <span className={styles.highlight}>{t('hero.headlineHighlight')}</span>
                    </h1>

                    <p className={styles.heroDescription}>
                        {t('hero.description')}
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollMouse}>
                        <div className={styles.scrollWheel}></div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection} id="kontakt">
                <div className={styles.contactBg}>
                    <div className={styles.contactBgGrid}></div>
                    <div className={styles.contactBgGlow}></div>
                </div>

                <div className={styles.contactWrapper}>
                    {/* Contact Info Cards */}
                    <div className={styles.contactInfo}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTagline}>
                                <span className={styles.taglineIcon}></span>
                                {t('info.tagline')}
                            </span>
                            <h2>{t('info.title')}</h2>
                            <p className={styles.sectionDescription}>{t('info.description')}</p>
                        </div>

                        <div className={styles.infoCards}>
                            {/* Email Card */}
                            <a href="mailto:office@zecevicdev.com" className={styles.infoCard} style={{ animationDelay: '0s' }}>
                                <div className={styles.infoCardInner}>
                                    <div className={styles.infoGlow}></div>
                                    <div className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <span className={styles.infoValue}>office@zecevicdev.com</span>
                                    <div className={styles.infoBar}>
                                        <div className={styles.infoBarFill}></div>
                                    </div>
                                </div>
                            </a>

                            {/* Person Card */}
                            <div className={styles.infoCard} style={{ animationDelay: '0.15s' }}>
                                <div className={styles.infoCardInner}>
                                    <div className={styles.infoGlow}></div>
                                    <div className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <span className={styles.infoValue}>Andrija Zečević</span>
                                    <div className={styles.infoBar}>
                                        <div className={styles.infoBarFill}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className={styles.infoCard} style={{ animationDelay: '0.3s' }}>
                                <div className={styles.infoCardInner}>
                                    <div className={styles.infoGlow}></div>
                                    <div className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <span className={styles.infoValue}>Novi Sad, Serbia</span>
                                    <div className={styles.infoBar}>
                                        <div className={styles.infoBarFill}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.contactForm}>
                        <div className={styles.formCard}>
                            <div className={styles.formCardInner}>
                                <div className={styles.formGlow}></div>
                                <h3>{t('form.title')}</h3>
                                <p className={styles.formDescription}>{t('form.description')}</p>

                                <form className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">{t('form.name')}</label>
                                            <input type="text" id="name" name="name" placeholder={t('form.namePlaceholder')} required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">{t('form.email')}</label>
                                            <input type="email" id="email" name="email" placeholder={t('form.emailPlaceholder')} required />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject">{t('form.subject')}</label>
                                        <input type="text" id="subject" name="subject" placeholder={t('form.subjectPlaceholder')} required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">{t('form.message')}</label>
                                        <textarea id="message" name="message" rows="5" placeholder={t('form.messagePlaceholder')} required></textarea>
                                    </div>
                                    <button type="submit" className={styles.submitBtn}>
                                        <span className={styles.btnText}>{t('form.submit')}</span>
                                        <span className={styles.btnShine}></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaBg}>
                    <div className={styles.ctaBgGrid}></div>
                    <div className={styles.ctaBgGlow}></div>

                    {/* Particles */}
                    <div className={styles.ctaParticle} style={{ top: '15%', left: '8%', animationDelay: '0s' }}></div>
                    <div className={styles.ctaParticle} style={{ top: '75%', left: '88%', animationDelay: '1.5s' }}></div>
                    <div className={styles.ctaParticle} style={{ top: '35%', left: '92%', animationDelay: '2s' }}></div>
                    <div className={styles.ctaParticle} style={{ top: '60%', left: '5%', animationDelay: '3s' }}></div>
                </div>

                <div className={styles.ctaContent}>
                    <span className={styles.ctaTagline}>
                        <span className={styles.taglineIcon}></span>
                        {t('cta.tagline')}
                    </span>
                    <h2>{t('cta.title')}</h2>
                    <p>{t('cta.description')}</p>
                    <a href="mailto:office@zecevicdev.com" className={styles.ctaButton}>
                        <span className={styles.btnText}>{t('cta.button')}</span>
                        <span className={styles.btnShine}></span>
                    </a>
                </div>
            </section>
        </div>
    );
}
