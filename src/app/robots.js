export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot'],
                allow: '/',
            }
        ],
        sitemap: 'https://zecevicdev.com/sitemap.xml',
    }
}
