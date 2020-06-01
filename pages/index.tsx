import Head from 'next/head'

const github = 'https://github.com/UlisseMini'
const gitlab = 'https://gitlab.com/0u'
const email = 'ulisse.mini@gmail.com'
const discord = 'uli#4334'
const matrix = 'valvate:matrix.org'

export default function Home () {
  return (
    <>
      <Head>
        <title>Uli</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <header>
        <h1>Hello!</h1>
      </header>

      <main>
        <p>
          My name is Ulisse Mini, I'm a 15 year old software developer
          with a focus on python, javascript, go and rust.
        </p>

        <p>
          If you want to contact me here are a few ways
        </p>
        <ol>
          <li>Matrix: <code>{matrix}</code></li>
          <li>Discord: <code>{discord}</code></li>
          <li>
            Email: <a href={`mailto:${email}`}><code>{email}</code></a>
          </li>
        </ol>
        <p>
          You can find my projects
          on <a href={github}>github</a> and <a href={gitlab}>gitlab</a>.
        </p>
      </main>
    </>
  )
}
