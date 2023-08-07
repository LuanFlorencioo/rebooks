import Image from "next/image"

interface BookImageProps {
  coverImage: string
}

export default function BookImage({ coverImage }: BookImageProps) {
  return (
    <Image
      src={coverImage}
      alt={"book-cover"}
      width={200}
      height={275}
      priority
      className="rounded-l-lg"
    />
  )
}
