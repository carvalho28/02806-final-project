'use client'

import { Container } from '@/components/Container'

export function Conclusion() {
  return (
    <section
      id="intro"
      className="sm:py-15 flex items-center justify-center scroll-smooth pb-10 pt-6"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="intro-title"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Forging the future
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            As we conclude our exploration of Denmark's transformative energy
            initiatives, it is evident how Denmark is charting a robust green
            path not just within its own borders but influencing the global
            dialogue on sustainability. From pioneering reductions in greenhouse
            gas emissions to leading the charge in renewable energy adoption,
            Denmark's journey represents a compelling blueprint for sustainable
            development.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            While challenges remain, particularly in managing per capita
            emissions, Denmark's proactive approach serves as a beacon for other
            nations. Its commitment to environmental innovation and policy
            exemplifies how a focused green shift can lead to significant global
            impacts.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Denmark's story, then, is more than just a national success; it is a
            beacon for the global <b>"Green Shift"</b> proving that the path to
            sustainability is both viable and vital for the future of our
            planet.
          </p>
        </div>
        {/* line */}
        <div className="mt-10 border-t border-red-800  border-opacity-25" />
      </Container>
    </section>
  )
}
