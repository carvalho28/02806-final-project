'use client'

import { Container } from '@/components/Container'

export function Conclusion() {
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
            Conclusion
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            temporibus iusto quisquam, exercitationem perferendis inventore
            saepe fuga dolorem debitis ipsum in error mollitia dignissimos rem!
            Ipsum corporis ducimus reiciendis sequi?
          </p>
        </div>
        {/* line */}
        <div className="mt-10 border-t border-red-800  border-opacity-25" />
      </Container>
    </section>
  )
}
