import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "TeaZ Portfolio",
  description: "TeaZ Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased home-hero-glow relative`}
      >

        {/* animation background */}
        <div className="signup-space">
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
          <div className="signup-stars"></div>
        </div>


        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
