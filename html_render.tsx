import React from 'react';
import { render } from '@react-email/render';
import ContactFormResponse from './emails/contact-us';
import QuoteFormResponse from './emails/quote-query';
import * as fs from 'fs/promises';

async function renderEmailTemplates() {
    const contactHTML = await render(<ContactFormResponse />, { pretty: true });
    const quoteHTML = await render(<QuoteFormResponse />, { pretty: true });

    await fs.writeFile('./staticRender/contact-us.html', contactHTML);
    await fs.writeFile('./staticRender/quote-query.html', quoteHTML);
}

renderEmailTemplates().catch(console.error);
