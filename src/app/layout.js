import "./globals.css";
import { Aside } from "@/components/Aside";

export const metadata = {
  title: "Code Connect",
  description: "A social network for devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <Aside />
          {children}
        </main>
      </body>
    </html>
  );
}
