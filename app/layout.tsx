import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Nooro Todo App',
  description: 'Manage your tasks with Nooro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen grid grid-rows-[200px_auto]">
          <div className="bg-background w-full flex items-center justify-center">
            <Header />
          </div>
          <div className="bg-foreground relative">
            <main className="max-w-3xl mx-auto px-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

