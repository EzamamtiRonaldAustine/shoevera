// Configuration for Shoevera contact and social links.
// Values default to sensible production-ready settings but can be overridden
// per environment using Vite env vars (see .env.example).

const env = import.meta.env

export const WHATSAPP_NUMBER = env.VITE_WHATSAPP_NUMBER || '256705145159'
export const WHATSAPP_MESSAGE =
  env.VITE_WHATSAPP_MESSAGE || 'Hi, I want to order Shoevera'
export const PHONE = env.VITE_PHONE || '+256 705 145 159'
export const EMAIL = env.VITE_EMAIL || 'hello@shoevera.com'
export const INSTAGRAM_URL =
  env.VITE_INSTAGRAM_URL ||
  'https://www.instagram.com/shoevera.ug?igsh=YmYzNzlha2dsNXZp'
export const TIKTOK_URL =
  env.VITE_TIKTOK_URL || 'https://www.tiktok.com/@shoevera_ug?lang=en-GB'
export const FACEBOOK_URL =
  env.VITE_FACEBOOK_URL ||
  'https://www.facebook.com/people/Shoeveraug/100069983687798/'
// Optional: 9:16 demo video URL (e.g. from public/demo.mp4 or a hosted URL)
export const DEMO_VIDEO_URL = env.VITE_DEMO_VIDEO_URL || '/demo.mp4'

export function getWhatsAppUrl(text = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
