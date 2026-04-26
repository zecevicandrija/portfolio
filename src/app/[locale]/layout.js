import { Space_Grotesk, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    const t = {
        sr: {
            title: 'ZecevicDev | Web Razvoj i Dizajn',
            description: 'Projektujem high-performance digitalne sisteme koji pretvaraju pažnju u prihod. Arhitektura spremna za 100k+ korisnika i maksimalnu konverziju.',
            keywords: ['izrada sajtova', 'web aplikacije', 'programiranje', 'web dizajn', 'seo optimizacija', 'digitalni sistemi', 'nextjs', 'react'],
        },
        en: {
            title: 'ZecevicDev | Web Development & Design',
            description: 'Projecting high-performance digital systems that turn attention into profit. Architecture ready for 100k+ users and maximum conversion.',
            keywords: ['web development', 'web design', 'web apps', 'programming', 'seo optimization', 'digital systems', 'nextjs', 'react'],
        }
    };

    const metadata = t[locale] || t.sr;
    const baseUrl = 'https://zecevicdev.com';

    return {
        title: {
            template: '%s | ZecevicDev',
            default: metadata.title,
        },
        description: metadata.description,
        keywords: metadata.keywords,
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: locale === 'sr' ? '/' : '/en',
            languages: {
                'sr-RS': '/sr',
                'en-US': '/en',
            },
        },
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            url: baseUrl,
            siteName: 'ZecevicDev',
            locale: locale === 'sr' ? 'sr_RS' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.title,
            description: metadata.description,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'ProfessionalService',
                '@id': 'https://zecevicdev.com/#business',
                name: 'ZecevicDev',
                description: 'Premium web development i softversko inženjerska agencija koja gradi napredne digitalne sisteme i aplikacije za konverziju i skaliranje.',
                url: 'https://zecevicdev.com',
                telephone: '', // Ukoliko imaš telefon, upiši ga ovde
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Novi Sad',
                    addressCountry: 'RS'
                },
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        opens: '08:00',
                        closes: '16:00'
                    }
                ],
                priceRange: '$$$',
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5.0',
                    reviewCount: '20'
                }
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'Koliko košta izrada web sajta ili web aplikacije?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Naši korporativni web sajtovi počinju od 1.000 EUR, napredne E-commerce prodavnice od 1.500 EUR, dok složene custom web aplikacije kreću od 2.000 EUR.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Da li koristite WordPress?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Ne. Sve gradimo od nule koristeći custom kod i tehnologije poput Next.js i Node.js za maksimalne performanse.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Koliko dugo traje izrada aplikacije?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Prosečan korporativni sajt zahteva 3 do 6 nedelja, dok kompleksnije web aplikacije mogu trajati od 6 nedelja do 3 meseca.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Da li nudite održavanje sajta?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Da, pružamo kompletno održavanje servera i koda nakon lansiranja projekta.'
                        }
                    },
                    {
                        '@type': 'Question',
                        name: 'Da li integrišete online plaćanja?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Da, eksperti smo za Stripe integracije, automatizaciju pretplata i naplatu sa celog sveta.'
                        }
                    }
                ]
            },
            {
                '@type': 'Service',
                name: 'Custom Web Aplikacije i Full-Stack Inženjering',
                provider: {
                    '@id': 'https://zecevicdev.com/#business'
                },
                description: 'Razvoj kompleksnih aplikacija koristeći Next.js, Node.js, SQL i REST API tehnologije sa Zero-Failure logikom.'
            },
            {
                '@type': 'Service',
                name: 'E-Commerce i Revenue Infrastruktura',
                provider: {
                    '@id': 'https://zecevicdev.com/#business'
                },
                description: 'Integrisani sistemi za plaćanje, automatsku isporuku digitalnih proizvoda i praćenje zaliha koristeći Stripe i Webhooks.'
            },
            {
                '@type': 'Service',
                name: 'Korporativne Web Platforme',
                provider: {
                    '@id': 'https://zecevicdev.com/#business'
                },
                description: 'Sajtovi visokog autoriteta optimizovani za konverzije, Core Web Vitals i neverovatno brzo učitavanje u milisekundi.'
            }
        ]
    };

    return (
        <html lang={locale}>
            <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

