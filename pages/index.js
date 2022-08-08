import styles from '../styles/Home.module.css'
import Link from "next/link"
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';

function Home() {
  return (
    <div>
      <Head>
        <title>My first app</title>
      </Head>
      <Link href="/about">About</Link>
      <h1 className={styles.homePageTitle}>Hello Next.js</h1>
    </div>
  )
}

// go to home page with "/"


export default Home;