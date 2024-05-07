import { Container } from '@/components/Container'

import { promises as fs } from 'fs'

export default async function Notebook() {
  const file = await fs.readFile(
    process.cwd() + '/src/app/(main)/notebook/notebook.html',
    'utf8',
  )
  return (
    <div className="relative scroll-smooth">
      <Container className="relative">
        {/* load html directly */}

        <div
          className="mx-auto mt-20 max-w-3xl lg:max-w-4xl lg:px-12"
          dangerouslySetInnerHTML={{ __html: file }}
        />
      </Container>
    </div>
  )
}
