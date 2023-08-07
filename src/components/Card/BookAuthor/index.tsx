interface BookAuthorProps {
  author: string
}

export default function BookAuthor({ author }: BookAuthorProps) {
  return (
    <small className="font-light text-xs text-zinc-950 dark:text-zinc-100">
      {author}
    </small>
  )
}
