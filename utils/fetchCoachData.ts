import { load } from 'cheerio';

export interface CoachProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  href: string;
}

export async function fetchCoachData(): Promise<CoachProduct[]> {
  try {
    const response = await fetch('https://ca.coach.com/en', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const $ = load(html);
    const nextDataScript = $('#__NEXT_DATA__').html();

    if (!nextDataScript) {
      throw new Error('NEXT_DATA not found');
    }

    const nextData = JSON.parse(nextDataScript);
    
    // Extract products from nextData
    const products = nextData.props.pageProps.initialState.product.products || [];

    return products.map((product: any) => ({
      id: product.id,
      name: product.name,
      price: product.price.formatted,
      image: product.image.src,
      href: product.url
    }));
  } catch (error) {
    console.error('Error fetching Coach data:', error);
    return [];
  }
}

