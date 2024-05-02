import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import Image from 'next/image'
import WindDenmark from '@/images/windDenmark.jpg'

export function Hero() {
  return (
    <div className="relative scroll-smooth sm:pb-10 sm:pt-20">
      <BackgroundImage className="-top-25 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl lg:max-w-4xl lg:px-12">
          <h1 className="text-center font-display text-5xl font-bold tracking-tighter text-red-600 sm:text-5xl">
            Green Shift: Denmark&apos;s Energy Path
          </h1>
          <div className="relative mt-10 h-96">
            <Image
              src={WindDenmark}
              alt="Wind turbines in Denmark"
              layout="fill"
              objectFit="cover"
            />
            {/* caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <p className="text-sm">
                <i>Denmark&apos;s wind power</i>. Made by{' '}
                <a
                  href="https://dribbble.com/stefc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Stefan Kirkegaard
                </a>{' '}
                on{' '}
                <a
                  href="https://dribbble.com/shots/6348055-Denmark-s-wind-power"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Dribbble
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
