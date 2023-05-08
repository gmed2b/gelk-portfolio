import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://gelk.tech',
  integrations: [
    sitemap(),
    react(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    tailwind()
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-3xl font-bold mb-2',
          h2: 'text-2xl font-bold',
          h3: 'text-xl font-bold',
          h4: 'text-lg font-bold',
          h5: 'font-bold',
          h6: 'font-bold',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-3',
          a: 'underline underline-offset-2 hover:text-sky-500 decoration-sky-500',
          ul: 'list-disc mb-4',
          ol: 'list-decimal mb-4',
          li: 'mb-1'
        }
      ]
    ]
  }
})
