import './globals.css';

export const metadata = {
  title: 'Omar Wallet',
  description: 'Personal wallet app ready for Vercel'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
