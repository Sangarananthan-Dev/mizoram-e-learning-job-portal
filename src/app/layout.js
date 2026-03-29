import "./globals.css";

export const metadata = {
  title: {
    default: "Mizoram SkillLink",
    template: "%s | Mizoram SkillLink",
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
