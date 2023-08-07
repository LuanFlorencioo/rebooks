import { ChildrenProps } from "@/patterns/children";
import { Container, Nav } from "..";

export default function Main({ children }: ChildrenProps) {
  return (
    <main className="w-full h-full py-10 px-5">
      <Container className="flex h-full justify-between gap-10">
        <Nav />

        {children}
      </Container>
    </main>
  )
}
