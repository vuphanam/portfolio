<!-- BEGIN:nextjs-agent-rules -->
# Portfolio Agent Rules (Next.js 16)

This project uses modern Next.js with the App Router and TypeScript.

## Core Direction
- Continue building a **modern 3D-style portfolio interface**.
- Keep UI visually impressive: depth, gradient lighting, glassmorphism, layered cards, subtle motion.
- Prioritize UX: responsive layout, readable typography, accessible colors, smooth interactions.

## Technical Requirements
- Keep pages/components in `app/` using App Router conventions.
- Use reusable UI sections/components for maintainability.
- Preserve contact flow:
  - `app/page.tsx` sends data to `/api/contact`
  - `app/api/contact/route.ts` handles SMTP sendmail with `nodemailer`
- Validate form input and return clear API messages.

## Styling Guidance
- Tailwind CSS first.
- Prefer consistent design tokens (spacing, radius, colors, shadows).
- 3D feel via:
  - layered background gradients
  - soft shadows and highlights
  - hover transforms (`translate`, `scale`, `rotate` lightly)
  - optional animated background particles

## Environment Memory
Project expects these variables in `.env.local`:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_RECEIVER_EMAIL`

## Safety
- Never expose SMTP credentials in client code.
- Keep secrets server-side only.
- Avoid breaking existing working sendmail logic while iterating UI.
<!-- END:nextjs-agent-rules -->
