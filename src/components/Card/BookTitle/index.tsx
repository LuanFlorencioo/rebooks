interface BookTitleProps {
  title: string
}

export default function BookTitle({ title }: BookTitleProps) {
  return (
    <h3 className="font-bold text-base uppercase text-zinc-950 dark:text-zinc-100">
      {title}
    </h3>
  )
}
