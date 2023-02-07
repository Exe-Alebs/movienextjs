import "./globals.css"
import Link from "next/link"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <header>ALEBS MOVIE DATABASE</header>
      <body className = "m-32">
        {children}</body>
    </html>
  )
}
