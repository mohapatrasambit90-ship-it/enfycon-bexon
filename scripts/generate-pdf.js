const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Usage: node scripts/generate-pdf.js <url> [output-filename]
const url = process.argv[2];
const outputFilename = process.argv[3] || 'blog-post.pdf';

if (!url) {
    console.error('Please provide a URL as the first argument.');
    process.exit(1);
}

(async () => {
    console.log(`Starting PDF generation for: ${url}`);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the page
    console.log('Navigating...');
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Inject Print Styles and Elements
    console.log('Injecting Print Styles and Elements...');

    await page.addStyleTag({
        content: `
        @media print {
            @page { size: A4; margin: 0; }
            body { margin: 0; padding: 0; background: white; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            
            /* Hide everything by default using visibility */
            body * { visibility: hidden; }
            
            /* Show specific print container and injected elements */
            .print-container, .print-container * { visibility: visible; }
            .print-container { position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 0; z-index: 5; }
            
            .pdf-header, .pdf-header *, .pdf-footer, .pdf-footer *, .pdf-watermark, .pdf-watermark *, .page-1-header-mask { visibility: visible; display: flex !important; }
            .page-1-header-mask, .pdf-watermark { display: block !important; }

            /* Page Margins */
            @page { margin-top: 30mm; margin-bottom: 25mm; margin-left: 15mm; margin-right: 15mm; }
            @page :first { margin-top: 0mm; margin-top: 15mm; }

            /* Watermark */
            .pdf-watermark { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-35deg); opacity: 0.08; z-index: -1; pointer-events: none; width: 80%; max-width: 600px; }
            .pdf-watermark img { width: 100%; height: auto; }

            /* Header */
            .pdf-header { position: fixed; top: -20mm; left: 0; right: 0; height: 20mm; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
            .pdf-header .header-logo { height: 15mm; width: auto; }
            .pdf-header .header-logo img { height: 100%; width: auto; object-fit: contain; }
            .pdf-header .header-title { font-size: 10pt; color: #666; font-weight: 500; }

            /* Header Mask */
            .page-1-header-mask { position: absolute; top: -30mm; left: -15mm; width: 210mm; height: 40mm; background: white; z-index: 10; }

            /* Footer */
            .pdf-footer { position: fixed; bottom: -15mm; left: 0; right: 0; height: 10mm; display: flex; justify-content: space-between; align-items: center; font-size: 9pt; color: #888; border-top: 1px solid #eee; padding-top: 5px; }
            .pdf-footer .footer-page-number:after { content: "Page " counter(page); }

            /* Content Styling directly on .print-content inside .print-container */
            .print-content { font-size: 11pt; line-height: 1.6; color: #111; }
            .print-content h1, .print-content h2 { page-break-after: avoid; }
            .print-content img { max-width: 100%; height: auto; page-break-inside: avoid; }
            .print-content p { orphans: 3; widows: 3; }
            
            /* Hero Style Injection logic if needed or reused from main CSS */
             .print-hero { text-align: center; margin-bottom: 30px; }
             .print-hero h1 { font-size: 24pt; margin-bottom: 10px; }
             .print-hero img.featured { width: 100%; height: 300px; object-fit: cover; border-radius: 8px; }
        }
    `});

    // Extract Title and Featured Image URL from the page to populate our injected elements
    const pageData = await page.evaluate(() => {
        const title = document.querySelector('h1')?.innerText || "Blog Post";
        const featuredImg = document.querySelector('.post-details-wrapper img')?.src || "";
        // Note: The specific selector for featured image might need adjustment based on valid usage
        return { title, featuredImg };
    });

    // Inject HTML Structure
    await page.evaluate(({ title, featuredImg }) => {
        // Create Wrapper
        const container = document.createElement('div');
        container.classList.add('print-container');

        // Clone Blog Content
        const originalContent = document.getElementById('blog-content-area');
        if (originalContent) {
            const clone = originalContent.cloneNode(true);
            clone.classList.add('print-content');

            // Prepend Hero to content
            const hero = document.createElement('div');
            hero.className = 'print-hero';
            hero.innerHTML = `<h1>${title}</h1>${featuredImg ? `<img class="featured" src="${featuredImg}" alt="${title}" />` : ''}`;
            clone.insertBefore(hero, clone.firstChild);

            container.appendChild(clone);
            document.body.appendChild(container);
        }

        // Inject PDF Elements
        const elementsInfo = `
            <div class="pdf-watermark"><img src="/images/logos/logo-2.webp" alt="Watermark" /></div>
            <div class="pdf-header">
                <div class="header-logo"><img src="/images/logos/logo-2.webp" alt="Enfycon" /></div>
                <div class="header-title">${title}</div>
            </div>
            <div class="page-1-header-mask"></div>
            <div class="pdf-footer">
                <div class="footer-address">3921 Long Prairie Road, Building 5, Flower Mound, TX 75208 | +1 201.201.7078</div>
                <div class="footer-page-number"></div>
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = elementsInfo;
        while (div.firstChild) {
            document.body.appendChild(div.firstChild);
        }
    }, pageData);

    // Optional: Wait for specific elements to ensure hydration if strictly needed
    try {
        // Wait a bit more for images after injection
        await page.waitForTimeout(1000);
    } catch (e) {
        console.warn('Warning: Wait might have timed out, proceeding anyway.', e);
    }

    console.log('Generating PDF...');

    // Generate PDF
    await page.pdf({
        path: outputFilename,
        format: 'A4',
        printBackground: true, // Essential for graphics/colors
        displayHeaderFooter: false, // We handle this via CSS/HTML
        margin: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0'
        } // We handle margins in @page CSS
    });

    console.log(`PDF saved to: ${path.resolve(outputFilename)}`);

    await browser.close();
})();
