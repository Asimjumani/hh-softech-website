# H&H Softech Professional Website

A modern, high-converting, mobile-first responsive web application for **H&H Softech**—a software solutions company in Pakistan specializing in business management, accounting, inventory, and custom software development for retail, wholesale, distributors, and SMEs.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The optimized static build files will be generated in the `dist/` directory, ready to deploy to any static host or web server.

---

## 📁 Project Folder Structure

```
hh-softech-website/
├── public/
│   ├── favicon.svg          # Modern SVG favicon
│   ├── robots.txt           # SEO crawler directive file
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── components/          # Modular UI components
│   │   ├── About.tsx        # Company background and values
│   │   ├── Benefits.tsx     # 6 practical business benefits
│   │   ├── ContactSection.tsx # Lead generation form & contact details
│   │   ├── DashboardMockup.tsx # Illustrative software interface
│   │   ├── FAQ.tsx          # 9 honest question-and-answer accordions
│   │   ├── FloatingWhatsApp.tsx # Floating widget with popup card
│   │   ├── Footer.tsx       # Semantic footer with navigation & legal
│   │   ├── Hero.tsx         # High-converting hero banner
│   │   ├── HowItWorks.tsx   # 4-step transparent onboarding process
│   │   ├── Industries.tsx   # Use cases for Retail, Wholesale, etc.
│   │   ├── Modals.tsx       # Demo, Features & Legal modal dialogs
│   │   ├── Navbar.tsx       # Sticky responsive navbar with mobile menu
│   │   ├── Pricing.tsx      # Basic, Standard & Premium packages
│   │   ├── Products.tsx     # Software showcase with interactive tabs
│   │   ├── Services.tsx     # 8 software & technical services
│   │   └── WhyUs.tsx        # Practical, achievable value propositions
│   ├── config/
│   │   └── site.ts          # Central configuration (WhatsApp, Phone, Rates)
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # Root application composition
│   ├── index.css            # Tailwind directives and custom scrollbar
│   └── main.tsx             # React DOM entry point
├── index.html               # Vite HTML template with meta & OG tags
├── package.json             # Scripts and dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS theme extension
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

---

## ⚙️ Customization & Updating Content

All critical business parameters are centralized in `src/config/site.ts`.

### 1. Setting Your Real WhatsApp Number
Open `src/config/site.ts` and update:
```typescript
WHATSAPP_NUMBER: "923001234567" // International format without spaces or '+'
```

### 2. Updating Contact Information
In `src/config/site.ts`, update:
```typescript
contact: {
  displayPhone: "+92 300 1234567",
  displayEmail: "contact@hhsoftech.pk",
  serviceArea: "Pakistan (Karachi, Lahore, Islamabad, and nationwide)",
  businessHours: "Monday – Saturday: 9:00 AM – 6:00 PM PKT",
}
```

### 3. Updating Pricing Packages
In `src/config/site.ts`, update the `pricing` array with actual PKR package rates when ready:
```typescript
{
  id: "basic",
  name: "Basic Package",
  priceDisplay: "PKR 25,000",
  // ...
}
```

### 4. Replacing Product Screenshots
In `src/components/DashboardMockup.tsx`, you can replace the illustrative vector markup with an `<img>` tag pointing to your real software screenshot once released:
```tsx
<img src="/images/actual-software-screenshot.png" alt="H&H Softech Software Interface" className="rounded-xl w-full" />
```

---

## 🌐 Connecting a Form Backend

The frontend form contains built-in validation and immediately opens WhatsApp with pre-filled lead details. To save form submissions to an email inbox or database, choose one of these options:

### Option A: Formspree / Web3Forms (Zero Code)
1. Register at [formspree.io](https://formspree.io) or [web3forms.com](https://web3forms.com).
2. Change the form tag in `src/components/ContactSection.tsx` to POST directly to your Formspree endpoint.

### Option B: Node.js / Express or Next.js API Route
Send a `POST` request with JSON payload (`fullName`, `businessName`, `phone`, `email`, `businessType`, `softwareRequirement`, `message`) to an internal endpoint (e.g. `/api/leads`), which emails your team via Nodemailer or stores the lead in a database.

---

## 🚢 Publishing Online

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository; Vercel automatically detects Vite.
4. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Deploying to cPanel / Shared Web Hosting in Pakistan
1. Run `npm run build` locally.
2. Open your hosting cPanel File Manager.
3. Upload all files from the generated `dist/` folder into `public_html/`.

---

## ✅ Quality Assurance Checklist

- [x] **Mobile Responsiveness**: Checked across 360px (mobile), 768px (tablet), and 1280px+ (desktop).
- [x] **WhatsApp Redirection**: Verified with encoded message parameters.
- [x] **Accessibility**: ARIA labels on modals, buttons, and navigation.
- [x] **SEO**: Semantic headings (`<h1>` through `<h4>`), robots.txt, sitemap.xml, and Open Graph tags.
- [x] **Honest Positioning**: Zero fabricated metrics, zero fake testimonials, clearly marked illustrative mockups.
