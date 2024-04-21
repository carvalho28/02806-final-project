import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-center md:flex-row">
        <p className="mt-6 text-base text-red-600 md:mt-0">
          Group 74 - Social Data Analysis and Visualization
        </p>
      </Container>
    </footer>
  )
}
