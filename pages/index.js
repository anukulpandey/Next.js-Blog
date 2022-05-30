import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* <Script src='./script.js' ></Script> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
         Hunting Coder
        </h1>

        <div className={styles.grid}>
         <a  className={styles.card}>
          <Link href="/blog/learn-next">
            <h2>Learn Next.js &rarr;</h2></Link>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a  className={styles.card}>
          <Link href="/blog/learn-next">
            <h2>Learn Next.js &rarr;</h2></Link>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>
           
        </div>
      </main>

    </div>
  )
}
