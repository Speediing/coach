import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-16 px-4 bg-[#f6f1ea]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={product.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="aspect-square relative mb-4 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-normal mb-1">{product.name}</h3>
              <p className="text-lg font-bold">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

