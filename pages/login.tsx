import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Entrar | Undonkey VR</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Login!</a>
        </h1>
      </main>
    </div>
  )
}
