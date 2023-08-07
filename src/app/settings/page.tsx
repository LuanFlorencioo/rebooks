"use client"

import { BiSolidUserCircle } from "react-icons/bi";
import { BsToggleOn, BsToggleOff, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, userSelect } from "@/store/User.store";

export default function Settings() {
  const { firstName, lastName, isDarkTheme} = useSelector(userSelect)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <section className="w-full h-full p-5 rounded-lg bg-zinc-50 flex flex-col gap-5 dark:bg-zinc-950">
      <h2 className="font-bold text-3xl text-brand-700 dark:text-brand-400">
        Configurações
      </h2>

      <div className="w-full flex items-center gap-5">
        <span className="text-7xl text-zinc-500">
          <BiSolidUserCircle />
        </span>

        <p className="text-zinc-950 dark:text-zinc-100">
          {firstName}
        </p>

        <p className="text-zinc-950 dark:text-zinc-100">
          {lastName}
        </p>
      </div>

      <div>
        <p className="text-zinc-950 dark:text-zinc-100">
          Thema preferido:
        </p>

        <span className="flex items-center gap-5">
          <span className="text-zinc-950 dark:text-zinc-100">
            <BsSunFill />
          </span>

          <button className="text-5xl text-zinc-950 dark:text-zinc-100" onClick={changeTheme}>
            {
              isDarkTheme ? <BsToggleOn /> : <BsToggleOff />
            }
          </button>

          <span className="text-zinc-950 dark:text-zinc-100">
            <BsMoonFill />
          </span>
        </span>
      </div>
    </section>
  )
}
