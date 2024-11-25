import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const footerSections = [
  {
    title: "CUSTOMER CARE",
    links: ["Feedback", "Contact Us", "Track Order", "Shipping Details & Fees", "Returns", "Pricing Policy", "Unsubscribe", "FAQ"]
  },
  {
    title: "SERVICES",
    links: ["Circular Services", "Lifetime Leather Care", "Product Care", "Repairs", "Coach (Re)Loved Exchange", "More Ways to Shop", "Gift Services"]
  },
  {
    title: "SUSTAINABILITY",
    links: ["Coachtopia", "Crafted to Last", "Coach (Re)Loved", "Sustainable Materials", "Tapestry Corporate Responsibility"]
  },
  {
    title: "COACHTOPIA",
    links: ["About Us", "Made Circular", "Our Materials", "Our Services", "Our Impacts", "Connect Your Product", "Our Community"]
  },
  {
    title: "ABOUT US",
    links: ["Coach Story", "Coach Foundation", "Careers", "Tapestry", "Investor Relations"]
  }
]

const legalLinks = [
  "TERMS OF USE",
  "PRIVACY POLICY",
  "CA TRANSPARENCY & UK MODERN SLAVERY ACT",
  "MANAGE COOKIES",
  "BRAND PROTECTION",
  "ACCESSIBILITY",
  "CUSTOMER CARE",
  "FEEDBACK"
]

export function Footer() {
  return (
    <footer className="bg-white text-black pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="text-sm hover:underline">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <form className="mb-6">
              <h3 className="font-bold mb-4">SIGN UP FOR EMAILS</h3>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="flex-grow"
                />
                <Button type="submit" className="ml-2 bg-black text-white hover:bg-gray-800">
                  SIGN UP
                </Button>
              </div>
            </form>
            <p className="text-sm mb-4">
              You are signing up to receive Coach and Coachtopia emails. 
              You can withdraw your consent at any time.
            </p>
            <p className="text-sm mb-6">
              Read our <Link href="#" className="underline">Privacy Policy</Link> or <Link href="#" className="underline">Contact Us</Link> for more details.
            </p>
            <div className="flex space-x-4 mb-6">
              <Link href="#" aria-label="Instagram"><Instagram /></Link>
              <Link href="#" aria-label="Facebook"><Facebook /></Link>
              <Link href="#" aria-label="Twitter"><Twitter /></Link>
              <Link href="#" aria-label="YouTube"><Youtube /></Link>
            </div>
          </div>
        </div>
        <div className="border-t pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {legalLinks.map((link) => (
              <Link key={link} href="#" className="text-xs hover:underline">
                {link}
              </Link>
            ))}
          </div>
          <p className="text-center text-xs">
            © 2024 COACH. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}

