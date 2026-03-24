// Update these before launch
export const WHATSAPP_NUMBER = '256705145159'
export const WHATSAPP_MESSAGE = 'Hi, I want to order Shoevera'
export const PHONE = '+256 705 145 159'
export const EMAIL = 'hello@shoevera.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/shoevera.ug?igsh=YmYzNzlha2dsNXZp'
export const TIKTOK_URL = 'https://www.tiktok.com/@shoevera_ug?lang=en-GB'
export const FACEBOOK_URL = 'https://www.facebook.com/people/Shoeveraug/100069983687798/'
// Hero loop (separate clip). Starts muted for autoplay; user can unmute.
export const HERO_VIDEO_URL = '/hero-video.mp4'
// “See it in action” section — different clip from hero if you like
export const DEMO_VIDEO_URL = '/demo.mp4'

export function getWhatsAppUrl(text = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
