import React from 'react'
import './globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>MITM team starter project</title>
        <meta
          name="description"
          content="MITM team starter project generated by create-mitm-project"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
