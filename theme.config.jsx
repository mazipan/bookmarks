import React from 'react'

const config = {
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
  color: {
    hue: 98,
    saturation: 100,
  },
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
    content: (
      <span>
        📍 The Bookmarks, © {new Date().getFullYear()},  by {' '}
        <a href="https://mazipan.space" target="_blank">
          MZP
        </a>
        .
      </span>
    )
  }
}

export default config
