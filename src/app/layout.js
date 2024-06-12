import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "This is for sunday school attendance",
  description: "This is a project that i want to use to enhance my Next skill",
};

export default function RootLayout({ children }) {
  return (
        <html lang="en" className="bg-gradient-to-r from-blue-400 to-indigo-500">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
