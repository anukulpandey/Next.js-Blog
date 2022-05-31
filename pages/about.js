import React from 'react'
import styles from '../styles/About.module.css'
import Head from 'next/head'

export default function About() {
  return (
    <div>
         <Head>
        <title>Hunting Coder : About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <main className={styles.main}>
        <h1 className={styles.title}>
         About Us
        </h1>
        <h3 >For whom is this blog?</h3>
        <p className={styles.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, doloremque sequi? Autem optio ullam ut, odio labore repellat qui, sapiente ipsum maxime harum quasi eos facilis laborum deleniti? Maxime sint consequatur nobis error accusantium, tenetur voluptate eos autem labore non nam harum illo dolorem, enim quia, suscipit qui nisi doloremque quae nemo! Cumque voluptate deserunt obcaecati temporibus quod quas modi quasi in officia mollitia?</p>
        <hr />
        <h3 >Utility</h3>
        <p className={styles.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, doloremque sequi? Autem optio ullam ut, odio labore repellat qui, sapiente ipsum maxime harum quasi eos facilis laborum deleniti? Maxime sint consequatur nobis error accusantium, tenetur voluptate eos autem labore non nam harum illo dolorem, enim quia, suscipit qui nisi doloremque quae nemo! Cumque voluptate deserunt obcaecati temporibus quod quas modi quasi in officia mollitia?</p>
      </main>
    </div>
  )
}
