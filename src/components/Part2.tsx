'use client'

import { Container } from '@/components/Container'
import Script from 'next/script'
import BeyondBorders from '@/images/beyondBorders.png'
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
                <i>Low poly world</i>. Made by{' '}
                <a
                  href="https://dribbble.com/MohChahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Mohamed Chahin
                </a>{' '}
                on{' '}
                <a
                  href="https://dribbble.com/shots/15525137-Low-Poly-World-2021"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic
            voluptatibus, fuga rerum iste quae odio quia totam ex ut tenetur
            quam consequuntur, veritatis error esse molestias saepe dolorum
            temporibus.
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
        </div>
      </Container>
    </section>
  )
}
