'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from "./About.module.css";

export default function About() {
    const t = useTranslations('home');

    return (
        <>
            {/* Services Section - Dark Bento Grid */}
            <section className={styles.services}>
                {/* Background */}
                <div className={styles.servicesBackground}>
                    <div className={styles.bgGrid}></div>
                    <div className={styles.bgGlow}></div>
                    <div className={styles.particle} style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
                    <div className={styles.particle} style={{ top: '80%', left: '90%', animationDelay: '1.5s' }}></div>
                    <div className={styles.particle} style={{ top: '45%', left: '15%', animationDelay: '2.5s' }}></div>
                    <div className={styles.particle} style={{ top: '65%', left: '85%', animationDelay: '3.5s' }}></div>
                </div>

                <div className={styles.bentoGrid}>
                    {/* Title Card - spans 2 rows */}
                    <div className={`${styles.bentoCard} ${styles.titleCard}`}>
                        <div className={styles.bentoCardInner}>
                            <span className={styles.systemLabel}>
                                <span className={styles.systemLabelDot}></span>
                                {t('services.label')}
                            </span>
                            <h2 className={styles.bentoTitle}>{t('services.title')}</h2>
                            <div className={styles.titleCardDecor}>
                                <div className={styles.titleLine}></div>
                                <div className={styles.titleDot}></div>
                            </div>
                        </div>
                    </div>

                    {/* Code Terminal Card - hero centerpiece, spans 2 rows */}
                    <div className={`${styles.bentoCard} ${styles.terminalCard}`}>
                        <div className={styles.bentoCardInner}>
                            <div className={styles.terminalGlow}></div>
                            <div className={styles.terminalWindow}>
                                <div className={styles.terminalHeader}>
                                    <div className={styles.terminalDots}>
                                        <span className={styles.tDot} data-color="red"></span>
                                        <span className={styles.tDot} data-color="yellow"></span>
                                        <span className={styles.tDot} data-color="green"></span>
                                    </div>
                                    <span className={styles.terminalTitle}>deploy.pipeline.js</span>
                                    <div className={styles.terminalActions}>
                                        <span className={styles.terminalActionDot}></span>
                                    </div>
                                </div>
                                <div className={styles.terminalBody}>
                                    <div className={styles.codeLine} style={{ animationDelay: '0s' }}>
                                        <span className={styles.lineNum}>1</span>
                                        <span className={styles.codeComment}>// Production Pipeline v3.2</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '0.4s' }}>
                                        <span className={styles.lineNum}>2</span>
                                        <span className={styles.codeKeyword}>const&nbsp;</span>
                                        <span className={styles.codeFunc}>deploy</span>
                                        <span className={styles.codePunc}>&nbsp;=&nbsp;</span>
                                        <span className={styles.codeKeyword}>async&nbsp;</span>
                                        <span className={styles.codePunc}>(</span>
                                        <span className={styles.codeVar}>env</span>
                                        <span className={styles.codePunc}>) =&gt; {'{'}</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '0.8s' }}>
                                        <span className={styles.lineNum}>3</span>
                                        <span className={styles.codeIndent}></span>
                                        <span className={styles.codeKeyword}>const&nbsp;</span>
                                        <span className={styles.codeVar}>nodes</span>
                                        <span className={styles.codePunc}>&nbsp;=&nbsp;</span>
                                        <span className={styles.codeKeyword}>await&nbsp;</span>
                                        <span className={styles.codeFunc}>Cluster</span>
                                        <span className={styles.codePunc}>.init({'{'}</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '1.2s' }}>
                                        <span className={styles.lineNum}>4</span>
                                        <span className={styles.codeIndent2}></span>
                                        <span className={styles.codeProp}>region</span>
                                        <span className={styles.codePunc}>:&nbsp;</span>
                                        <span className={styles.codeString}>&apos;eu-central-1&apos;</span>
                                        <span className={styles.codePunc}>,</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '1.6s' }}>
                                        <span className={styles.lineNum}>5</span>
                                        <span className={styles.codeIndent2}></span>
                                        <span className={styles.codeProp}>replicas</span>
                                        <span className={styles.codePunc}>:&nbsp;</span>
                                        <span className={styles.codeNum}>3</span>
                                        <span className={styles.codePunc}>,</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '2.0s' }}>
                                        <span className={styles.lineNum}>6</span>
                                        <span className={styles.codeIndent2}></span>
                                        <span className={styles.codeProp}>strategy</span>
                                        <span className={styles.codePunc}>:&nbsp;</span>
                                        <span className={styles.codeString}>&apos;blue-green&apos;</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '2.4s' }}>
                                        <span className={styles.lineNum}>7</span>
                                        <span className={styles.codeIndent}></span>
                                        <span className={styles.codePunc}>{'}'});</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '2.8s' }}>
                                        <span className={styles.lineNum}>8</span>
                                        <span className={styles.codeIndent}></span>
                                        <span className={styles.codeKeyword}>await&nbsp;</span>
                                        <span className={styles.codeVar}>nodes</span>
                                        <span className={styles.codePunc}>.</span>
                                        <span className={styles.codeFunc}>healthCheck</span>
                                        <span className={styles.codePunc}>();</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '3.2s' }}>
                                        <span className={styles.lineNum}>9</span>
                                        <span className={styles.codeIndent}></span>
                                        <span className={styles.codeKeyword}>await&nbsp;</span>
                                        <span className={styles.codeVar}>db</span>
                                        <span className={styles.codePunc}>.</span>
                                        <span className={styles.codeFunc}>migrate</span>
                                        <span className={styles.codePunc}>({'{'}&nbsp;</span>
                                        <span className={styles.codeProp}>lock</span>
                                        <span className={styles.codePunc}>:&nbsp;</span>
                                        <span className={styles.codeKeyword}>true</span>
                                        <span className={styles.codePunc}>&nbsp;{'}'});</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '3.6s' }}>
                                        <span className={styles.lineNum}>10</span>
                                        <span className={styles.codeIndent}></span>
                                        <span className={styles.codeVar}>logger</span>
                                        <span className={styles.codePunc}>.</span>
                                        <span className={styles.codeFunc}>info</span>
                                        <span className={styles.codePunc}>(</span>
                                        <span className={styles.codeString}>`[${'{'}</span>
                                        <span className={styles.codeVar}>env</span>
                                        <span className={styles.codeString}>{'}'}] deployed`</span>
                                        <span className={styles.codePunc}>);</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '4.0s' }}>
                                        <span className={styles.lineNum}>11</span>
                                        <span className={styles.codeIndent}></span>
                                        <span className={styles.codeKeyword}>return&nbsp;</span>
                                        <span className={styles.codePunc}>{'{'}&nbsp;</span>
                                        <span className={styles.codeProp}>uptime</span>
                                        <span className={styles.codePunc}>:&nbsp;</span>
                                        <span className={styles.codeString}>&apos;99.97%&apos;</span>
                                        <span className={styles.codePunc}>&nbsp;{'}'};</span>
                                    </div>
                                    <div className={styles.codeLine} style={{ animationDelay: '4.4s' }}>
                                        <span className={styles.lineNum}>12</span>
                                        <span className={styles.codePunc}>{'}'};
                                        </span>
                                        <span className={styles.cursor}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card - Enterprise Systems */}
                    <div className={`${styles.bentoCard} ${styles.statCard}`}>
                        <div className={styles.bentoCardInner}>
                            <span className={styles.statNumber}>6+</span>
                            <span className={styles.statLabel}>Enterprise Systems</span>
                            <div className={styles.statBarMini}>
                                <div className={styles.statBarMiniFill}></div>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card - Lighthouse */}
                    <div className={`${styles.bentoCard} ${styles.statCard}`}>
                        <div className={styles.bentoCardInner}>
                            <span className={styles.statNumber}>100</span>
                            <span className={styles.statLabel}>Lighthouse Score</span>
                            <div className={styles.lighthouseRing}>
                                <svg viewBox="0 0 36 36" className={styles.lighthouseSvg}>
                                    <path className={styles.lighthouseTrack}
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" strokeWidth="2.5" />
                                    <path className={styles.lighthouseFill}
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" strokeWidth="2.5" strokeDasharray="100, 100" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 1 - Full-Stack Engineering (HERO - tall, spans 2 rows) */}
                    <div className={`${styles.bentoCard} ${styles.serviceCard} ${styles.heroServiceCard}`} style={{ animationDelay: '0.1s' }}>
                        <div className={styles.bentoCardInner}>
                            {/* Code Background - Subtle Visual Texture */}
                            <div className={styles.cardCodeBackground}>
                                <div className={styles.bgCodeLine}><span className={styles.cKey}>const</span> <span className={styles.cFunc}>deploy</span> = <span className={styles.cKey}>async</span> (env) =&gt; {'{'}</div>
                                <div className={styles.bgCodeLine}>&nbsp;&nbsp;<span className={styles.cKey}>await</span> <span className={styles.cVar}>Cluster</span>.<span className={styles.cFunc}>init</span>();</div>
                                <div className={styles.bgCodeLine}>&nbsp;&nbsp;<span className={styles.cKey}>await</span> <span className={styles.cVar}>db</span>.<span className={styles.cFunc}>migrate</span>();</div>
                                <div className={styles.bgCodeLine}>&nbsp;&nbsp;<span className={styles.cVar}>logger</span>.<span className={styles.cFunc}>info</span>(<span className={styles.cStr}>`deployed`</span>);</div>
                                <div className={styles.bgCodeLine}>&nbsp;&nbsp;<span className={styles.cKey}>return</span> {'{'} <span className={styles.cProp}>status</span>: <span className={styles.cStr}>&apos;live&apos;</span> {'}'};</div>
                                <div className={styles.bgCodeLine}>{'}'}</div>
                            </div>

                            <div className={styles.cardHeader}>
                                <span className={styles.cardTag}>{t('services.items.web.tag')}</span>
                                <span className={styles.cardStatus}>
                                    <span className={styles.statusDot}></span>
                                    {t('services.items.web.status')}
                                </span>
                            </div>
                            <div className={styles.serviceIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <h3>{t('services.items.web.title')}</h3>
                            <p>{t('services.items.web.description')}</p>
                            <span className={styles.techMeta}>{t('services.items.web.tech')}</span>
                            <div className={styles.cardTags}>
                                <span>{t('services.items.web.tags')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 2 - Conversion Architecture */}
                    <div className={`${styles.bentoCard} ${styles.serviceCard}`} style={{ animationDelay: '0.2s' }}>
                        <div className={styles.bentoCardInner}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardTag}>{t('services.items.design.tag')}</span>
                                <span className={styles.cardStatus}>
                                    <span className={styles.statusDot}></span>
                                    {t('services.items.design.status')}
                                </span>
                            </div>
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
                            <span className={styles.techMeta}>{t('services.items.design.tech')}</span>
                        </div>
                    </div>

                    {/* Service Card 3 - Revenue Infrastructure */}
                    <div className={`${styles.bentoCard} ${styles.serviceCard}`} style={{ animationDelay: '0.3s' }}>
                        <div className={styles.bentoCardInner}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardTag}>{t('services.items.ecommerce.tag')}</span>
                                <span className={styles.cardStatus}>
                                    <span className={styles.statusDot}></span>
                                    {t('services.items.ecommerce.status')}
                                </span>
                            </div>
                            <div className={styles.serviceIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </div>
                            <h3>{t('services.items.ecommerce.title')}</h3>
                            <p>{t('services.items.ecommerce.description')}</p>
                            <span className={styles.techMeta}>{t('services.items.ecommerce.tech')}</span>
                        </div>
                    </div>

                    {/* Service Card 4 - System Scalability (wide bottom row) */}
                    <div className={`${styles.bentoCard} ${styles.serviceCard} ${styles.wideCard}`} style={{ animationDelay: '0.4s' }}>
                        <div className={styles.bentoCardInner}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardTag}>{t('services.items.seo.tag')}</span>
                                <span className={styles.cardStatus}>
                                    <span className={styles.statusDot}></span>
                                    {t('services.items.seo.status')}
                                </span>
                            </div>
                            <div className={styles.serviceIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <h3>{t('services.items.seo.title')}</h3>
                            <p>{t('services.items.seo.description')}</p>
                            <span className={styles.techMeta}>{t('services.items.seo.tech')}</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
