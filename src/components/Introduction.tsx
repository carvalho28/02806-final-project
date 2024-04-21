'use client'

import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="intro"
      className="sm:py-15 flex items-center justify-center pb-10 pt-6"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="intro-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Introduction: Leading the Charge in Sustainable Energy
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            <b>
              Why is Denmark often hailed as a beacon of green energy and
              sustainability in Europe?
            </b>{' '}
            In a world grappling with the urgent need for environmental action,
            Denmark stands out for its revolutionary approach to renewable
            energy and sustainable living.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            In 2023,{' '}
            <b>
              wind power accounted for over 57 percent of Denmark&apos;s
              electricity generation
            </b>
            , a testament to its commitment to green energy. This website
            explores Denmark&apos;s strategies, comparing its performance with
            other European countries in areas such as renewable energy adoption,
            economic impact, and policy responses.
          </p>

          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            In line with this national focus, one of the key investments in 2021
            was by the Technical University of Denmark (DTU), which allocated
            nearly DKK 400 million to the <b>Climate Challenge Laboratory</b>.
            This project is just one example of how academic institutions are
            contributing to Denmark&apos;s robust efforts to pioneer sustainable
            technologies and solutions.
          </p>

          <h3 className="mt-8 font-display text-3xl tracking-tighter text-red-600">
            Explore with us:
          </h3>
          <ul className="ml-6 mt-4 list-disc font-display text-2xl tracking-tight text-red-900">
            <li>
              <b>Air and Energy: What&apos;s Denmark&apos;s Footprint?</b> Get
              to know the core environmental and energy data. How pure is the
              air in Copenhagen? How much power do we harness from the wind and
              sea?
            </li>
            <li>...</li>
          </ul>
          <p className="mt-8 font-display text-2xl tracking-tight text-red-900">
            <b>Join our exploration</b> to uncover how Denmark is setting the
            pace for a sustainable future.
          </p>
        </div>
      </Container>
    </section>
  )
}
