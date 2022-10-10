import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landing | Undonkey VR</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <h1 className="body-font font-wild text-gray-900">
          Welcome to <Link href="/login">Login!</Link>
        </h1>
      </main>
    </div>
  )
}
