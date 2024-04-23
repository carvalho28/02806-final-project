'use client'

import { Container } from '@/components/Container'
import Script from 'next/script'

export function Part2() {
  return (
    <section
      id="part2"
      className="sm:py-15 flex items-center justify-center py-10"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Part 2: ...
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi n
            accusamus doloribus blanditiis unde facere ab tenetur eius maiores
            voluptas iure laboriosam aut sit iste et natus veritatis, nemo
            asperiores reprehenderit.
          </p>
        </div>
        <div
          className="flourish-embed flourish-map mt-5 border-2 border-red-200"
          data-src="visualisation/17679681"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
      </Container>
    </section>
  )
}
