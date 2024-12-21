import { RocketIcon } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/">
        <div className="flex items-center gap-2">
            <RocketIcon className="h-6 w-6 text-blue-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Todo App
            </h1>
        </div>
      </Link>
    </header>
  )
}

