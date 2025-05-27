import { Geist, Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const noto_Sans_Georgian = Noto_Sans_Georgian({
  subsets: ["latin"],
});

export const metadata = {
  title: "PYWV - Positive Young Women Voices",
  description:
    "Positive Young Women Voices is a community based organization located in Nairobi Kenya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto_Sans_Georgian.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
