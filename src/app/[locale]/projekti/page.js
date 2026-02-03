'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from "./page.module.css";

export default function ProjectsPage() {
    const t = useTranslations('projects');
    const home = useTranslations('home');

    const projects = [
        {
            id: 'dijalog',
            number: '01',
            image: '/Assets/dijalog1.jpg',
            link: 'https://dijalogpodcast.com/'
        },
        {
            id: 'akademija',
            number: '02',
            image: '/Assets/akademija1.jpg',
            link: 'https://motionakademija.com/'
        },
        {
            id: 'eneplus',
            number: '03',
            image: '/Assets/eneplus.jpg',
            link: 'https://www.eneplus.rs/sr'
        },
        {
            id: 'eshop',
            number: '04',
            image: '/Assets/eshop2.jpg',
            link: 'https://balkankeys.netlify.app/'
        },
        {
            id: 'satovi',
            number: '05',
            image: '/Assets/satovi.jpg',
            link: 'https://satovi2.vercel.app/'
        },
        {
            id: 'discord',
            number: '06',
            image: '/Assets/discordbot.png',
            link: null
        },
        {
            id: 'spomenici',
            number: '07',
            image: '/Assets/spomenici.jpg',
            link: 'https://spomenicinovogsada.com'
        },
        {
            id: 'ebikes',
            number: '08',
            image: '/Assets/ebikes.jpg',
            link: 'https://www.belgrade-ebikes.com/'
        },
    ];

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

                    {/* Hero Buttons */}
                    <div className={styles.heroButtons}>
                        <Link href="/kontakt" className={styles.primaryBtn}>
                            <span className={styles.btnText}>{home('hero.cta')}</span>
                            <span className={styles.btnShine}></span>
                        </Link>
                        <a href="#projekti" className={styles.secondaryBtn}>
                            <span className={styles.btnText}>{t('caseStudies')}</span>
                            <span className={styles.btnIcon}>↓</span>
                        </a>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className={styles.statsRow}>
                    <div className={styles.statCard}>
                        <div className={styles.statCardInner}>
                            <div className={styles.statIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <span className={styles.statValue}>{t('stats.revenue.value')}</span>
                            <span className={styles.statLabel}>{t('stats.revenue.label')}</span>
                            <div className={styles.statGlow}></div>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statCardInner}>
                            <div className={styles.statIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <span className={styles.statValue}>{t('stats.projects.value')}</span>
                            <span className={styles.statLabel}>{t('stats.projects.label')}</span>
                            <div className={styles.statGlow}></div>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statCardInner}>
                            <div className={styles.statIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <span className={styles.statValue}>{t('stats.satisfaction.value')}</span>
                            <span className={styles.statLabel}>{t('stats.satisfaction.label')}</span>
                            <div className={styles.statGlow}></div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollMouse}>
                        <div className={styles.scrollWheel}></div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className={styles.projectsSection} id="projekti">
                <div className={styles.projectsBg}>
                    <div className={styles.projectsBgGrid}></div>
                    <div className={styles.projectsBgGlow}></div>
                </div>

                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTagline}>
                        <span className={styles.taglineIcon}></span>
                        {t('caseStudies')}
                    </span>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => {
                        const CardWrapper = project.link ? 'a' : 'div';
                        const cardProps = project.link ? {
                            href: project.link,
                            target: '_blank',
                            rel: 'noopener noreferrer'
                        } : {};

                        return (
                            <CardWrapper
                                key={project.id}
                                className={`${styles.projectCard} ${project.link ? styles.clickable : ''}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                                {...cardProps}
                            >
                                <div className={styles.projectCardInner}>
                                    <div className={styles.projectGlow}></div>

                                    {/* Project Image */}
                                    <div className={styles.projectImageWrapper}>
                                        <Image
                                            src={project.image}
                                            alt={t(`items.${project.id}.title`)}
                                            fill
                                            className={styles.projectImage}
                                            sizes="(max-width: 968px) 100vw, 50vw"
                                        />
                                        <div className={styles.projectImageOverlay}></div>
                                        <span className={styles.projectNumber}>{project.number}</span>
                                        <span className={styles.projectCategory}>
                                            {t(`items.${project.id}.category`)}
                                        </span>
                                    </div>

                                    {/* Project Content */}
                                    <div className={styles.projectContent}>
                                        <h3 className={styles.projectTitle}>
                                            {t(`items.${project.id}.title`)}
                                        </h3>
                                        <p className={styles.projectTagline}>
                                            {t(`items.${project.id}.tagline`)}
                                        </p>
                                        <p className={styles.projectDescription}>
                                            {t(`items.${project.id}.description`)}
                                        </p>

                                        {/* Project Stats */}
                                        <div className={styles.projectStats}>
                                            <div className={styles.projectStat}>
                                                <span className={styles.projectStatValue}>
                                                    {t(`items.${project.id}.stats.stat1.value`)}
                                                </span>
                                                <span className={styles.projectStatLabel}>
                                                    {t(`items.${project.id}.stats.stat1.label`)}
                                                </span>
                                            </div>
                                            <div className={styles.projectStatDivider}></div>
                                            <div className={styles.projectStat}>
                                                <span className={styles.projectStatValue}>
                                                    {t(`items.${project.id}.stats.stat2.value`)}
                                                </span>
                                                <span className={styles.projectStatLabel}>
                                                    {t(`items.${project.id}.stats.stat2.label`)}
                                                </span>
                                            </div>
                                            <div className={styles.projectStatDivider}></div>
                                            <div className={styles.projectStat}>
                                                <span className={styles.projectStatValue}>
                                                    {t(`items.${project.id}.stats.stat3.value`)}
                                                </span>
                                                <span className={styles.projectStatLabel}>
                                                    {t(`items.${project.id}.stats.stat3.label`)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* View Details */}
                                        {project.link && (
                                            <div className={styles.projectLinkRow}>
                                                <span className={styles.projectLinkText}>{t('viewDetails')}</span>
                                                <span className={styles.projectArrow}>
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className={styles.projectBar}>
                                        <div className={styles.projectBarFill}></div>
                                    </div>
                                </div>
                            </CardWrapper>
                        );
                    })}
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
                    <Link href="/kontakt" className={styles.ctaButton}>
                        <span className={styles.btnText}>{t('cta.button')}</span>
                        <span className={styles.btnShine}></span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
