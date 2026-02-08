/**
 * WhatsApp integration utility for Abhinaya Indo Group
 * Automatically opens WhatsApp with pre-filled professional message
 */

export const WHATSAPP_NUMBER = "6285338237826"; // +62 853-3823-7826 (without + and dashes)

export const WHATSAPP_MESSAGES = {
  default: "Halo Abhinaya Indo Group! Saya tertarik dengan layanan yang Anda tawarkan. Boleh saya dapatkan informasi lebih lanjut tentang apa saja yang tersedia? Terima kasih.",
  
  // Specific messages for different divisions
  techno: "Halo Abhinaya Techno! Saya tertarik dengan layanan IT yang Anda tawarkan. Boleh saya dapatkan informasi lebih lanjut tentang solusi teknologi yang tersedia? Terima kasih.",
  
  creative: "Halo Abhinaya Creative! Saya tertarik dengan layanan kreatif yang Anda tawarkan. Boleh saya dapatkan informasi lebih lanjut tentang solusi kreatif yang tersedia? Terima kasih.",
  
  publisher: "Halo Abhinaya Publisher! Saya tertarik dengan layanan penerbitan yang Anda tawarkan. Boleh saya dapatkan informasi lebih lanjut tentang layanan penerbitan yang tersedia? Terima kasih."
};

/**
 * Opens WhatsApp with pre-filled message
 * @param messageKey - Key for specific message (default, techno, creative, publisher)
 */
export function openWhatsApp(messageKey: keyof typeof WHATSAPP_MESSAGES = 'default'): void {
  const message = WHATSAPP_MESSAGES[messageKey];
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank');
}

/**
 * Creates WhatsApp URL for use in links
 * @param messageKey - Key for specific message
 */
export function createWhatsAppUrl(messageKey: keyof typeof WHATSAPP_MESSAGES = 'default'): string {
  const message = WHATSAPP_MESSAGES[messageKey];
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
