import { CartButton, Container, Logo } from "@/components";

export default function Header() {
  return (
    <header className="w-full h-max px-5 py-4 bg-zinc-50 border-b-2 border-zinc-100 sticky top-0 left-0 dark:bg-zinc-950 dark:border-zinc-800">
      <Container className="flex items-center justify-between">
        <Logo />

        <CartButton />
      </Container>
    </header>
  )
}
