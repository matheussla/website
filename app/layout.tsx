import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar, Footer, LanguageProvider } from './components'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Matheus Abreu Dev',
    template: '%s | Matheus Abreu Dev',
  },
  description: 'Matheus Abreu Portfolio',
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <LanguageProvider> {/* ✅ Wrap everything in the provider */}
          <Navbar />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}