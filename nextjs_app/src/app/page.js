
'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
       <p>home</p>
       <button onClick={()=>alert('hello')} >alert</button>
    </main>
  )
}
 