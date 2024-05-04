'use client'

import { Container } from '@/components/Container'
import Script from 'next/script'

export function Part1() {
  return (
    <section
      id="part1"
      className="sm:py-15 flex items-center justify-center scroll-smooth py-10"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Understanding Denmark
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            facilis nisi aliquam amet illum inventore sunt, possimus sed
            laboriosam asperiores ut quaerat rerum rem tenetur aut, animi cumque
            nihil! Enim!
          </p>
        </div>
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            The air we breathe
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we navigate through the landscape of Denmark&apos;s environmental
            policies, our initial focus is on the air that Danes breathe every
            day. The cornerstone of our analysis is the PM10 data, a critical
            indicator of air quality. PM10 particles, with a diameter of less
            than 10 micrometers, are fine enough to bypass the body&apos;s
            defenses, penetrating deep into the lungs and potentially causing a
            range of health problems.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            The data for our exploration comes from a monitoring station in
            Risø, noted for having the highest levels of pollution across
            Denmark. This particular station provides a stark baseline from
            which to measure the impact of national efforts to improve air
            quality.
          </p>
        </div>

        {/*  PM 10 concentration in Denmark*/}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17651377"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        <div className="mx-auto max-w-3xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Our ten-year review reveals a narrative of resilience and progress.
            Despite the inherent ebbs and flows in the PM10 data, a clear trend
            emerges: a significant and sustained reduction in particle
            concentration. This downward trajectory is not just a number on a
            chart; it represents a breath of fresh air for all Danes, reducing
            health risks and enhancing quality of life.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            This improvement in air quality is a testament to Denmark's rigorous
            environmental policies and its commitment to sustainable practices.
            Each step toward cleaner air is also a step toward reducing the
            broader environmental impact, including greenhouse gas emissions.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we transition from particulate pollution to greenhouse gases,
            it's crucial to recognize how interconnected these issues are. The
            strategies that help scrub the air of particulates also contribute
            to Denmark&apos;s efforts in curbing CO2 emissions. As we continue
            our exploration, we'll see how these efforts complement each other,
            painting a comprehensive picture of Denmark&apos;s environmental
            strategy.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Cooling the climate
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Another pivotal aspect of Denmark's environmental strategy is its
            management of greenhouse gas emissions, which serves as a critical
            barometer of sustainability. Over the past 10 years, Denmark has
            shown a commendable decrease in these emissions, as illustrated in
            our next visualization.
          </p>
        </div>
        {/*  Greenhouse emissions */}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17505530"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-3xl lg:mx-0">...</div>
      </Container>
    </section>
  )
}
