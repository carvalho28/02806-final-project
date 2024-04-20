import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative sm:pb-10 sm:pt-20">
      <BackgroundImage className="-top-25 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl lg:max-w-4xl lg:px-12">
          <h1 className="text-center font-display text-5xl font-bold tracking-tighter text-red-600 sm:text-5xl">
            Green Shift: Denmark's Energy Path
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-red-900">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae architecto in repellendus nihil vel, qui recusandae
              blanditiis enim ipsum iusto optio ullam voluptatem est earum animi
              voluptate, sit dolorum! Voluptatibus?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              sunt, odit necessitatibus maiores inventore amet vero officia
              nisi, qui iusto, commodi aliquam iste dignissimos minima
              accusantium tempora repellat molestias quia.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
