'use client'

import { Container } from '@/components/Container'

const references = [
  {
    id: 1,
    author: 'State of Green',
    name: 'Denmark is once again ranked the world’s most sustainable',
    url: 'https://stateofgreen.com/en/news/denmark-ranked-worlds-most-sustainable/',
  },
  {
    id: 2,
    author: 'The Sustainable Living Guide',
    name: '10 Most Sustainable Countries in the World',
    url: 'https://www.dtu.dk/english/news/all-news/nyhed?id=b4568db8-102b-4903-aa62-77a10edf254d',
  },
  {
    id: 3,
    author: 'The World Bank',
    name: 'Sustainable Development Report 2023',
    url: 'https://dashboards.sdgindex.org/rankings',
  },
  {
    id: 4,
    author: 'Britannica',
    name: 'Greenhouse gas',
    url: 'https://www.britannica.com/science/greenhouse-gas',
  },
  {
    id: 5,
    author: 'Earth.org',
    name: 'What Are the Major Sources of Methane in the Atmosphere?',
    url: 'https://earth.org/sources-of-methane-in-the-atmosphere/',
  },
  {
    id: 6,
    author: 'SCIRO',
    name: 'What are the sources of carbon dioxide in the atmosphere?',
    url: 'https://www.csiro.au/en/research/environmental-impacts/climate-change/Climate-change-QA/Sources-of-CO2',
  },
  {
    id: 7,
    author: 'BBC',
    name: 'COP26: The truth behind the new climate change denial',
    url: 'https://www.bbc.com/news/science-environment-59251912',
  },
]

// circle for references
function Circle() {
  return (
    <div className="mr-3 inline-block h-3 w-3 rounded-full bg-red-600 align-middle" />
  )
}

export function References() {
  return (
    <section
      id="references"
      className="sm:py-15 flex items-center justify-center scroll-smooth py-4"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="part1-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            References
          </h2>
          <div className="mt-4 text-left font-display text-2xl tracking-tight text-red-900">
            {references.map((reference) => (
              <div
                key={reference.id}
                className="mt-2 flex items-center text-red-900 hover:underline"
              >
                <Circle />
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {reference.author}. <i>{reference.name}</i>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* line */}
        <div className="mt-10 border-t border-red-800  border-opacity-25" />
      </Container>
    </section>
  )
}
