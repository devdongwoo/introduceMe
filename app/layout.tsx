"use client"
import "./globals.css"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>안녕하세요, 김동우입니다</title>
        <meta name="description" content="Description" />
      </head>
      <body>{children}</body>
    </html>
  )
}
