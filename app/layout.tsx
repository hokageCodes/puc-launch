import { Arsenal } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// Import Arsenal font from Google
const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Paul Usoro & Co - Law Firm",
  description: "Leading Law Firm in Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${arsenal.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
