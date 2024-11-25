import { NextResponse } from "next/server";

export async function GET() {
  const layoutData = {
    topBar: {
      country: "CANADA",
      links: [
        { text: "Coach", href: "#", active: true },
        { text: "Coachtopia", href: "#", active: false },
      ],
    },
    mainNav: [
      { text: "WOMEN", href: "#" },
      { text: "MEN", href: "#" },
      { text: "GIFTS", href: "#", highlight: true },
      { text: "SHOP BY", href: "#" },
      { text: "SALE", href: "#" },
    ],
    cartItemCount: 0,
  };

  return NextResponse.json(layoutData);
}
