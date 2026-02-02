'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '../../../i18n/routing';
import styles from "./Navbar.module.css";

export default function Navbar() {
    const t = useTranslations('home');
    const nav = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const switchLocale = () => {
        const newLocale = locale === 'sr' ? 'en' : 'sr';
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    ZecevicDevelopment
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link href="/" className={pathname === '/' ? styles.active : ''}>
                                {nav('home')}
                                <span className={styles.linkDot}></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/o-nama" className={pathname === '/o-nama' ? styles.active : ''}>
                                {nav('about')}
                                <span className={styles.linkDot}></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projekti" className={pathname === '/projekti' ? styles.active : ''}>
                                {nav('projects')}
                                <span className={styles.linkDot}></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt" className={pathname === '/kontakt' ? styles.active : ''}>
                                {nav('contact')}
                                <span className={styles.linkDot}></span>
                            </Link>
                        </li>
                    </ul>

                    {/* Language Switcher */}
                    <button
                        onClick={switchLocale}
                        className={styles.langSwitcher}
                        aria-label="Switch language"
                    >
                        <span className={styles.langIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </span>
                        <span className={styles.langText}>{locale === 'sr' ? 'SR' : 'EN'}</span>
                    </button>

                    <Link href="/kontakt" className={styles.navCta}>
                        <span className={styles.btnText}>{t('hero.cta')}</span>
                        <div className={styles.btnGlow}></div>
                    </Link>
                </div>

                {/* Mobile Controls (Lang + Hamburger) */}
                <div className={styles.mobileHeaderControls}>
                    <button
                        onClick={switchLocale}
                        className={styles.mobileHeaderLangSwitcher}
                        aria-label="Switch language"
                    >
                        <span className={styles.langText}>{locale === 'sr' ? 'SR' : 'EN'}</span>
                    </button>

                    <button
                        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <ul className={styles.mobileLinks}>
                        <li><Link href="/">{nav('home')}</Link></li>
                        <li><Link href="/o-nama">{nav('about')}</Link></li>
                        <li><Link href="/projekti">{nav('projects')}</Link></li>
                        <li><Link href="/kontakt">{nav('contact')}</Link></li>
                    </ul>

                    {/* Mobile Language Switcher */}
                    <button
                        onClick={switchLocale}
                        className={styles.mobileLangSwitcher}
                    >
                        <span className={styles.langIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </span>
                        <span>{locale === 'sr' ? 'Srpski' : 'English'}</span>
                    </button>

                    <div className={styles.mobileCtaContainer}>
                        <Link href="/kontakt" className={styles.navCta}>
                            <span className={styles.btnText}>{t('hero.cta')}</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.mobileMenuBg}>
                    <div className={styles.menuGlow}></div>
                </div>
            </div>
        </nav>
    );
}
