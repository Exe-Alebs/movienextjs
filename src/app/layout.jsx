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
      <body className = "m-32">
        <Link className="p-0 20" href="">Dashboard</Link>
        <Link href="p-70">About Us</Link>
        <Link href="">Signup</Link>
        {children}</body>
    </html>
  )
}
