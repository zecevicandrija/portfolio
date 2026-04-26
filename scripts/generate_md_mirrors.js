const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const turndownService = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

const BASE_URL = 'http://localhost:3000';
const START_URLS = ['http://localhost:3000/sr', 'http://localhost:3000/en'];
const OUTPUT_DIR = path.join(__dirname, '../public');

const visitedUrls = new Set();
const queue = [...START_URLS];
let generatedCount = 0;

async function crawl() {
    console.log('Starting Markdown Mirror generation...');
    
    while (queue.length > 0) {
        const urlToVisit = queue.shift();
        
        if (visitedUrls.has(urlToVisit) || !urlToVisit.startsWith(BASE_URL)) continue;
        visitedUrls.add(urlToVisit);

        try {
            const response = await fetch(urlToVisit);
            if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) continue;

            const html = await response.text();
            const $ = cheerio.load(html);

            // Skip 404s and noindex
            const title = $('title').text().trim();
            const robotsMeta = $('meta[name="robots"]').attr('content') || '';
            if (title.includes('404') || robotsMeta.includes('noindex') || urlToVisit.includes('/thanks')) {
                continue;
            }

            const description = $('meta[name="description"]').attr('content') || '';
            const canonicalUrl = ($('link[rel="canonical"]').attr('href') || urlToVisit)
                                  .replace('http://localhost:3000', 'https://zecevicdev.com');

            // Find internal links
            $('a').each((i, link) => {
                let href = $(link).attr('href');
                if (href && href.startsWith('/')) {
                    const absoluteUrl = `${BASE_URL}${href}`.split('#')[0];
                    if (!visitedUrls.has(absoluteUrl) && !queue.includes(absoluteUrl)) {
                        queue.push(absoluteUrl);
                    }
                }
            });

            // Strip out unnecessary elements
            $('nav, footer, script, style, noscript, iframe, header').remove();
            
            // Remove by classes or ID
            $('*').each((i, el) => {
                const combined = ($(el).attr('class') || '') + ' ' + ($(el).attr('id') || '');
                const combinedLower = combined.toLowerCase();
                
                if (
                    combinedLower.includes('nav') || 
                    combinedLower.includes('footer') || 
                    combinedLower.includes('cta-split') || 
                    combinedLower.includes('cookie') ||
                    combinedLower.includes('chat') ||
                    combinedLower.includes('widget') ||
                    combinedLower.includes('hubspot') ||
                    combined.match(/\bghl/i)
                ) {
                    $(el).remove();
                }
            });

            // Drop empty div/span wrappers that have no text content
            let removedEmpty = true;
            while(removedEmpty) {
                removedEmpty = false;
                $('div, span').each((i, el) => {
                    const elNode = $(el);
                    // Check if node has no text and no child elements like img
                    if (elNode.text().trim() === '' && elNode.find('img').length === 0) {
                        elNode.remove();
                        removedEmpty = true;
                    }
                });
            }

            let mainContent = $('main').html() || $('body').html();
            if (!mainContent) continue;

            let markdown = turndownService.turndown(mainContent);

            // Clean markdown
            markdown = markdown.replace(/\n{3,}/g, '\n\n'); // collapse 3+ blank lines
            markdown = markdown.replace(/^\s*(0[1-9]|[1-9]\d)\s*$/gm, ''); // strip standalone "01" "02" step numbers
            markdown = markdown.replace(/[•·▪]/g, ''); // removes bullet separator characters
            markdown = markdown.replace(/!\[\]\([^)]+\)/g, ''); // removes empty image alt tags

            // Ensure directory exists
            const pathname = new URL(urlToVisit).pathname;
            const dirPath = pathname !== '/' ? path.join(OUTPUT_DIR, pathname) : OUTPUT_DIR;
            if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

            // Frontmatter
            const today = new Date().toISOString().split('T')[0];
            const frontmatter = `---
title: "${title}"
description: "${description}"
url: "${canonicalUrl}"
last_updated: "${today}"
---

`;
            
            const filePath = path.join(dirPath, 'index.md');
            fs.writeFileSync(filePath, frontmatter + markdown.trim(), 'utf8');
            console.log(`Generated: ${filePath}`);
            generatedCount++;

        } catch (err) {
            console.error(`Error on ${urlToVisit}: `, err.message);
        }
    }
    
    console.log(`\nDone! Successfully generated ${generatedCount} Markdown mirrors.`);
}

crawl();
