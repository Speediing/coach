import { fetchCoachData } from '@/utils/fetchCoachData';
import Image from 'next/image';

export default async function CoachProductsPage() {
  const { products } = await fetchCoachData();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Coach Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border rounded-lg p-4">
            <div className="aspect-square relative mb-4">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

