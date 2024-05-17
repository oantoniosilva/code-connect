import { Prompt } from "next/font/google"

import "./globals.css";
import { Aside } from "@/components/Aside";

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  title: "Code Connect",
  description: "A social network for devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={prompt.className}>
      <body>
        <main className="container">
          <Aside />
          {children}
        </main>
      </body>
    </html>
  );
}
