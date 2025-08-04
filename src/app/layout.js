import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rovera",
  description: "Rovera is a company from India that specializes in autonomous rovers...",

  keywords: "Rovera, autonomous rovers, drone technology, robotics, automation",
  authors: [{ name: "Rovera Team", url: "https://rovera.com" }],
  creator: "Rovera Team",
  
  icons: {
    icon: "/Logo.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white` }
      >
        https://www.rov-era.com/
        {children}
      </body>
    </html>
  );
}
