# Brijesh Lakhani — Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and EmailJS.

## Tech stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion
- EmailJS contact form

## Run locally

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone <repository-url>
cd developer-portfolio
npm install
```

### Environment variables

Copy the example file and add your EmailJS credentials:

```bash
copy .env.example .env
```

On macOS or Linux:

```bash
cp .env.example .env
```

Set the values in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development server

```bash
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## EmailJS contact form

The contact form sends the portfolio owner's notification email through EmailJS. It passes these template variables:

```text
{{from_name}}
{{from_email}}
{{reply_to}}
{{project_type}}
{{message}}
{{to_email}}
```

In the primary EmailJS template:

- Set **To Email** to your registered email address, or `{{to_email}}`.
- Set **Reply-To** to `{{reply_to}}` so replying goes to the visitor.
- Keep the sender address as the verified email connected to your EmailJS service.

### Automatic thank-you reply

Create a second EmailJS template with **To Email** set to `{{from_email}}`. Then open the primary contact template, select the **Auto-Reply** tab, link the thank-you template, and save. EmailJS will send both emails for every form submission.

## Production build

```bash
npm run build
```

The compiled production files are created in `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

Deploy the `dist/` directory to any static hosting provider, such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Configure the three `VITE_EMAILJS_*` environment variables in the provider's project settings, then redeploy.

> Vite variables are embedded at build time. Restart the development server after changing `.env`, and redeploy after changing production environment variables.
