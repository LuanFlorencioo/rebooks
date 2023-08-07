import { Card } from "@/components";
import { bookData } from "@/data";

export default function Home() {
  return (
    <section className="w-full">
      <ul className="w-full flex flex-wrap gap-10">
        {
          bookData.map(book => <Card {...book} />)
        }
      </ul>
    </section>
  )
}
