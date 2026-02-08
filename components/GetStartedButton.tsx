"use client";

import { openWhatsApp } from "@/utils/whatsapp";

interface GetStartedButtonProps {
  text?: string;
  messageKey?: keyof typeof import("@/utils/whatsapp").WHATSAPP_MESSAGES;
  className?: string;
}

export default function GetStartedButton({ 
  text = "Get Started", 
  messageKey = 'default',
  className = "inline-flex items-center justify-center px-8 py-4 bg-white text-[#0e6d7c] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
}: GetStartedButtonProps) {
  return (
    <button
      onClick={() => openWhatsApp(messageKey)}
      className={className}
    >
      <span className="font-bold tracking-wide uppercase text-sm">
        {text}
      </span>
    </button>
  );
}
