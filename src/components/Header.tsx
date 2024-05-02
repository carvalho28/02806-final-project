import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import backgroundImage from '@/images/background.png'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex items-center justify-between lg:flex-nowrap">
        <div className="flex flex-grow justify-center py-4 font-mono text-sm text-red-600 lg:py-0">
          <div className="flex items-center gap-4">
            <Link href="/">
              <p>Final Project</p>
            </Link>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>02806 Social Data Analysis and Visualization</p>
          </div>
        </div>
        <div className="flex-none">
          <Image
            src={backgroundImage}
            width={40}
            alt=""
            className="w-5 md:w-10"
          />
        </div>
      </Container>
    </header>
  )
}
