import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['sr', 'en'],

    // Used when no locale matches
    defaultLocale: 'sr',

    // Don't use a prefix for the default locale
    localePrefix: {
        mode: 'as-needed',
        prefixes: {
            'en': '/en'
        }
    },

    // Disable automatic locale detection
    localeDetection: false,

    pathnames: {
        '/': '/',
        '/o-nama': {
            sr: '/o-nama',
            en: '/about'
        },
        '/projekti': {
            sr: '/projekti',
            en: '/projects'
        },
        '/kontakt': {
            sr: '/kontakt',
            en: '/contact'
        }
    }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);
