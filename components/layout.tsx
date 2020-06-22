import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'

const title = 'Uli'

interface LayoutProps {
  children: any,
}

export default function Layout ({ children }: LayoutProps) {
  return (
    <div className={styles.container}>

      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <header>
        <Link href='/'>
          <a>
            <img
              alt='profile'
              src='/profile.png'
              className={styles.profile}
            />
          </a>
        </Link>
      </header>

      <main className={`${styles.main}`}>
        {children}
      </main>
    </div>
  )
}
