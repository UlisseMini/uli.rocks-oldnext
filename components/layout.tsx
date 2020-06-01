import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'

const title = 'Uli'
const description = "Ulisse Mini's home on the internet"

interface LayoutProps {
  children: JSX.Element,
  home: boolean,
}

export default function Layout ({ children, home }: LayoutProps) {
  return (
    <div className={styles.container}>

      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content={description}
        />
        <meta name='og:title' content={title} />
        <meta name='twitter:card' content='summary' />
      </Head>

      <header>
        {home ? (
          <>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>../home</a>
            </Link>
          </>
        )}
      </header>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
