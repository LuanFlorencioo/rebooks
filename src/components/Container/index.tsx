import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = ComponentProps<"div">

export default function Container(props: ContainerProps) {
  const styled = twMerge("w-full max-w-7xl mx-auto", props.className)

  return (
    <div {...props} className={styled}>
      {props.children}
    </div>
  )
}
