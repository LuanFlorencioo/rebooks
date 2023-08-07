interface BookPriceProps {
  price: number
}

export default function BookPrice({ price }: BookPriceProps) {
  return (
    <p className="w-full flex items-center gap-2 font-bold text-2xl text-zinc-950 dark:text-zinc-100">
      R$
      <span className="text-3xl text-brand-900 dark:text-brand-500">
        {price.toLocaleString('pt-br')}
      </span>
    </p>
  )
}
