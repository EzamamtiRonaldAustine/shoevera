# Contributing to Shoevera

Thanks for helping improve the Shoevera landing page.

## Prerequisites

- Node.js 18 or newer
- npm (recommended) installed globally

## Setup

```bash
# clone the repo, then
cd shoevera
npm install
```

## Development workflow

- Start the dev server:

  ```bash
  npm run dev
  ```

  Then open http://localhost:5173 in your browser.

- Update configuration (WhatsApp, contact details, socials, demo video) via src/config.js or environment variables described in .env.example.

## Code quality

Before pushing changes, run:

```bash
# Lint for code issues and basic accessibility rules
npm run lint

# Auto-format code using Prettier
npm run format
```

Fix or commit with a clear message after these commands run cleanly.

## Testing your changes

1. **Functional check in dev**
   - Run `npm run dev` and click through the whole page.
   - Verify WhatsApp buttons, navigation, and links work.

2. **Production build sanity check**
   - Run:

     ```bash
     npm run build
     npm run preview
     ```

   - Open the preview URL and confirm everything still works on both desktop and mobile.

3. **Cross-device & browser check (recommended)**
   - Test on at least one mobile phone and one desktop.
   - Check layout, fonts, and CTAs.

If you add any new tooling or scripts, document them briefly in this file and/or the README.
