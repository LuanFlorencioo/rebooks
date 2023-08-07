import { BookData } from "@/data";
import BookImage from "./BookImage";
import BookAuthor from "./BookAuthor";
import BookTitle from "./BookTitle";
import BookRate from "./BookRate";
import BookPrice from "./BookPrice";
import BookButtons from "./BookButtons";

export default function Card({
  id,
  author,
  image,
  price,
  rate,
  title,
}: BookData) {
  return (
    <li key={id} className="w-[400px] h-[275px] flex justify-between">
      <BookImage coverImage={image} />

      <div className="w-[200px] h-full p-2 bg-zinc-50 rounded-r-lg flex flex-col justify-between dark:bg-zinc-950">
        <div className="w-full flex flex-col gap-1">
          <BookAuthor author={author} />

          <BookTitle title={title} />

          <BookRate rate={rate} />
        </div>

        <div className="w-full flex flex-wrap justify-between gap-x-1 gap-y-2">
          <BookPrice price={price} />

          <BookButtons bookId={id} />
        </div>
      </div>
    </li>
  )
}
