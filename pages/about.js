import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function about() {
  return (
    <div>
         <Head>
        <title>Hunting Coder : About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <main className={styles.main}>
        <h1 className={styles.title}>
         Hunting Coder
        </h1>
        <p>You are at about page</p>
      </main>
    </div>
  )
}