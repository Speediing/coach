import Image from "next/image"
import Link from "next/link"
import { Heart, Search, ShoppingBag, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center gap-4">
          <button className="text-sm flex items-center gap-1">
            🇨🇦 CANADA
          </button>
          <button className="text-sm flex items-center gap-1">
            Stores
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm">
            Coach
          </Link>
          <Link href="#" className="text-sm">
            Coachtopia
          </Link>
        </div>
      </div>

      {/* Main header */}
      <header className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex-1">
          <h1 className="text-2xl font-serif tracking-wider">COACH</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="hover:underline">WOMEN</Link>
          <Link href="#" className="hover:underline">MEN</Link>
          <Link href="#" className="hover:underline text-green-700">GIFTS</Link>
          <Link href="#" className="hover:underline">SHOP BY</Link>
          <Link href="#" className="hover:underline">SALE</Link>
        </nav>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="hidden sm:flex items-center border-b">
            <input
              type="search"
              placeholder="Search"
              className="px-2 py-1 outline-none"
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
              0
            </span>
          </button>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative w-full h-[calc(100vh-120px)] min-h-[600px]">
        <Image
          src="https://cms.coach.com/i/coach/20241122-m1-desktop?&w=1920&sm=aspect&aspect=2880:1458&fmt=webp&$qlt_med$"
          alt="Coach holiday collection"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-2xl">
            Gifts to style the season.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100">
              Shop Bestselling Gifts
            </Button>
            <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100">
              Shop All Bags
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />
    </div>
  )
}

