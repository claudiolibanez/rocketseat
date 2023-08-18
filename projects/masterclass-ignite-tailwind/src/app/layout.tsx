import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/Sidebar'

import '@/styles/globals.css'

type RootLayoutProps = {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-template">
          <Sidebar />
          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
