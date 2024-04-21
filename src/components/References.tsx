'use client'

import { Container } from '@/components/Container'

const references = [
  {
    id: 1,
    author: 'Statista',
    name: 'Denmark: power generation share by source 2023',
    url: 'https://www.statista.com/statistics/1235360/denmark-distribution-of-electricity-production-by-source/#:~:text=In%202023%2C%20wind%20power%20accounted,solar%20and%20wind%20power%20worldwide.',
  },
  {
    id: 2,
    author: 'DTU',
    name: 'DTU is building for a sustainable future',
    url: 'https://www.dtu.dk/english/news/all-news/nyhed?id=b4568db8-102b-4903-aa62-77a10edf254d',
  },
]

export function References() {
  return (
    <section
      id="references"
      className="sm:py-15 flex items-center justify-center py-4"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            References
          </h2>
          <p className="mt-4 text-left font-display text-2xl tracking-tight text-red-900">
            {references.map((reference) => (
              <a
                key={reference.id}
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-red-900 hover:underline"
              >
                {reference.author}. <i>{reference.name}</i>
              </a>
            ))}
          </p>
        </div>
      </Container>
    </section>
  )
}
