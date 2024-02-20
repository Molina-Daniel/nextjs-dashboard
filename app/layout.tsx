import { inter } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="flex items-center justify-center py-10">
          Hecho con ❤️ por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
