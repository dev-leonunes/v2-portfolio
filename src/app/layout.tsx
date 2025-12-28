import "./globals.css";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
