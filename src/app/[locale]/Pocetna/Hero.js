'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import styles from "./Hero.module.css";

function useCountUp(target, duration = 2000, delay = 500) {
    const [value, setValue] = useState(0);
    const animationRef = useRef(null);

    useEffect(() => {
        // Reset value to 0 on mount
        setValue(0);

        const timeout = setTimeout(() => {
            const start = performance.now();
            const animate = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(Math.round(eased * target));
                if (progress < 1) {
                    animationRef.current = requestAnimationFrame(animate);
                }
            };
            animationRef.current = requestAnimationFrame(animate);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [target, duration, delay]);

    return value;
}

const PROJECTS = [
    {
        id: 'akademija',
        name: 'Motion Academy',
        category: 'LEARNING PLATFORM',
        image: '/Assets/akademija1.jpg',
        chartPath: 'M0,100 C40,95 80,80 120,65 C160,50 200,55 240,40 C280,25 320,30 360,15 L400,8',
        chartArea: 'M0,100 C40,95 80,80 120,65 C160,50 200,55 240,40 C280,25 320,30 360,15 L400,8 L400,120 L0,120 Z',
        metrics: [
            { label: 'Students', value: '50+', type: 'number' },
            { label: 'Completion Rate', value: '100%', type: 'percent' },
            { label: 'Automations', value: '6 Active', type: 'status' },
        ]
    },
    {
        id: 'dijalog',
        name: 'Dijalog Podcast',
        category: 'CONTENT PLATFORM',
        image: '/Assets/dijalog1.jpg',
        chartPath: 'M0,105 C50,98 90,85 140,70 C190,55 230,60 280,42 C320,28 360,22 400,12',
        chartArea: 'M0,105 C50,98 90,85 140,70 C190,55 230,60 280,42 C320,28 360,22 400,12 L400,120 L0,120 Z',
        metrics: [
            { label: 'Listeners', value: '30k+', type: 'number' },
            { label: 'Revenue Stream', value: 'Automated', type: 'status' },
            { label: 'Distribution', value: 'Multi-platform', type: 'status' },
        ]
    },
    {
        id: 'eneplus',
        name: 'EnePlus Company',
        category: 'CORPORATE PLATFORM',
        image: '/Assets/eneplus.jpg',
        chartPath: 'M0,108 C60,100 100,88 160,72 C210,58 250,50 300,35 C340,22 370,18 400,10',
        chartArea: 'M0,108 C60,100 100,88 160,72 C210,58 250,50 300,35 C340,22 370,18 400,10 L400,120 L0,120 Z',
        metrics: [
            { label: 'Positioning', value: 'Expert', type: 'status' },
            { label: 'Lead Type', value: 'B2B', type: 'status' },
            { label: 'Presence', value: '24/7 Inbound', type: 'status' },
        ]
    },
    {
        id: 'ebikes',
        name: 'Belgrade E-Bikes',
        category: 'RENTAL PLATFORM',
        image: '/Assets/ebikes.jpg',
        chartPath: 'M0,112 C45,102 85,90 130,75 C175,60 220,52 270,38 C310,26 350,20 400,10',
        chartArea: 'M0,112 C45,102 85,90 130,75 C175,60 220,52 270,38 C310,26 350,20 400,10 L400,120 L0,120 Z',
        metrics: [
            { label: 'Online Booking', value: '100%', type: 'percent' },
            { label: 'Availability', value: '24/7', type: 'status' },
            { label: 'Google Search', value: 'Top 1', type: 'status' },
        ]
    },
];

const CYCLE_INTERVAL = 5000;

export default function Hero() {
    const t = useTranslations('home');

    const projectCount = useCountUp(20, 1800, 800);
    const experienceCount = useCountUp(5, 1200, 1200);
    const satisfactionCount = useCountUp(100, 1600, 1400);
    const uptimeCount = useCountUp(999, 2200, 1000);

    const [activeProject, setActiveProject] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef(null);

    const cycleProject = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveProject((prev) => (prev + 1) % PROJECTS.length);
            setIsTransitioning(false);
        }, 600);
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(cycleProject, CYCLE_INTERVAL);
        return () => clearInterval(intervalRef.current);
    }, [cycleProject]);

    const current = PROJECTS[activeProject];

    return (
        <section className={styles.hero}>
            {/* Premium Motion Grid Background */}
            <div className={styles.gridBackground}>
                <div className={styles.gridLayer}></div>
                <div className={styles.verticalFlow}></div>
                <div className={styles.gridHighlight} style={{ top: '30%', left: '20%', animationDelay: '0s' }}></div>
                <div className={styles.gridHighlight} style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
                <div className={styles.gridHighlight} style={{ top: '20%', left: '70%', animationDelay: '4s' }}></div>
                <div className={styles.gridHighlight} style={{ top: '70%', left: '30%', animationDelay: '1.5s' }}></div>
                <div className={styles.gridHighlight} style={{ top: '40%', left: '50%', animationDelay: '3s' }}></div>
                <div className={styles.accentSquare} style={{ top: '15%', left: '10%' }}></div>
                <div className={styles.accentSquare} style={{ top: '25%', left: '85%', animationDelay: '2s' }}></div>
                <div className={styles.accentSquare} style={{ top: '65%', left: '90%', animationDelay: '4s' }}></div>
                <div className={styles.accentSquare} style={{ top: '80%', left: '20%', animationDelay: '1s' }}></div>
                <div className={styles.ambientGlow}></div>
                <div className={styles.cornerFrame} data-position="top-left"></div>
                <div className={styles.cornerFrame} data-position="top-right"></div>
                <div className={styles.cornerFrame} data-position="bottom-left"></div>
                <div className={styles.cornerFrame} data-position="bottom-right"></div>
            </div>

            {/* Hero Text Content */}
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
                        <span className={styles.btnArrow}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span className={styles.btnShine}></span>
                    </Link>
                    <Link href="/projekti" className={styles.secondaryBtn}>
                        <span className={styles.btnText}>{t('hero.ctaSecondary')}</span>
                    </Link>
                </div>
            </div>

            {/* System Dashboard Visual */}
            <div className={styles.systemDashboard}>
                <div className={styles.dashboardInner}>
                    {/* Dashboard grid overlay */}
                    <div className={styles.dashboardGrid}></div>

                    {/* Dashboard header */}
                    <div className={styles.dashboardHeader}>
                        <div className={styles.dashboardDots}>
                            <span></span><span></span><span></span>
                        </div>
                        <div className={styles.dashboardStatus}>
                            <span className={styles.statusDot}></span>
                            LIVE
                        </div>
                    </div>

                    {/* Project Preview Strip — image area */}
                    <div className={styles.projectPreview}>
                        {PROJECTS.map((project, index) => (
                            <div
                                key={project.id}
                                className={`${styles.projectPreviewImage} ${index === activeProject && !isTransitioning ? styles.projectPreviewActive : ''}`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    sizes="520px"
                                    style={{ objectFit: 'cover' }}
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                        <div className={styles.projectPreviewOverlay}></div>
                        <div className={`${styles.projectPreviewInfo} ${isTransitioning ? styles.previewFading : ''}`}>
                            <span className={styles.projectPreviewCategory}>{current.category}</span>
                            <span className={styles.projectPreviewName}>{current.name.toUpperCase()}</span>
                        </div>
                        <div className={styles.projectDots}>
                            {PROJECTS.map((_, i) => (
                                <span
                                    key={i}
                                    className={`${styles.projectDotIndicator} ${i === activeProject ? styles.projectDotActive : ''}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Growth Chart — fixed size, clickable */}
                    <Link href="/projekti" className={styles.chartLink}>
                        <div className={styles.chartContainer}>
                            <div className={styles.chartLabel}>Growth Trajectory</div>
                            <svg className={styles.chart} viewBox="0 0 400 120" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(201, 169, 98, 0.3)" />
                                        <stop offset="100%" stopColor="rgba(201, 169, 98, 0)" />
                                    </linearGradient>
                                </defs>
                                <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                <path
                                    className={`${styles.chartArea} ${isTransitioning ? styles.chartFading : ''}`}
                                    d={current.chartArea}
                                    fill="url(#chartGradient)"
                                />
                                <path
                                    className={`${styles.chartLine} ${isTransitioning ? styles.chartFading : ''}`}
                                    d={current.chartPath}
                                    fill="none"
                                    stroke="#d4af37"
                                    strokeWidth="2.5"
                                />
                                <circle className={styles.chartDot} cx="400" cy="10" r="4" fill="#d4af37" />
                                <circle className={styles.chartDotPulse} cx="400" cy="10" r="4" fill="#d4af37" />
                            </svg>
                        </div>
                    </Link>

                    {/* Metrics Row — project-specific */}
                    <div className={`${styles.metricsRow} ${isTransitioning ? styles.metricsFading : ''}`}>
                        {current.metrics.map((metric, i) => (
                            <div className={styles.metricCard} key={`${current.id}-${i}`}>
                                <div className={styles.metricHeader}>
                                    <span className={styles.metricLabel}>{metric.label}</span>
                                    {metric.type === 'percent' && (
                                        <span className={styles.metricTrend}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                                                <polyline points="7 17 12 12 17 17" strokeLinecap="round" strokeLinejoin="round" />
                                                <polyline points="7 11 12 6 17 11" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    )}
                                    {metric.type === 'status' && (
                                        <span className={`${styles.statusDot} ${styles.statusDotSmall}`}></span>
                                    )}
                                </div>
                                <div className={styles.metricValue}>
                                    <span className={styles.metricNumber}>{metric.value}</span>
                                </div>
                                <div className={styles.metricBar}>
                                    <div className={styles.metricBarFill} style={{ width: metric.type === 'percent' ? '100%' : '75%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Automation Status — project name */}
                    <div className={`${styles.automationStatus} ${isTransitioning ? styles.metricsFading : ''}`}>
                        <div className={styles.automationItem}>
                            <span className={styles.statusDot}></span>
                            <span>Payment Processing</span>
                        </div>
                        <div className={styles.automationItem}>
                            <span className={styles.statusDot}></span>
                            <span>Lead Capture</span>
                        </div>
                        <div className={styles.automationItem}>
                            <span className={styles.statusDot}></span>
                            <span>Analytics Pipeline</span>
                        </div>
                        <div className={styles.automationItem}>
                            <span className={styles.statusDot}></span>
                            <span>Auto Scaling</span>
                        </div>
                    </div>

                    {/* Gold accent lines */}
                    <div className={styles.dashboardAccentTop}></div>
                    <div className={styles.dashboardAccentBottom}></div>
                </div>
            </div>

            {/* Stats Row */}
            <div className={styles.statsRow}>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>
                        <span className={styles.statNumber}>{projectCount}</span>
                        <span className={styles.statPlus}>+</span>
                    </div>
                    <div className={styles.statLabel}>{t('hero.stats.projects.label')}</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>
                        <span className={styles.statNumber}>{(uptimeCount / 10).toFixed(1)}</span>
                        <span className={styles.statPercent}>%</span>
                    </div>
                    <div className={styles.statLabel}>Uptime</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>
                        <span className={styles.statNumber}>{experienceCount}</span>
                        <span className={styles.statPlus}>+</span>
                    </div>
                    <div className={styles.statLabel}>{t('hero.stats.experience.label')}</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <div className={styles.statValue}>
                        <span className={styles.statNumber}>{satisfactionCount}</span>
                        <span className={styles.statPercent}>%</span>
                    </div>
                    <div className={styles.statLabel}>{t('hero.stats.clients.label')}</div>
                </div>
            </div>
        </section>
    );
}
