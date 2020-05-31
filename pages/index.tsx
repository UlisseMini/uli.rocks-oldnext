import Head from 'next/head'

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Uli.rocks</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <header>
        <h1>Hello!</h1>
      </header>

      <main>
        <p>This is my quite boring body</p>
        <p>I would like to talk about quite boring things</p>
        <p>
          Perhaps a longer paragraph is due, I must find out how
          the browser deals with long paragraphs.
        </p>

        <p>
          So the browser wraps paragraphs, but only when they get REALLY long
          Looks like I can fix that by setting width to a smaller value though.
        </p>
      </main>
    </div>
  )
}
