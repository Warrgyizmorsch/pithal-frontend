# Pithal Machinery - Developer Handover & Onboarding Guide

Welcome to the **Pithal Machinery Frontend Project**. This document is designed to help any new developer understand the architecture, tech stack, and business logic of this application so they can immediately start contributing and maintaining the project without friction.

---

## 🏗️ 1. Business Context & App Overview
**Pithal Machinery** is an industrial-grade web application built for a heavy machinery and equipment manufacturing company. The application acts as both a B2B marketing website and an internal CRM.

**It has two main environments:**
1. **Public Storefront:** Displays heavy equipment catalogs (crushers, screens), company blogs, and contact forms. Its primary goal is lead generation.
2. **Admin Dashboard (`/admin`):** A custom-built, secure internal portal where the company staff can manage incoming leads (quotes), publish blogs, and create/manage admin users.

---

## 🛠️ 2. Technology Stack

This project uses a highly modern stack based around React and Next.js:

- **Framework:** **Next.js 16 (App Router)** - We exclusively use the `app/` directory (not `pages/`). Server Components (`page.tsx` by default) and Client Components (`"use client"`).
- **Language:** **TypeScript** - Used strictly for defining types for APIs and Props.
- **Styling:** **Tailwind CSS v4** - Completely utility-driven. Custom theme colors (like industrial amber and slate) are used.
- **Database:** **MongoDB** (connected via `mongoose`).
- **Icons:** `lucide-react` and `react-icons`.
- **Emails:** `nodemailer` and `@emailjs/browser` for automated contact and lead emails.

---

## 📂 3. Directory Structure Guide

When navigating the codebase, follow this structural logic:

```plaintext
pithal-frontend/
├── src/
│   ├── app/                      # 📍 NEXT.JS ROUTING (App Router)
│   │   ├── (Public Routes)       
│   │   │   ├── page.tsx          # Main Landing Page
│   │   │   ├── about/            # About the company
│   │   │   ├── products/         # Product catalog and details
│   │   │   ├── blog/             # Public Blog listings and Markdown articles
│   │   │   ├── contact/          # General inquiries
│   │   │   └── careers/          # Career application forms
│   │   │
│   │   ├── admin/                # 🔒 ADMIN PORTAL (Core CRM App)
│   │   │   └── page.tsx          # Contains the Login UI AND the Dashboard UI
│   │   │
│   │   ├── api/                  # ⚙️ BACKEND API ROUTES
│   │   │   ├── leads/            # Handles quotes/leads from customers
│   │   │   ├── users/            # Handles Admin User accounts
│   │   │   ├── blogs/            # Handles Blog CMS logic
│   │   │   └── contact/          # Handles standard contact submissions
│   │   │
│   │   ├── layout.tsx            # Global HTML wrapper (contains Header/Footer)
│   │   └── globals.css           # Global Tailwind directives
│   │
│   ├── components/               # 🧩 REACT COMPONENTS
│   │   ├── layout/               # Header, Footer, and Mobile Navigation
│   │   ├── dashboard/            # Specialized components for the Admin panel
│   │   └── common/               # Reusable UI (Buttons, Modals, Containers)
│   │
│   ├── lib/                      # 🧠 CORE LOGIC & CONFIG
│   │   ├── db/mongodb.ts         # MongoDB Connection Utility
│   │   ├── models/               # Mongoose Schemas (User.ts, Lead.ts, Blog.ts)
│   │   └── types/                # TypeScript Interfaces (api.ts)
│   │
│   └── data/                     # 📂 MOCK & STATIC DATA
│       └── homeData.ts           # Fallback data for the UI
│
├── public/                       # 🖼️ IMAGES & ASSETS (Logos, machinery photos)
├── .env.local                    # 🗝️ SECRETS (DB connections)
└── package.json                  # Project dependencies
```

---

## ⚙️ 4. Core Systems & Data Flow

### 4.1 The Admin Dashboard (`src/app/admin/page.tsx`)
The entire Admin Portal is heavily state-driven and lives primarily inside `admin/page.tsx`.
- **Login Logic:** Custom built authentication. When a user logs in, it verifies credentials against the `/api/users` endpoint.
- **State Management:** Uses React `useState` and `useEffect`. Data is fetched client-side and saved into state variables (e.g., `leads`, `users`, `blogs`).
- **Dashboard Modules:** The UI conditionally renders different "tabs" (Users List, Leads List, Blog Manager) based on the `activeMenu` state.

### 4.2 The API Layer (`src/app/api/...`)
Because we use Next.js App Router, the backend lives directly in the codebase.
- We use standard HTTP methods (`GET`, `POST`, `PATCH`, `DELETE`).
- Every route connects to MongoDB via `connectDB()` from `src/lib/db/mongodb.ts`.
- **Fallback Data:** If MongoDB is down or the connection string is broken, the `GET` endpoints gracefully fallback to returning mock data (`src/lib/data/mockData.ts`) so the site does not crash.

---

## ⚠️ 5. Known Gotchas & Architectural Decisions (CRITICAL)

If you are a new developer modifying this codebase, you **must** read this:

### 1. Next.js API Caching (The "Stale Data" Bug)
By default, Next.js caches `GET` responses aggressively. If you create a user/lead, and then refresh the page, you might see old data. 
**HOW WE FIXED IT (Do not remove this):**
- In API Routes (`route.ts`), you will see: `export const dynamic = 'force-dynamic';` This tells the Next.js server NEVER to cache the database output.
- In the Client-side `fetch` calls (inside `admin/page.tsx`), you will see cache-busting URLs: `fetch("/api/users?t=" + Date.now())`. This guarantees the browser also bypasses its local cache. 

### 2. Header Dashboard Icon
The Public `Header.tsx` previously contained a User/Dashboard icon. This was intentionally removed to keep the public site clean. The Admin portal must be accessed directly by navigating to `/admin` in the browser URL. Do not re-add the icon unless explicitly requested by business owners.

### 3. Password Hashing
Currently, the Admin system uses plaintext string comparison for passwords for rapid deployment. If this project scales, a critical next step for any backend developer is to implement `bcrypt` hashing inside `POST /api/users` and validation inside the login handler.

---

## 🚀 6. Local Setup & Deployment

### Environment Variables
You must create a `.env.local` file at the root of the project to test locally:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/pithal
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Running Locally
```bash
# 1. Install all dependencies (Uses standard npm)
npm install

# 2. Start the development server
npm run dev
```
- Public Site: [http://localhost:3000](http://localhost:3000)
- Admin Portal: [http://localhost:3000/admin](http://localhost:3000/admin)

### Deploying to Production (Vercel)
This project is fully optimized for **Vercel** deployment.
1. Connect the GitHub repo to Vercel.
2. Add the `MONGODB_URI` environment variable in the Vercel Dashboard.
3. Vercel will automatically run `npm run build` and deploy the app.

---
*End of Handover Document.*
