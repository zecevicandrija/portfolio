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
        '@type': 'WebSite',
        name: 'ZecevicDev',
        url: 'https://zecevicdev.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://zecevicdev.com/?q={search_term_string}',
            'query-input': 'required name=search_term_string'
        }
    };

    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ZecevicDev',
        url: 'https://zecevicdev.com',
        logo: 'https://zecevicdev.com/logo.png', // Placeholder, verify if exists or remove
        sameAs: [
            // Add social profiles here if available, e.g.
            // 'https://www.facebook.com/zecevicdev',
            // 'https://www.instagram.com/zecevicdev'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '', // Add if available
            contactType: 'customer service',
            areaServed: ['RS', 'US', 'GB'],
            availableLanguage: ['Serbian', 'English']
        }
    };

    return (
        <html lang={locale}>
            <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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

