'use client';

import { Link } from '../../../i18n/routing';
import { useTranslations } from 'next-intl';
import styles from "./page.module.css";

export default function AboutPage() {
    const t = useTranslations('about');

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
                            <span className={styles.btnText}>{t('hero.cta')}</span>
                            <span className={styles.btnShine}></span>
                        </Link>
                        <a href="#proces" className={styles.secondaryBtn}>
                            <span className={styles.btnText}>{t('hero.secondaryCta')}</span>
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
                            <span className={styles.statValue}>{t('hero.stats.exp.value')}</span>
                            <span className={styles.statLabel}>{t('hero.stats.exp.label')}</span>
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
                            <span className={styles.statValue}>{t('hero.stats.projects.value')}</span>
                            <span className={styles.statLabel}>{t('hero.stats.projects.label')}</span>
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
                            <span className={styles.statValue}>{t('hero.stats.clients.value')}</span>
                            <span className={styles.statLabel}>{t('hero.stats.clients.label')}</span>
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

            {/* Process Section */}
            <section id="proces" className={styles.processSection}>
                <div className={styles.processBg}>
                    <div className={styles.processBgGrid}></div>
                    <div className={styles.processBgGlow}></div>
                </div>

                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTagline}>
                        <span className={styles.taglineIcon}></span>
                        {t('process.tagline')}
                    </span>
                    <h2>{t('process.title')}</h2>
                </div>

                <div className={styles.processGrid}>
                    <div className={styles.processCard} style={{ animationDelay: '0s' }}>
                        <div className={styles.processCardInner}>
                            <div className={styles.processGlow}></div>
                            <span className={styles.processNumber}>01</span>
                            <h3>{t('process.steps.discovery.title')}</h3>
                            <p>{t('process.steps.discovery.description')}</p>
                            <div className={styles.processBar}>
                                <div className={styles.processBarFill}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.processCard} style={{ animationDelay: '0.15s' }}>
                        <div className={styles.processCardInner}>
                            <div className={styles.processGlow}></div>
                            <span className={styles.processNumber}>02</span>
                            <h3>{t('process.steps.architecture.title')}</h3>
                            <p>{t('process.steps.architecture.description')}</p>
                            <div className={styles.processBar}>
                                <div className={styles.processBarFill}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.processCard} style={{ animationDelay: '0.3s' }}>
                        <div className={styles.processCardInner}>
                            <div className={styles.processGlow}></div>
                            <span className={styles.processNumber}>03</span>
                            <h3>{t('process.steps.execution.title')}</h3>
                            <p>{t('process.steps.execution.description')}</p>
                            <div className={styles.processBar}>
                                <div className={styles.processBarFill}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.processCard} style={{ animationDelay: '0.45s' }}>
                        <div className={styles.processCardInner}>
                            <div className={styles.processGlow}></div>
                            <span className={styles.processNumber}>04</span>
                            <h3>{t('process.steps.deployment.title')}</h3>
                            <p>{t('process.steps.deployment.description')}</p>
                            <div className={styles.processBar}>
                                <div className={styles.processBarFill}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connecting line */}
                <div className={styles.processConnector}>
                    <div className={styles.connectorLine}></div>
                    <div className={styles.connectorDot}></div>
                    <div className={styles.connectorLine}></div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className={styles.stackSection}>
                <div className={styles.stackBg}>
                    <div className={styles.stackBgGrid}></div>
                    <div className={styles.stackBgGlow}></div>

                    {/* Particles */}
                    <div className={styles.stackParticle} style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
                    <div className={styles.stackParticle} style={{ top: '80%', left: '90%', animationDelay: '2s' }}></div>
                    <div className={styles.stackParticle} style={{ top: '30%', left: '95%', animationDelay: '3s' }}></div>
                </div>

                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTagline}>
                        <span className={styles.taglineIcon}></span>
                        {t('stack.tagline')}
                    </span>
                    <h2>{t('stack.title')}</h2>
                </div>

                <div className={styles.stackGrid}>
                    {/* Core Stack */}
                    <div className={styles.stackCategory} style={{ animationDelay: '0s' }}>
                        <div className={styles.stackCategoryInner}>
                            <div className={styles.stackGlow}></div>
                            <div className={styles.stackIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3>{t('stack.core.title')}</h3>
                            <p className={styles.stackDescription}>
                                {t('stack.core.description')}
                            </p>
                            <div className={styles.techTags}>
                                <span className={styles.techTag}>HTML5</span>
                                <span className={styles.techTag}>CSS3</span>
                                <span className={styles.techTag}>JavaScript</span>
                                <span className={styles.techTag}>React</span>
                                <span className={styles.techTag}>Next.js</span>
                                <span className={styles.techTag}>Node.js</span>
                                <span className={styles.techTag}>TypeScript</span>
                                <span className={styles.techTag}>TailwindCSS</span>
                                <span className={styles.techTag}>WebSockets</span>
                                <span className={styles.techTag}>Python</span>
                                <span className={styles.techTag}>React Native</span>
                            </div>
                            <div className={styles.stackBar}>
                                <div className={styles.stackBarFill} style={{ width: '95%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* AI & Automation */}
                    <div className={styles.stackCategory} style={{ animationDelay: '0.2s' }}>
                        <div className={styles.stackCategoryInner}>
                            <div className={styles.stackGlow}></div>
                            <div className={styles.stackIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3>{t('stack.ai.title')}</h3>
                            <p className={styles.stackDescription}>
                                {t('stack.ai.description')}
                            </p>
                            <div className={styles.techTags}>
                                <span className={styles.techTag}>AI Systems Integration</span>
                                <span className={styles.techTag}>Agentic Workflows</span>
                                <span className={styles.techTag}>LLM Orchestration</span>
                                <span className={styles.techTag}>LLM-Powered Pipelines</span>
                                <span className={styles.techTag}>AI-Powered Backends</span>
                            </div>
                            <div className={styles.stackBar}>
                                <div className={styles.stackBarFill} style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure */}
                    <div className={styles.stackCategory} style={{ animationDelay: '0.4s' }}>
                        <div className={styles.stackCategoryInner}>
                            <div className={styles.stackGlow}></div>
                            <div className={styles.stackIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h3>{t('stack.infra.title')}</h3>
                            <p className={styles.stackDescription}>
                                {t('stack.infra.description')}
                            </p>
                            <div className={styles.techTags}>
                                <span className={styles.techTag}>PostgreSQL</span>
                                <span className={styles.techTag}>SQL Databases</span>
                                <span className={styles.techTag}>Prisma ORM</span>
                                <span className={styles.techTag}>Supabase</span>
                                <span className={styles.techTag}>API Architecture</span>
                                <span className={styles.techTag}>Authentication</span>
                                <span className={styles.techTag}>Cloud Architecture</span>
                                <span className={styles.techTag}>Deployment Pipelines</span>
                                <span className={styles.techTag}>Payment Infrastructure</span>
                                <span className={styles.techTag}>RBAC</span>
                                <span className={styles.techTag}>SEO</span>
                                <span className={styles.techTag}>Git</span>
                            </div>
                            <div className={styles.stackBar}>
                                <div className={styles.stackBarFill} style={{ width: '90%' }}></div>
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
                    <div className={styles.ctaParticle} style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
                    <div className={styles.ctaParticle} style={{ top: '70%', left: '85%', animationDelay: '1.5s' }}></div>
                    <div className={styles.ctaParticle} style={{ top: '40%', left: '90%', animationDelay: '2s' }}></div>
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
