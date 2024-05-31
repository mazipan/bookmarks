import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>📍 by MZP</strong>,
  project: {
    link: 'https://github.com/mazipan',
  },
  chat: {
    link: 'https://x.com/maz_ipan',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 512"
        width="24"
        height="24">
        <path
          fill="currentColor"
          d="M256 0c141.384 0 256 114.616 256 256 0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256 0 114.616 114.616 0 256 0zm62.64 157.549h33.401l-72.974 83.407 85.85 113.495h-67.222l-52.645-68.837-60.244 68.837h-33.422l78.051-89.212-82.352-107.69h68.924l47.59 62.916 55.043-62.916zm-11.724 176.908h18.509L205.95 176.494h-19.861l120.827 157.963z"
        />
      </svg>
    )
  },
  primaryHue: 98,
  primarySaturation: 100,
  docsRepositoryBase: 'https://github.com/mazipan/bookmarks',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 📍 The Bookmarks',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" />
    </>
  ),
  footer: {
    component: (
      <div className='nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-center nx-gap-1 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)] nx-border-t'>
        <span>📍 The Bookmarks by </span>
        <a href="https://mazipan.space/" target='_blank' rel="noopener" className='nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50 nx-underline'>MZP</a>
        <span>, since 2024</span>
      </div>)
  },
}

export default config
