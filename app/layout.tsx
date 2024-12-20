import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Search, ShoppingBag, User, MapPin } from "lucide-react";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coach",
  description: "Luxury fashion brand",
};

async function getLayoutData() {
  const baseUrl = "https://apis-lime.vercel.app";

  const res = await fetch(`${baseUrl}/api/layout`);
  if (!res.ok) throw new Error("Failed to fetch layout data");
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layoutData = await getLayoutData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Top bar */}
          <div className="flex justify-center items-center px-4 py-2 border-b relative">
            <div className="absolute left-4 flex items-center gap-4">
              <button className="text-sm flex items-center gap-1">
                <span className="mr-1">🇨🇦</span> {layoutData.topBar.country}
              </button>
              <button className="text-sm flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Stores
              </button>
            </div>
            <div className="flex items-center gap-8">
              {layoutData.topBar.links.map((link: any, index: any) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-sm ${
                    link.active
                      ? "font-medium border-b-2 border-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Main header */}
          <header className="flex flex-col items-center px-6 py-4 gap-6">
            <Link href="/" className="block">
              <svg
                width="114"
                height="14"
                viewBox="0 0 252 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo"
                role="presentation"
              >
                <path
                  d="M92.453 4.594C87.382 1.701 80.68.084 73.55.084c-7.217 0-13.919 1.617-18.902 4.51-3.695 2.213-5.843 5.618-5.843 9.447 0 3.83 2.148 7.234 5.843 9.447 5.07 2.894 11.77 4.51 18.902 4.51 7.217 0 13.92-1.616 18.903-4.51 3.694-2.213 5.842-5.617 5.842-9.447 0-3.83-2.147-7.234-5.843-9.447zm-18.989 22.13c-4.553 0-12.2-2.64-12.2-12.682 0-8.766 6.1-12.68 12.2-12.68 8.163 0 12.974 4.765 12.974 12.68.086 8.51-4.21 12.681-12.974 12.681zM251.318 1.788V.512h-20.621v1.276h4.382v10.979h-17.271V1.788h4.468V.512H201.57v1.276h4.467v24.596h-4.467v1.277h20.706v-1.277h-4.468v-12.34h17.271v12.34h-4.382v1.277h20.621v-1.277h-4.468V1.788h4.468zM123.467.084h-.687l-21.652 26.298h-4.984v1.277h12.459v-1.277h-5.843l5.241-6.297h19.418l5.843 6.383h-5.67v1.277h25.861v-1.362h-5.756L123.467.084zm-14.435 18.639l7.991-9.788 9.193 9.787h-17.184zM35.572 3.149c-.344-.17-1.375-.851-3.094-1.532C30.588.937 27.58 0 23.714 0 17.528 0 11.771 1.192 7.561 3.32 2.578 5.785 0 9.531 0 13.956c0 9.192 8.678 13.959 25.174 13.959 4.038 0 7.561-1.022 10.483-3.066l4.983 2.64h.945V16.936h-.945l-.086.085v.085c0 .085-.86 2.468-3.093 4.851-2.062 2.213-5.843 4.851-12.028 4.851-4.125 0-7.476-1.532-9.71-4.34-1.718-2.213-2.749-5.276-2.749-8.34 0-8.256 6.444-12.681 12.459-12.681 4.123 0 7.818 1.276 10.74 3.744 2.491 2.042 3.866 4.426 4.381 6.043v.085h1.03V.509h-.944l-5.068 2.64zm152.506 0c-.343-.17-1.374-.851-3.092-1.532C183.096.937 180.088 0 176.222 0c-6.187 0-11.943 1.192-16.153 3.32-4.984 2.466-7.561 6.212-7.561 10.637 0 9.192 8.678 13.959 25.174 13.959 4.038 0 7.561-1.022 10.482-3.066l4.984 2.64h.945V16.936h-.945l-.086.085v.085c0 .085-.86 2.468-3.094 4.851-2.062 2.213-5.842 4.851-12.028 4.851-4.125 0-7.476-1.532-9.709-4.34-1.719-2.213-2.75-5.276-2.75-8.34 0-8.256 6.444-12.681 12.459-12.681 4.123 0 7.818 1.276 10.739 3.744 2.492 2.042 3.867 4.426 4.383 6.043v.085h1.031V.509h-.945l-5.07 2.64z"
                  fill="#000"
                />
              </svg>
            </Link>

            <div className="flex items-center justify-between w-full max-w-screen-lg">
              <nav className="hidden md:flex items-center gap-12 text-sm">
                {layoutData.mainNav.map((item: any, index: any) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`hover:underline ${
                      item.highlight ? "text-[#1b7c6d]" : ""
                    }`}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center">
                  <input
                    type="search"
                    placeholder="Search"
                    className="px-2 py-1 outline-none border-b w-32 focus:w-48 transition-all"
                  />
                  <Search className="w-4 h-4" />
                </div>
                <button aria-label="Wishlist">
                  <Heart className="w-5 h-5" />
                </button>
                <button aria-label="Account">
                  <User className="w-5 h-5" />
                </button>
                <button aria-label="Cart" className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {layoutData.cartItemCount}
                  </span>
                </button>
              </div>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
