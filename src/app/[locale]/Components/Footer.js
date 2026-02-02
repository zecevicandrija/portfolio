'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from "./Footer.module.css";

export default function Footer() {
    const nav = useTranslations('nav');
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* Background Effects */}
            <div className={styles.footerBg}>
                <div className={styles.bgGrid}></div>
                <div className={styles.bgGlow}></div>
                <div className={styles.topBorder}></div>
            </div>

            <div className={styles.footerContent}>
                {/* Brand Section */}
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.footerLogo}>
                        <span className={styles.logoIcon}></span>
                        ZecevicDevelopment
                    </Link>
                    <p className={styles.brandDescription}>
                        {t('brandDescription')}
                    </p>

                    {/* Social Links */}
                    <div className={styles.socialLinks}>
                        <a
                            href="https://instagram.com/zecevicdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Instagram"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                        <a
                            href="mailto:office@zecevicdev.com"
                            className={styles.socialLink}
                            aria-label="Email"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andrija-zecevic-448289384/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className={styles.footerNav}>
                    <h4 className={styles.navTitle}>{t('navigation')}</h4>
                    <ul className={styles.footerLinks}>
                        <li>
                            <Link href="/">
                                <span className={styles.linkDot}></span>
                                {nav('home')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/o-nama">
                                <span className={styles.linkDot}></span>
                                {nav('about')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/projekti">
                                <span className={styles.linkDot}></span>
                                {nav('projects')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt">
                                <span className={styles.linkDot}></span>
                                {nav('contact')}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={styles.footerContact}>
                    <h4 className={styles.navTitle}>{t('contact')}</h4>
                    <div className={styles.contactInfo}>
                        <a href="mailto:office@zecevicdev.com" className={styles.contactItem}>
                            <span className={styles.contactIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </span>
                            office@zecevicdev.com
                        </a>
                        <div className={styles.contactItem}>
                            <span className={styles.contactIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </span>
                            Novi Sad, Serbia
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.bottomContent}>
                    <p className={styles.copyright}>
                        © {currentYear} ZecevicDevelopment. {t('rights')}
                    </p>
                    <div className={styles.bottomDecor}>
                        <span className={styles.decorLine}></span>
                        <span className={styles.decorDot}></span>
                        <span className={styles.decorLine}></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
