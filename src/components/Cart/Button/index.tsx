import { useDispatch } from "react-redux"
import { IoMdClose } from "react-icons/io"
import { handleShowCart } from "@/store/Cart.store";

export default function Button() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(handleShowCart())}
      className="text-2xl text-zinc-950 dark:text-zinc-50"
    >
      <IoMdClose />
    </button>
  )
}
