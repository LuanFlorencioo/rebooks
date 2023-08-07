import './globals.css'
import type { Metadata } from 'next'
import { ChildrenProps } from '@/patterns/children'
import { font } from '@/patterns/font'
import ReduxProvider from '@/store/ReduxProvider'
import { Cart, Header, Main } from '@/components'

export const metadata: Metadata = {
  title: 'ReBooks',
  description: 'Books e-commerce',
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <Header />
          <Cart />
          <Main>
            {children}
          </Main>
        </ReduxProvider>
      </body>
    </html>
  )
}
