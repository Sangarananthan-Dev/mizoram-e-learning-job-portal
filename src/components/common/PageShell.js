import Footer from "@/components/common/Footer";
import Navbar from "@/components/nav/Navbar";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <Navbar />
      <main className="pb-16 pt-6 sm:pt-8">{children}</main>
      <Footer />
    </div>
  );
}
