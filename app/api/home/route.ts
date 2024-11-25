import { NextResponse } from "next/server";

export async function GET() {
  const homeData = {
    hero: {
      image:
        "https://cms.coach.com/i/coach/20241122-m1-desktop?&w=1920&sm=aspect&aspect=2880:1458&fmt=webp&$qlt_med$",
      title: "Gifts to style the season.",
      buttons: [
        { text: "Shop Bestselling Gifts", href: "#" },
        { text: "Shop All Bags", href: "#" },
      ],
    },
    products: [
      {
        id: "CM544",
        name: "Lana Shoulder Bag",
        price: "C$595",
        image:
          "https://cms.coach.com/i/coach/20241122-m1-ecom1?&w=474&fmt=webp&$qlt_med$",
        href: "/en/products/lana-shoulder-bag/CM544-B4%2FBK.html",
      },
      {
        id: "CB990",
        name: "Leah Loafer",
        price: "C$240",
        image:
          "https://cms.coach.com/i/coach/20241122-m1-ecom2?&w=474&fmt=webp&$qlt_med$",
        href: "/en/products/leah-loafer/CB990-BLK.html",
      },
      {
        id: "77840",
        name: "Cherry Bag Charm",
        price: "C$120",
        image:
          "https://cms.coach.com/i/coach/20241122-m1-ecom3?&w=474&fmt=webp&$qlt_med$",
        href: "/en/products/cherry-bag-charm/77840-B4P1Y.html",
      },
      {
        id: "CU826",
        name: "Horse And Carriage Cashmere Muffler",
        price: "C$270",
        image:
          "https://cms.coach.com/i/coach/20241122-m1-ecom4?&w=474&fmt=webp&$qlt_med$",
        href: "/en/products/horse-and-carriage-cashmere-muffler/CU826-CHK.html",
      },
    ],
  };

  return NextResponse.json(homeData);
}
