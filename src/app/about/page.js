import Link from "next/link"

export default function About() {
  return (
    <nav>
      <h1>About Page</h1>
      <Link href="/home"> Home </Link>
      <Link href={'/service'}> Service</Link>
    </nav>
  )
}