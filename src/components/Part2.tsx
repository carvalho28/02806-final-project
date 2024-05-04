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
            Our fact-checking journey delves into Denmark&apos;s performance
            across key environmental metrics in recent years, emphasizing
            greenhouse gas and carbon dioxide (CO<sub>2</sub>) emissions, air
            quality indicators, and the distribution of energy production and
            consumption between renewable and non-renewable sources. Let&apos;s
            examine how Denmark&apos;s efforts have evolved over the past
            quarter-century.
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
            This visualization reveals a notable decrease in Denmark's
            greenhouse gas emissions over the past 25 years. It's important to
            note that these emissions encompass more than just CO<sub>2</sub>;
            they include any gases that absorb infrared radiation emitted from
            the Earth&apos;s surface, contributing to the greenhouse effect.
            This includes carbon dioxide, methane, and even water vapor, with
            our data covering these gases except for CO<sub>2</sub> from
            biomass.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The downward trend in these emissions reflects Denmark's recognition
            of environmental issues and its proactive measures to address them.
            This success marks a significant stride towards cleaner air and a
            sustainable future.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Decomposing the Emissions
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            A deeper look into the emissions reveals that methane, significantly
            influenced by farming and agriculture (40%), fossil fuels (35%), and
            waste (20%), along with CO<sub>2</sub> predominantly from the
            burning of fossil fuels (over 90%), are the primary contributors. By
            reducing reliance on fossil fuels for daily energy needs, Denmark
            has effectively curbed its greenhouse gas emissions.
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
            These charts show the dramatic transformation in Denmark&apos;s
            energy infrastructure. Over the past twenty years, the share of
            fossil fuels in Denmark&apos;s primary energy sources has nearly
            halved—a testament to the country&apos;s commitment to
            sustainability. The correlation between the reduction in fossil fuel
            usage and the decrease in greenhouse gas emissions is evident,
            highlighting a major driver behind the positive environmental trends
            observed.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Exploring the Shift
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            How has Denmark achieved such a substantial reduction in its
            dependency on fossil fuels? Is it a result of decreased overall
            energy consumption, or has there been a significant shift towards
            green energy? These are questions we&apos;ll explore as we analyze
            the changes in how Denmark sources its energy.
          </p>
        </div>
      </Container>
    </section>
  )
}
