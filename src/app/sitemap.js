import { routing } from '../i18n/routing';

export default function sitemap() {
    const baseUrl = 'https://zecevicdev.com';

    // Define base routes that are in routing.js
    // We need to map them to the structure sitemap expects
    const routes = ['/', '/o-nama', '/projekti', '/kontakt'];

    // Specialized function to get path for a route and locale
    const getPath = (route, locale) => {
        if (route === '/') return '';

        // Check if the route has specific localized paths
        if (routing.pathnames[route]) {
            const localizedPath = routing.pathnames[route][locale];
            return localizedPath;
        }

        // Fallback to the route itself if no localized version defined (shouldn't happen based on routing.js)
        return route;
    };

    const sitemapEntries = [];

    routes.forEach(route => {
        // Create an entry for each route
        // We will generate a main entry for the default locale, and add alternates

        // 1. Serbian (Default) version
        const srPath = getPath(route, 'sr');
        const srUrl = `${baseUrl}${srPath === '/' ? '' : srPath}`;

        // 2. English version
        const enPath = getPath(route, 'en');
        // EN prefix is /en
        const enUrl = `${baseUrl}/en${enPath}`;

        // Add SR entry
        sitemapEntries.push({
            url: srUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '/' ? 1 : 0.8,
            alternates: {
                languages: {
                    sr: srUrl,
                    en: enUrl,
                },
            },
        });

        // Add EN entry
        sitemapEntries.push({
            url: enUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '/' ? 1 : 0.8,
            alternates: {
                languages: {
                    sr: srUrl,
                    en: enUrl,
                },
            },
        });
    });

    return sitemapEntries;
}
