'use client'

import { Container } from '@/components/Container'
import Script from 'next/script'

export function Part2() {
  return (
    <section
      id="part2"
      className="sm:py-15 flex items-center justify-center scroll-smooth py-10"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Development in the last years
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            delectus ipsum quas unde, iure reiciendis doloribus officia facilis
            accusamus nemo veniam praesentium? Eaque magnam esse dolorem
            recusandae harum est voluptate.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Greenhouse Gas Emissions Trends
          </h3>
        </div>
        <div
          className="flourish-embed flourish-map mt-5 border-2 border-red-200"
          data-src="visualisation/17679681"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-3xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptatum ullam rem voluptatibus non, dolores quaerat assumenda id
            nobis libero consequatur pariatur magni, impedit nulla voluptate
            aut, tempore exercitationem ab?
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo
            quia error vitae dolor ipsum facere amet! Incidunt aut
            exercitationem nostrum voluptates perferendis cumque rerum tenetur
            adipisci quasi, delectus non.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Decomposing the Emissions
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            voluptates inventore hic at dignissimos repellat aut quisquam ex?
            Animi eos cupiditate architecto labore repudiandae iste ipsa eius
            sunt minus unde.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Fossil Fuel Consumption and Energy Transition
          </h3>
        </div>
        <div
          className="flourish-embed flourish-map mt-5 border-2 border-red-200"
          data-src="visualisation/17827873"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-3xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            illum explicabo, voluptate obcaecati cum itaque consectetur nihil
            omnis iste pariatur! Voluptate amet incidunt odio. Assumenda
            repellendus esse ab vero quisquam.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Exploring the Shift
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            labore nemo ad! Quam, suscipit architecto soluta impedit voluptate
            id explicabo ut similique, nihil ad odit officia sit expedita fugiat
            rem!
          </p>
        </div>
      </Container>
    </section>
  )
}
