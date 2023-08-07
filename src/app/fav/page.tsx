import { ListFav } from "@/components";

export default function Fav() {
  return (
    <section className="w-full h-full p-5 rounded-lg bg-zinc-50 flex flex-col gap-5 dark:bg-zinc-950">
      <h2 className="font-bold text-3xl text-brand-700 dark:text-brand-400">
        Lista de Favoritos
      </h2>

      <ListFav />
    </section>
  )
}
