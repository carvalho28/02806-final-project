'use client'

import { Container } from '@/components/Container'
import Script from 'next/script'
import BeyondBorders from '@/images/beyondBorders.jpeg'
import Image from 'next/image'

export function Part2() {
  return (
    <section
      id="part2"
      className="sm:py-15 flex items-center justify-center scroll-smooth py-10"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Denmark beyond borders
          </h2>
          <div className="relative mt-10 h-96">
            <Image
              src={BeyondBorders}
              alt="Low Poly World 2021"
              layout="fill"
              objectFit="cover"
            />
            {/* caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <p className="text-sm">
                <i>World Environment Day</i>. Made by{' '}
                <a
                  href="https://dribbble.com/zoljo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Zoran Milic
                </a>{' '}
                on{' '}
                <a
                  href="https://dribbble.com/shots/2959475-Flat-Earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Dribbble
                </a>
              </p>
            </div>
          </div>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Our exploration expands as we assess Denmark&apos;s standing in
            greenhouse gas emissions and renewable energy usage against global
            and European benchmarks. This comparison highlights Denmark&apos;s
            strides towards sustainability and the ongoing challenges it faces
            in its environmental commitments.
          </p>
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Rising through the ranks
          </h3>
        </div>
        {/* race chart */}
        <div
          className="flourish-embed flourish-bar-chart-race mt-5 border-2 border-red-200"
          data-src="visualisation/17482383"
        />
        <Script
          src="https://public.flourish.studio/resources/embed.js"
          strategy="afterInteractive"
        />
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            From 2005 to 2022, Denmark&apos;s journey in renewable energy is a
            vivid tale of ascent. Initially absent from the charts, Denmark
            began its climb, fueled by ambitious policies and innovative
            technologies. As the years passed, this small nation marked its
            progress not just by numbers, but by leaps—moving from unlisted to a
            commendable seventh place among Europe&apos;s leaders in
            sustainability. It&apos;s a bold narrative of commitment, casting
            Denmark not only as a participant but as a beacon in the renewable
            energy race.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            This rise is particularly notable when seen in the context of
            overall European progress. While each nation advanced,
            Denmark&apos;s trajectory stands out for its steepness and speed. By
            2022, it outpaced many neighbors, not merely improving but
            transforming its energy landscape. This indicates not just higher
            investment rates, but more effective integration of renewable
            sources, setting Denmark apart in the ongoing quest for a greener
            future.
          </p>

          {/* Greenhouse */}
          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Contextualizing Sustainability
          </h3>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            In assessing the progress Denmark has made in reducing greenhouse
            gas emissions, it becomes essential to view these efforts within a
            wider lens, comparing its achievements not just locally, but against
            the backdrop of Europe and the world. A key indicator in this
            examination is CO<sub>2</sub> emissions per capita, which allows for
            an equitable comparison across countries by accounting for
            population size.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Initially, Denmark&apos;s per capita emissions were significantly
            higher than the European average. However, a series of targeted
            investments and forward-thinking policies have elevated Denmark to a
            position among the European leaders in reducing per capita
            emissions.
          </p>
        </div>

        {/* CO2 emissions per capita */}
        <div
          className="flourish-embed flourish-chart mt-4 border-2 border-red-200"
          data-src="visualisation/17669871"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>

        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            While Denmark has made commendable progress in Europe, its
            comparison with the global average tells a slightly different story.
            Here, Denmark approaches but does not surpass the world average, a
            figure heavily influenced by the lower emissions from third-world
            and developing countries. These nations typically have
            underdeveloped economies that contribute less to global pollution
            levels, providing a unique challenge in how we interpret "low
            emission" statistics globally.
          </p>
        </div>

        {/* interactive map greenhouse capita */}
        <div
          className="flourish-embed flourish-map mt-4 border-2 border-red-200"
          data-src="visualisation/17829385"
        >
          <Script src="https://public.flourish.studio/resources/embed.js"></Script>
        </div>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Exploring further, an interactive map visualization of Europe
            reveals intriguing trends that contrast with some of Denmark&apos;s
            perceived advancements. When the data from this map is juxtaposed
            with earlier analyses, such as the race chart of renewable energy
            shares, an unexpected pattern emerges: Denmark, along with its
            Nordic neighbors, shows higher than expected per capita greenhouse
            gas emissions. This seems paradoxical given their robust renewable
            energy infrastructures and low absolute emissions figures.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            This anomaly can be attributed to several factors inherent to
            smaller, industrialized countries like Denmark. Despite their
            advancements in renewable energy, these countries often have small
            populations, which can skew per capita calculations. Moreover, the
            higher standard of living, the necessity for extensive heating
            systems in colder climates, and complex transportation needs
            inherently increase per capita emissions.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Upon scrutinizing these insights, it becomes clear that Denmark,
            while on the right track, still faces significant challenges. The
            higher per capita emissions among Europe&apos;s renewable leaders
            suggest that even the most progressive countries must explore
            further measures to effectively reduce their environmental impact.
            This realization underscores the complexity of global and regional
            sustainability efforts and highlights the continuous need for
            innovative solutions tailored to the unique challenges of each
            country.
          </p>
        </div>
      </Container>
    </section>
  )
}
