import { Rajdhani, Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/reset.css";
import "../styles/globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Mask Vessels",
  description: "Esse site tem o propósito de ser uma landing page para o jogo Mask Vessels.",
  keywords: "Mask Vessels, Game, Landing Page, Play"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${rajdhani.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
