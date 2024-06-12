import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ReactNode } from "react";
import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head >
          <title>
              LMS CSTAD
          </title>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header>
            <NavbarComponent/>
        </header>
      <main>
          {children}
      </main>
      <footer>
          <FooterComponent/>
      </footer>


      </body>
    </html>
  )
}
