import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product-grid";

async function getHomeData() {
  const baseUrl = "https://apis-lime.vercel.app";

  const res = await fetch(`${baseUrl}/api/home`);
  if (!res.ok) throw new Error("Failed to fetch home data");
  return res.json();
}

export default async function Page() {
  const homeData = await getHomeData();

  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-[calc(100vh-120px)] min-h-[600px]">
        <Image
          src={homeData.hero.image}
          alt="Coach holiday collection"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-2xl">
            {homeData.hero.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {homeData.hero.buttons.map((button: any, index: any) => (
              <Button
                key={index}
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-gray-100"
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid products={homeData.products} />
    </>
  );
}
