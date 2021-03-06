import React , {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

export default function Slug() {
    const router = useRouter();
    const [blog, setblog] = useState({})
    useEffect(()=>{
      if(!router.isReady)return;
      const {slug} = router.query;
      const url = `http://localhost:3000/api/getblog?slug=${slug}`;
      fetch(url).then(response => response.json()).then(data =>{
        setblog(data)
        console.log(data)
      })
    },[router.isReady]);

    function createMarkup(blog) {
      return {__html: blog};
    }

    return (
      <div className={styles.container}>
    <main className={styles.main}>
        <h3>Title: {blog && blog.title}</h3>
        <p> {blog && <div dangerouslySetInnerHTML={createMarkup(blog.description)} />}</p>
    </main>
    </div>
  )
}
