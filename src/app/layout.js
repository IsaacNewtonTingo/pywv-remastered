import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { AppContextProvider } from "./Context/AppContext";

export const metadata = {
  title: "PYWV - Positive Young Women Voices",
  description:
    "Positive Young Women Voices is a community based organization located in Nairobi Kenya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
