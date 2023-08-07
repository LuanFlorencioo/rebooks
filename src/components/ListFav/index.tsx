"use client"

import { favoriteSelect, removeFavoriteById } from "@/store/Favorite.store"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { BiSolidTrashAlt } from "react-icons/bi"

export default function ListFav() {
  const { myFavorites } = useSelector(favoriteSelect)
  const dispatch = useDispatch()
  const disfavorBook = (id: number) => () => {
    dispatch(removeFavoriteById(id))
  }

  return myFavorites.length > 0 
    ? (
      <ul className="w-full flex flex-col bg-zinc-100 divide-y-2 divide-zinc-50 dark:bg-zinc-900 dark:divide-zinc-950">
        {
          myFavorites.map((bookFav) => (
            <li
              key={bookFav.id}
              className="w-full py-1 pr-5 flex items-center justify-between"
            >
              <div className="w-max flex items-center gap-5">
                <Image
                  src={bookFav.image}
                  alt="book image"
                  width={800}
                  height={800}
                  className="w-[50px]"
                />

                <p className="text-zinc-950 dark:text-zinc-200">
                  {bookFav.title}
                </p>

                <small className="font-light text-xs text-zinc-500 dark:text-zinc-400">
                  {bookFav.author}
                </small>
              </div>

              <button className="text-zinc-950 dark:text-zinc-100" onClick={disfavorBook(bookFav.id)}>
                <BiSolidTrashAlt />
              </button>
            </li>
          ))
        }
      </ul>
    )
    : (
      <p className="font-medium text-brand-200">
        A lista está vazia...
      </p>
    )
}
