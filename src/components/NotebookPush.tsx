'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'

export function NotebookPart() {
  return (
    <section
      id="references"
      className="sm:py-15 flex items-center justify-center scroll-smooth py-4 pb-10"
    >
      <Container className="z-11 relative">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2
            id="notebook"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Notebook
          </h2>
          <Link href="/notebook">
            {/* to view the notebook click on the link */}
            <p className=" mt-4 cursor-pointer text-center text-2xl tracking-tight text-red-900 hover:text-red-400 hover:underline">
              Click to view the notebook
            </p>
          </Link>
        </div>
      </Container>
    </section>
  )
}
