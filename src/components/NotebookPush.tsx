'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import JupyterNotebook from '@/images/Jupyter.svg'
import Image from 'next/image'

export function NotebookPart() {
  return (
    <section
      id="notebook"
      className="sm:py-15 flex items-center justify-center scroll-smooth py-4 pb-10"
    >
      <Container className="z-11 relative">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="notebook"
            className="text-center font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-4xl"
          >
            Discover the full analysis
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-red-900">
            Curious about how we uncover insights from data? Dive into our full
            analysis.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Image
              src={JupyterNotebook}
              alt="Jupyter Notebook"
              width={50}
              height={50}
              className="mr-2"
            />
            <Link href="/notebook" target="_blank">
              <p className="cursor-pointer text-center text-2xl tracking-tight text-red-500 hover:text-red-900 hover:underline">
                Explore the Notebook
              </p>
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-red-800 border-opacity-25" />
      </Container>
    </section>
  )
}
