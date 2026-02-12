'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from "./ZastoJa.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ZastoJa() {
    const t = useTranslations('home');
    const containerRef = useRef(null);
    const itemsRef = useRef([]);
    const dotsRef = useRef([]);
    const progressLineRef = useRef(null);

    const items = ['responsibility', 'speed', 'business'];

    useGSAP(() => {
        const sections = itemsRef.current;
        const dots = dotsRef.current;
        const progressLine = progressLineRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${items.length * 500}`,
                pin: true,
                scrub: 1,
            }
        });

        // Init: First item visible and in position, others hidden and offset down
        gsap.set(sections[0], { autoAlpha: 1, y: 0 });
        gsap.set(sections.slice(1), { autoAlpha: 0, y: 40 });

        // Init progress dots: first active
        gsap.set(dots[0], { scale: 1, backgroundColor: '#000000' });
        gsap.set(dots.slice(1), { scale: 0.6, backgroundColor: 'rgba(0,0,0,0.2)' });

        // Init progress line
        gsap.set(progressLine, { scaleX: 0, transformOrigin: 'left center' });

        sections.forEach((section, index) => {
            if (index < sections.length - 1) {
                const nextSection = sections[index + 1];
                const currentDot = dots[index];
                const nextDot = dots[index + 1];

                // Calculate progress line position for this transition
                const lineProgress = (index + 1) / (sections.length - 1);

                // Hold current item briefly, then transition
                tl
                    // Fade out current + slide up
                    .to(section, {
                        autoAlpha: 0,
                        y: -30,
                        duration: 1,
                        ease: "power2.inOut"
                    }, `+=${0.5}`)
                    // Fade in next + slide up into position
                    .to(nextSection, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.inOut"
                    }, "<")
                    // Deactivate current dot
                    .to(currentDot, {
                        scale: 0.6,
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        duration: 0.5,
                        ease: "power2.out"
                    }, "<")
                    // Activate next dot
                    .to(nextDot, {
                        scale: 1,
                        backgroundColor: '#000000',
                        duration: 0.5,
                        ease: "power2.out"
                    }, "<")
                    // Animate progress line
                    .to(progressLine, {
                        scaleX: lineProgress,
                        duration: 1,
                        ease: "power2.inOut"
                    }, "<");
            }
        });

    }, { scope: containerRef });

    return (
        <section className={styles.editorialSection} ref={containerRef}>
            {/* Background elements */}
            <div className={styles.editorialBackground}>
                <div className={styles.grainTexture}></div>
                <div className={styles.verticalLine}></div>
            </div>

            <div className={styles.editorialContent}>
                <div className={styles.leftColumn}>
                    <div className={styles.stickyWrapper}>
                        <h2 className={styles.editorialTitle}>{t('about.title')}</h2>
                        <p className={styles.editorialSubtitle}>{t('about.description')}</p>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.valuesList}>
                        {items.map((key, index) => (
                            <div
                                key={key}
                                ref={el => itemsRef.current[index] = el}
                                className={styles.valueItem}
                            >
                                <div className={styles.valueHeader}>
                                    <span className={styles.valueNumber}>0{index + 1} /</span>
                                    <h3 className={styles.valueTitle}>{t(`about.items.${key}.title`)}</h3>
                                </div>
                                <p className={styles.valueDescription}>
                                    {t(`about.items.${key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Progress indicator */}
                    <div className={styles.progressIndicator}>
                        <div className={styles.progressTrack}>
                            <div
                                className={styles.progressLine}
                                ref={progressLineRef}
                            ></div>
                        </div>
                        <div className={styles.progressDots}>
                            {items.map((key, index) => (
                                <div
                                    key={`dot-${key}`}
                                    ref={el => dotsRef.current[index] = el}
                                    className={styles.progressDot}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
