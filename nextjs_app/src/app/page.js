
'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  return (
    <main className={styles.main}>
       <p>home</p>
       <button onClick={()=>alert('hello')} >alert</button>
        <Link href='/login'>Go to login page</Link>
        <button onClick={()=>router.push('/login')} >About page</button>
        <button onClick={()=>router.push('/NestedRoute/NestedHome')} >NestedHome page</button>
        <button onClick={()=>router.push('/Studentlist')} >Studentlist page</button>

    </main>
  )
}
  