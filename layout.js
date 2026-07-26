import "./globals.css";

export const metadata = {
  title: "Custom Herbal Sachets & Private Label Supply | HerbalBridge",
  description:
    "Source custom herbal sachets from China with private label, custom filling, fabric and packaging support for wholesale buyers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
