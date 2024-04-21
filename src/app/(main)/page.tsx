import { Hero } from '@/components/Hero'
import { Part2 } from '@/components/Part2'
import { Part1 } from '@/components/Part1'
import { Introduction } from '@/components/Introduction'
import { Us } from '@/components/Us'
import { References } from '@/components/References'
import { Conclusion } from '@/components/Conclusion'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Part1 />
      <Part2 />
      <Conclusion />
      <References />
      <Us />
    </>
  )
}
