import Link from "next/link"

export default function Service() {
  return (
    <nav>
      <h1>Service Page</h1>
      <Link href="/home"> Home </Link>
      <Link href={'/about'}> About</Link>
    </nav>
  )
}