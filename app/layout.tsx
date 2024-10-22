"use client";
import { Arsenal } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import Loader from "./components/page-loader/Loader";
import { motion, AnimatePresence } from "framer-motion";

const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval); // Stop increment at 100%
        setTimeout(() => setFinished(true), 500); // Add delay for smooth transition
        return 100;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <body className={`${arsenal.className} antialiased`}>
        <AnimatePresence>
          {!finished ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, width: `${percent}%` }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
            >
              <Loader percent={percent} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Navbar />
              {children}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
