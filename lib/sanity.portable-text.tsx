import { PortableText as PortableTextComponent } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import { urlForImage } from './sanity.image'
import Image from 'next/image'
import Link from 'next/link'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 my-6">
          <Image
            className="object-cover rounded-lg"
            src={urlForImage(value).url()}
            alt={value.alt || 'Imagen'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="underline decoration-[#1C64F2] text-[#1C64F2] hover:text-blue-800 transition-colors"
        >
          {children}
        </Link>
      )
    },
  },
}

export function PortableText({ content }: { content: any }) {
  return <PortableTextComponent value={content} components={components} />
} 