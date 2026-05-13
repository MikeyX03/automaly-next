import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Automaly.pl — Automatyzacja i AI dla polskich firm',
  description: 'Wdrażamy AI i automatyzacje do polskich firm. Wyższa efektywność, niższe koszty, realny wzrost.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}