import type { Metadata } from 'next'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import ProviderLayout from '@/components/ProviderLayout'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLOG',
  description: 'FRONT-END TEST 2023',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ProviderLayout>{children}</ProviderLayout>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
