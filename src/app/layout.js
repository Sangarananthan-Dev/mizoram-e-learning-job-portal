import "./globals.css";

export const metadata = {
  title: {
    default: "Zawlbuk",
    template: "%s | Zawlbuk",
  },
  description:
    "Learn local. Work global. A Mizoram skill development and freelance platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
