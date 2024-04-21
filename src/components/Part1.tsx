'use client'

import { Container } from '@/components/Container'
import Script from 'next/script'

export function Part1() {
  return (
    <section
      id="part1"
      className="sm:py-15 flex items-center justify-center py-10"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Part 1: ...
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facilis nisi aliquam amet illum inventore sunt, possimus sed
            laboriosam asperiores ut quaerat rerum rem tenetur aut, animi cumque
            nihil! Enim!
          </p>
        </div>
        <div
          className="flourish-embed flourish-bar-chart-race mt-5"
          data-src="visualisation/17482383"
        />
        <Script
          src="https://public.flourish.studio/resources/embed.js"
          strategy="afterInteractive"
        />
      </Container>
    </section>
  )
}
