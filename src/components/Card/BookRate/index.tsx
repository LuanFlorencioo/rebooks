import { BsStarFill } from "react-icons/bs"

interface BookRateProps {
  rate: number
}

export default function BookRate({ rate }: BookRateProps) {
  return (
    <p className="font-normal text-sm flex items-center gap-1 text-zinc-950 dark:text-zinc-100">
      Avaliação: {rate} 
      <span className="text-yellow-500">
        <BsStarFill />
      </span>
    </p>
  )
}
