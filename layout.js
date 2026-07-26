import "./globals.css";

export const metadata = {
  title: "HerbalBridge | Mugwort Products & OEM/ODM Supplier",
  description:
    "Explore mugwort sachets, foot soak packs, herbal heat packs and custom OEM/ODM solutions for global wholesale buyers.",
  keywords: [
    "mugwort products",
    "mugwort sachet",
    "herbal foot soak",
    "herbal heat pack",
    "OEM herbal products",
    "China supplier"
  ],
  openGraph: {
    title: "HerbalBridge | Mugwort Products & OEM/ODM Supplier",
    description:
      "Traditional herbal inspiration, flexible product development, and practical support for global buyers.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
