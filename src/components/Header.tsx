'use client'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import backgroundImage from '@/images/background.png'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import clsx from 'clsx'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="mobileNavLink block w-full overflow-hidden text-ellipsis whitespace-nowrap p-2"
    >
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-red-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      viewBox="0 0 8 8"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute right-0 top-full mr-64 mt-4 flex w-72 origin-top-right flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#intro">
              <b>Introduction</b>: Leading the charge in sustainable energy
            </MobileNavLink>
            <hr className="m-2 border-red-300/40" />
            <MobileNavLink href="#part1">
              <b>Part 1</b>: Understanding Denmark
            </MobileNavLink>
            <hr className="m-2 border-red-300/40" />
            <MobileNavLink href="#part2">
              <b>Part 2</b>: Denmark beyond borders
            </MobileNavLink>
            <hr className="m-2 border-red-300/40" />
            <MobileNavLink href="#conclusion">
              <b>Conclusion</b>: Forging the future
            </MobileNavLink>
            <hr className="m-2 border-red-300/40" />
            <MobileNavLink href="#notebook">
              <b>Notebook</b>: Discover the full analysis
            </MobileNavLink>
            <hr className="m-2 border-red-300/40" />
            <MobileNavLink href="#references">
              <b>References</b>
            </MobileNavLink>
            <hr className="m-2 border-red-300/40" />
            <MobileNavLink href="#us">
              <b>Authors</b>: Who are we?
            </MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="fixed relative z-50 flex-none lg:pt-11">
      <Container className="flex items-center justify-between lg:flex-nowrap">
        <div className="flex-none">
          <Image
            src={backgroundImage}
            width={40}
            alt=""
            className="w-5 md:w-10"
          />
        </div>
        <div className="flex flex-grow justify-center py-4 font-mono text-sm text-red-600 lg:py-0">
          <div className="flex items-center gap-4">
            <Link href="/">
              <p>Final Project</p>
            </Link>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>02806 Social Data Analysis and Visualization</p>
          </div>
        </div>
        <MobileNavigation />
      </Container>
    </header>
  )
}
