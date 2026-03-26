# Portfolio (Next.js + TypeScript + Tailwind)

A modern personal portfolio built with **Next.js App Router** and designed for a premium **3D-style UI** experience.

The project currently includes:
- A landing page with hero + service cards
- A contact form with client-side validation flow
- A server API endpoint for real email sending using SMTP (`nodemailer`)

---

## 1) Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Mail Service:** Nodemailer (SMTP)

---

## 2) Project Structure

```text
portfolio/
├─ app/
│  ├─ api/
│  │  └─ contact/
│  │     └─ route.ts                # POST /api/contact (sendmail)
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx                      # page state + wiring
├─ components/
│  └─ Home/
│     ├─ HomePage.tsx               # composed home sections
│     └─ Hero/
│        ├─ HeroSection.tsx
│        └─ ParticleBackground.tsx
├─ constant/
│  └─ constant.ts                   # nav links/constants
├─ public/
├─ AGENTS.md
├─ CLAUDE.md
├─ package.json
└─ README.md
```

---

## 3) How the Contact Flow Works

### Frontend (`app/page.tsx`)
1. User fills form fields: `name`, `email`, `subject`, `message`.
2. On submit, client sends a `POST` request to `/api/contact`.
3. UI shows loading state (`Sending...`) and success/error message.

### Backend (`app/api/contact/route.ts`)
1. Reads JSON body and validates required fields.
2. Reads SMTP credentials from environment variables.
3. Creates `nodemailer` transporter and sends email.
4. Returns JSON response with clear status message.

---

## 4) Environment Variables

Create a file named `.env.local` in the `portfolio` root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CONTACT_RECEIVER_EMAIL=your_destination_email@gmail.com
```

### Notes
- For Gmail, use an **App Password** (2FA enabled account).
- `CONTACT_RECEIVER_EMAIL` can be omitted; fallback is `SMTP_USER`.
- Never expose these values in client-side code.

---

## 5) Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

---

## 6) Scripts

- `npm run dev` – run development server
- `npm run build` – build for production
- `npm run start` – start production server
- `npm run lint` – run lint checks

---

## 7) Deploy on Vercel

1. Push `portfolio` to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, click **New Project** and import the repository.
3. Set framework preset to **Next.js** (auto-detected).
4. Add Environment Variables in Vercel Project Settings:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_RECEIVER_EMAIL`
5. Click **Deploy**.

For future updates, each push to your main branch can auto-deploy.

---

## 8) Design Direction (3D Interface)

The intended visual direction is a high-quality 3D-inspired UI:
- layered gradients and depth
- soft shadows and glow accents
- glass-like cards
- smooth hover/micro interactions
- consistent spacing and typography

This direction is captured in `AGENTS.md` and should guide future UI expansion (Hero/About/Projects/Skills/Contact sections).

---

## 9) Implementation Notes

- Keep API routes in `app/api/.../route.ts`.
- Keep secret values server-side only.
- Preserve existing sendmail behavior while refactoring UI.
- Prefer reusable components as the interface grows.

---

## 10) Next Suggested Enhancements

- Break `page.tsx` into reusable section components.
- Add project gallery with animated cards.
- Add skill orbit/3D visual effects.
- Add subtle particles/parallax background.
- Add anti-spam layer (rate-limit + honeypot/captcha) for contact API.
