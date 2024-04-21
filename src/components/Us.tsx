import Image from 'next/image'

import { Container } from '@/components/Container'
import Italy from '@/images/italy.png'
import Portugal from '@/images/portugal.png'

const members = [
  { name: 'Diogo Carvalho', number: 's233176', country: 'Portugal' },
  { name: 'Davide Sismeiro', number: 's233204', country: 'Italy' },
  { name: 'Matteo Piccagnoni', number: 's232713', country: 'Italy' },
]

export function Us() {
  return (
    <section id="us" aria-label="Us" className="sm:py-15 py-10">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-red-900 sm:text-4xl">
          Who are we?
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {members.map((member) => (
            <div
              key={member.number}
              className="flex flex-col items-center space-y-4"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={member.country === 'Italy' ? Italy : Portugal}
                  layout="fill"
                  objectFit="cover"
                  alt={member.country}
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-medium text-red-900">
                  {member.name}
                </h3>
                <p className="font-display text-lg text-red-600">
                  {member.number}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
