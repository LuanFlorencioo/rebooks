"use client"

import { ChildrenProps } from "@/patterns/children"
import { Provider } from 'react-redux'
import { store } from '@/store'

export default function ReduxProvider({ children }: ChildrenProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
