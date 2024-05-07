'use client'

import { Container } from '@/components/Container'
import { useEffect, useState } from 'react'

export default function Notebook() {
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const url =
          'https://raw.githubusercontent.com/carvalho28/02806-final-project/main/src/app/(main)/notebook/notebook.html'
        const response = await fetch(url)
        const html = await response.text()
        setHtmlContent(html)
      } catch (error) {
        console.error('Failed to fetch HTML content:', error)
      }
    }

    fetchHtmlContent()
  }, [])

  return (
    <div className="relative scroll-smooth">
      <Container className="relative">
        {/* <div
          className="mx-auto mt-20 max-w-3xl lg:max-w-4xl lg:px-12"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        /> */}

        {htmlContent ? (
          <div
            className="mx-auto mt-20 max-w-3xl lg:max-w-4xl lg:px-12"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </Container>
    </div>
  )
}
