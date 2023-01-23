import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>Welcome to my home page
      </h1>

      <div className={styles.grid}>
      <link href='/about' className={styles.card}>
      <h2>
        About page</h2></link>
      </div>

      <div className={styles.grid}>
        <Link href='/grades' className={styles.card}>
      <h2>Grades page</h2>
        </Link>
      </div>


      <div className={styles.grid}>
        <div className={styles.grid_container} style={{display: "grid"}}>
          <div className={styles.grid_item}>
            <h2>What does C.R.U.D stand for</h2> 
            </div>
          <div className={styles.grid_item}>
        <ul>
          <li> Create</li>
          <li> Read</li>
          <li> Update</li>
          <li> Delete</li>
        </ul>

       </div>
      </div>
     </div>
    </main>
    </>
  )
}
