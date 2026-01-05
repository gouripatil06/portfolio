# Environment Variables Setup Guide

## Required Environment Variables

### For Email Functionality (Optional - Contact Form)

The portfolio uses **Resend** for sending emails from the contact form. If you want to enable email functionality, you need to set up these variables:

#### 1. **RESEND_API_KEY**
- **What it is**: API key from Resend service
- **Where it's used**: `app/api/send/route.ts` - For sending emails via Resend
- **How to get it**:
  1. Go to [resend.com](https://resend.com)
  2. Sign up for a free account
  3. Go to API Keys section
  4. Create a new API key
  5. Copy the key (starts with `re_`)
- **Required**: Only if you want contact form email functionality
- **Example**: `re_123456789abcdefghijklmnopqrstuvwxyz`

#### 2. **CONTACT_EMAIL** or **FROM_EMAIL**
- **What it is**: The email address that will send emails (must be verified in Resend)
- **Where it's used**: `app/api/send/route.ts` - As the "from" email address
- **How to get it**:
  1. In Resend dashboard, go to Domains
  2. Add and verify your domain, OR
  3. Use Resend's test domain: `onboarding@resend.dev` (for testing only)
- **Required**: Only if you want contact form email functionality
- **Example**: `contact@gouri.fun` or `onboarding@resend.dev` (for testing)

#### 3. **NEXT_PUBLIC_TO_EMAIL**
- **What it is**: Your email address where you want to receive emails
- **Where it's used**: `components/Hero/hero-main.tsx` - For the "Email Me" button
- **How to get it**: Just use your email address
- **Required**: Optional (defaults to `01fe23bcs022@kletech.ac.in` if not set)
- **Example**: `01fe23bcs022@kletech.ac.in`

## Setup Instructions

### Option 1: Without Email Functionality (Simplest)
If you don't need the contact form to send emails, you can skip these variables. The contact form will still work, but emails won't be sent.

Create a `.env.local` file in the `portfolio` directory:
```env
# Optional - Only if you want email functionality
# RESEND_API_KEY=
# CONTACT_EMAIL=
# NEXT_PUBLIC_TO_EMAIL=01fe23bcs022@kletech.ac.in
```

### Option 2: With Email Functionality

1. **Sign up for Resend**:
   - Visit [resend.com](https://resend.com)
   - Create a free account (100 emails/day free tier)

2. **Get your API key**:
   - Go to API Keys in Resend dashboard
   - Create a new API key
   - Copy it

3. **Set up sending email**:
   - Option A: Use Resend's test domain (easiest for testing)
     - Use `onboarding@resend.dev` as FROM_EMAIL
   - Option B: Verify your own domain (for production)
     - Add your domain in Resend
     - Verify it
     - Use `contact@yourdomain.com` as FROM_EMAIL

4. **Create `.env.local` file**:
```env
# Resend API Key (get from resend.com)
RESEND_API_KEY=re_your_api_key_here

# Email to send from (must be verified in Resend)
CONTACT_EMAIL=onboarding@resend.dev
# OR use your verified domain:
# CONTACT_EMAIL=contact@gouri.fun

# Your email address (for Email Me button)
NEXT_PUBLIC_TO_EMAIL=01fe23bcs022@kletech.ac.in
```

## Build Without Email Setup

If you don't want to set up email functionality, the build will work fine. The API route will return an error if someone tries to use the contact form, but the site will build successfully.

## Current Status

- ✅ **Build works without these variables** - The code now handles missing env vars gracefully
- ✅ **Email button works** - Uses fallback email if `NEXT_PUBLIC_TO_EMAIL` is not set
- ⚠️ **Contact form** - Will show error if Resend is not configured (but won't break the build)

## Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- `NEXT_PUBLIC_*` variables are exposed to the browser
- Server-side variables (RESEND_API_KEY, CONTACT_EMAIL) are never exposed to the client
- The free Resend tier gives you 100 emails per day, which is plenty for a portfolio

