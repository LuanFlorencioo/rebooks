import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full max-w-xs h-40 p-5 bg-zinc-50 rounded-lg flex flex-col gap-2 dark:bg-zinc-950">
      <Link href="/" className="text-zinc-950 dark:text-zinc-100">
        Home
      </Link>

      <Link href="fav" className="text-zinc-950 dark:text-zinc-100">
        Favoritos
      </Link>

      <Link href="settings" className="text-zinc-950 dark:text-zinc-100">
        Configuração
      </Link>
    </nav>
  )
}
