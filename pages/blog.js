import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect,useState } from 'react'

export default function Blog() {
  const [blog, setblog] = useState([])
  useEffect(()=>{
    const url = "http://localhost:3000/api/blogs";
    fetch(url).then(response => response.json()).then(data => setblog(data));
  },[])
  return (
    <div>
         <Head>
        <title>Hunting Coder : Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <main className={styles.main}>
        <h1 className={styles.title}>
         Hunting Coder
        </h1>
        <div className={styles.grid}>
            {blog.map((elem)=>{
              return  <a key={elem.slug}>
              <Link href={`/blog/${elem.slug}`} >
                <h2>{elem.title} &rarr;</h2></Link>
                <p>{elem.description}</p>
                </a>
            })}
        </div>
      </main>
    </div>
  )
}