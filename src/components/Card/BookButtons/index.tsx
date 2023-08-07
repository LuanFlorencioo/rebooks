"use client"

import { addNewFavorite, favoriteSelect, removeFavoriteById } from "@/store/Favorite.store";
import { BsCart3 } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { bookData } from "@/data";
import { addBookInCart, cartSelect } from "@/store/Cart.store";

interface BookButtonsProps {
  bookId: number
}

export default function BookButtons({ bookId }: BookButtonsProps) {
  const dispatch = useDispatch()
  const { myFavorites } = useSelector(favoriteSelect)
  const { myCart } = useSelector(cartSelect)
  const currentBook = bookData.find(({ id }) => id === bookId)!

  const favoriteBook = () => {
    dispatch(addNewFavorite(currentBook))
  }

  const disfavorBook = () => {
    dispatch(removeFavoriteById(bookId))
  }

  const pushInCart = () => {
    dispatch(addBookInCart(currentBook))
  }

  const isFavoriteBook = myFavorites.includes(currentBook)
  const isInCart = myCart.some(({book}) => book === currentBook);

  return (
    <>
      <button
        className="w-max h-max p-1 text-lg text-red-500 hover:text-red-600"
        onClick={isFavoriteBook ? disfavorBook : favoriteBook}
      >
        {isFavoriteBook ? <FaHeart /> : <FaRegHeart />}
      </button>

      {
        !isInCart && (
          <button
            className="w-max h-max py-1 px-2 bg-brand-200 rounded flex items-center gap-1 font-bold text-sm text-brand-700 hover:bg-brand-300 dark:bg-brand-800 dark:text-brand-300"
            onClick={pushInCart}
          >
            Por ao carrinho <BsCart3 />
          </button>
        )
      }
    </>
  )
}
