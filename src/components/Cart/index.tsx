"use client"

import { useSelector } from "react-redux"
import { cartSelect } from "@/store/Cart.store"
import Button from "./Button"
import Product from "./Product";

export default function Cart() {
  const { isCartOpen, myCart } = useSelector(cartSelect);

  const totalPrice = myCart.length > 0 && myCart
    .map(({book, count}) => book.price * count)
    .reduce((p, c) => p + c)
    .toLocaleString("pt-br", {style: "currency", currency: "BRL"})

  return (
    <>
      {
        isCartOpen && (
          <div className="w-screen h-screen bg-black bg-opacity-50 fixed top-0 left-0-0">
            <div className="w-full h-full relative">
              <aside className="w-[40%] h-full p-5 bg-zinc-50 flex flex-col gap-10 absolute top-0 right-0 overflow-y-auto dark:bg-zinc-900">
                <Button />

                {
                  myCart.length > 0
                    ? (
                      <>
                        <p className="text-zinc-950 dark:text-zinc-50">
                          Preço total: {totalPrice}
                        </p>
  
                        <ul className="w-full flex flex-col divide-y-2 divide-zinc-200 dark:divide-zinc-700">
                          {
                            myCart.map((productInfo) => (
                              <Product {...productInfo} />
                            ))
                          }
                        </ul>
                      </>
                    )
                    : (
                      <p className="mt-20 bold-medium text-3xl text-brand-200">
                        Carrinho está vazio...
                      </p>
                    )
                }
              </aside>
            </div>
          </div>
        )
      }
    </>
  )
}
