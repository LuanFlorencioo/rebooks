import Image from "next/image"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { BookData } from "@/data"
import { useDispatch } from "react-redux"
import { cleanBookInCart, decrementCount, incrementCount } from "@/store/Cart.store"

interface ProductProps {
  book: BookData
  count: number
}

export default function Product({ book, count }: ProductProps) {
  const dispatch = useDispatch();

  const cleanProduct = () => {
    dispatch(cleanBookInCart(book.id));
  }

  const decrement = () => {
    dispatch(decrementCount(book.id))
  }

  const increment = () => {
    dispatch(incrementCount(book.id))
  }

  return (
    <li key={book.id} className="w-full bg-zinc-100 flex gap-3 dark:bg-zinc-800">
      <figure className="w-[100px] h-[150px] flex items-center">
        <Image
          src={book.image}
          alt="book"
          width={800}
          height={800}
          className="object-contain"
        />
      </figure>

      <div className="w-full flex flex-col gap-2">
        <p className="text-zinc-950 dark:text-zinc-50">
          {book.title}
        </p>

        <p className="text-zinc-950 dark:text-zinc-50">
          {book.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
        </p>

        <div className="w-full flex items-center">
          <button
            className="w-max h-max p-2 bg-zinc-200 rounded-l-lg hover:bg-zinc-300 disabled:opacity-10"
            onClick={decrement}
            disabled={count === 1 && true}
          >
            <AiOutlineMinus />
          </button>

          <p className="w-[50px] text-center text-zinc-950 dark:text-zinc-50">
            {count}
          </p>

          <button
            className="w-max h-max p-2 bg-zinc-200 rounded-r-lg hover:bg-zinc-300 disabled:opacity-10"
            onClick={increment}
            disabled={count === 5 && true}
          >
            <AiOutlinePlus />
          </button>
        </div>

        <button
          className="w-max text-xs text-zinc-400 hover:text-red-400"
          onClick={cleanProduct}
        >
          Remover do carrinho
        </button>
      </div>
    </li>
  )
}
