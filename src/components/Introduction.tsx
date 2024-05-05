'use client'

import { Container } from '@/components/Container'

export function Introduction() {
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
            Leading the Charge in Sustainable Energy
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            It&apos;s not uncommon to spot wind turbines gracefully spinning in
            the water as you take a leisurely stroll along the beaches of
            Denmark. Adding to this picturesque scene, a quick browse on the web
            for topics like{' '}
            <b>&quot;Most sustainable country in the world&quot;</b> invariably
            leads you to articles boasting about Denmark&apos;s status as the
            pinnacle of sustainability.
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            <b>But is it truly deserving of this title?</b> As pragmatic
            engineers, we feel compelled to fact-check online information. In an
            age saturated with fake news and deep fakes, which often sway public
            opinion, it&apos;s crucial to scrutinize the data meticulously.
          </p>

          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            <b>That&apos;s where we come in</b>. We are a group of students from
            the Technical University of Denmark (DTU), and we are here to
            investigate the veracity of these claims. We aim to provide you with
            a comprehensive overview of Denmark&apos;s energy landscape,
            exploring the country&apos;s commitment to sustainability and the
            impact of its policies on the environment.
          </p>

          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            <b>Join our exploration</b> to uncover how Denmark is setting the
            pace for a sustainable future.
          </p>
        </div>
      </Container>
    </section>
  )
}
