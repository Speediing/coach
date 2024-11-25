'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#f6f1ea] p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm flex-1 pr-4">
          We and our third-party advertising partners use cookies, pixels and similar technologies to learn more about your
          preferences to personalize content and ads on and off our site and to monitor the effectiveness of our online ads
          and marketing. We also use cookies for web analytics purposes and to enable and improve the functioning of our
          website. You can adjust your preferences for certain non-essential cookies by clicking Manage Cookies. See our{' '}
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Button 
            onClick={() => setIsVisible(false)}
            className="bg-black text-white hover:bg-black/90"
          >
            ACCEPT COOKIES
          </Button>
          <Button 
            variant="link" 
            className="text-black hover:text-black/90 underline"
            onClick={() => setIsVisible(false)}
          >
            MANAGE COOKIES
          </Button>
        </div>
      </div>
    </div>
  )
}

