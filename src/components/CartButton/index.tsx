"use client"

import { handleShowCart } from "@/store/Cart.store";
import { BsCart3 } from "react-icons/bs"
import { useDispatch } from "react-redux"

export default function CartButton() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(handleShowCart())}
      className="p-2 text-xl text-zinc-950 dark:text-zinc-50"
    >
      <BsCart3 />
    </button>
  )
}
