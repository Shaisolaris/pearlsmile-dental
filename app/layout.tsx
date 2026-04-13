import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'PearlSmile Dental | Premium Dental Care',
  description: 'Experience dentistry reimagined. Advanced technology, gentle care, and results that speak for themselves. Book your appointment today.',
  icons: {
    icon: [
      {
        url: '/pearlsmile-dental/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pearlsmile-dental/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/pearlsmile-dental/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/pearlsmile-dental/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        
      </body>
    </html>
  )
}
