'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from "./Hero.module.css";

export default function Hero() {
    const t = useTranslations('home');

    return (
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
                <h1 className={styles.headline}>{t('hero.headline')}</h1>
                <p className={styles.heroDescription}>{t('hero.description')}</p>
                <div className={styles.heroButtons}>
                    <Link href="/kontakt" className={styles.primaryBtn}>
                        <span className={styles.btnText}>{t('hero.cta')}</span>
                        <span className={styles.btnShine}></span>
                    </Link>
                    <Link href="/projekti" className={styles.secondaryBtn}>
                        <span className={styles.btnText}>{t('hero.ctaSecondary')}</span>
                    </Link>
                </div>
            </div>

            {/* Premium Statistics Grid */}
            <div className={styles.statsSection}>
                <div className={styles.statsGrid}>
                    {/* Stat Card 1 - Projects */}
                    <div className={styles.statCard} style={{ animationDelay: '0s' }}>
                        <div className={styles.statCardInner}>
                            <div className={styles.statGlow}></div>
                            <div className={styles.statIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className={styles.statValue}>
                                <span className={styles.statNumber}>20</span>
                                <span className={styles.statPlus}>+</span>
                            </div>
                            <div className={styles.statLabel}>{t('hero.stats.projects.label')}</div>
                            <div className={styles.statBar}>
                                <div className={styles.statBarFill} style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card 2 - Revenue */}
                    <div className={styles.statCard} style={{ animationDelay: '0.15s' }}>
                        <div className={styles.statCardInner}>
                            <div className={styles.statGlow}></div>
                            <div className={styles.statIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className={styles.statValue}>
                                <span className={styles.statCurrency}>€</span>
                                <span className={styles.statNumber}>10k</span>
                                <span className={styles.statPlus}>+</span>
                            </div>
                            <div className={styles.statLabel}>{t('hero.stats.revenue.label')}</div>
                            <div className={styles.statBar}>
                                <div className={styles.statBarFill} style={{ width: '70%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card 3 - Experience */}
                    <div className={styles.statCard} style={{ animationDelay: '0.3s' }}>
                        <div className={styles.statCardInner}>
                            <div className={styles.statGlow}></div>
                            <div className={styles.statIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <div className={styles.statValue}>
                                <span className={styles.statNumber}>5</span>
                                <span className={styles.statPlus}>+</span>
                            </div>
                            <div className={styles.statLabel}>{t('hero.stats.experience.label')}</div>
                            <div className={styles.statBar}>
                                <div className={styles.statBarFill} style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card 4 - Client Satisfaction */}
                    <div className={styles.statCard} style={{ animationDelay: '0.45s' }}>
                        <div className={styles.statCardInner}>
                            <div className={styles.statGlow}></div>
                            <div className={styles.statIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className={styles.statValue}>
                                <span className={styles.statNumber}>100</span>
                                <span className={styles.statPercent}>%</span>
                            </div>
                            <div className={styles.statLabel}>{t('hero.stats.clients.label')}</div>
                            <div className={styles.statBar}>
                                <div className={styles.statBarFill} style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className={styles.statsDecor}>
                    <div className={styles.decorLine}></div>
                    <div className={styles.decorDot}></div>
                    <div className={styles.decorLine}></div>
                </div>
            </div>
        </section>
    );
}
