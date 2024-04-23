'use client'

import { Container } from '@/components/Container'
import Script from 'next/script'

export function Graphs() {
  return (
    <section
      id="graphs"
      className="sm:py-15 flex items-center justify-center py-10"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="graphs-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Graphs
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facilis nisi aliquam amet illum inventore sunt, possimus sed
            laboriosam asperiores ut quaerat rerum rem tenetur aut, animi cumque
            nihil! Enim!
          </p>
        </div>
        {/*  GDP per capita vs. renewable energy utilization, 2000-2022 */}
        <div
          className="flourish-embed flourish-chart border-2 border-red-200"
          data-src="visualisation/17680141"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        {/*  PM 10 concentration in Denmark*/}
        <div
          className="flourish-embed flourish-chart border-2 border-red-200"
          data-src="visualisation/17651377"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        {/* Energy consumption */}
        <div
          className="flourish-embed flourish-chart border-2 border-red-200"
          data-src="visualisation/17507459"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        {/*  Greenhouse emissions */}
        <div
          className="flourish-embed flourish-chart border-2 border-red-200"
          data-src="visualisation/17505530"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        {/* CO2 emissions per capita */}
        <div
          className="flourish-embed flourish-chart border-2 border-red-200"
          data-src="visualisation/17669871"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        {/* Denmark GDP: */}
        <div
          className="flourish-embed flourish-chart border-2 border-red-200"
          data-src="visualisation/17505568"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
      </Container>
    </section>
  )
}
