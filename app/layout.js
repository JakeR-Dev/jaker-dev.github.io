import { Inter, Space_Grotesk } from "next/font/google";
import Body from './components/body/body';
import Header from './components/header/header';
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Jake Ryan - Senior Developer",
  description: "Polished interfaces backed by reliable engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Body className={`${inter.variable} ${spaceGrotesk.variable} antialiased relative w-screen h-screen bg-charcoal`} >
        <Header />
        <main className="main relative h-full z-0 overflow-auto" style={{opacity: 0}}>
          {children}
        </main>
      </Body>
    </html>
  );
}
