import Head from 'next/head'
import Image from 'next/image'
import ImagePng from '../public/frame.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landing | Undonkey VR</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main style={{width: '100vw', height: '100vh'}}>
        <Image width="100%" layout="fill" src={ImagePng} />
      </main>
    </div>
  )
}
