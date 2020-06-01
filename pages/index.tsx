import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

const github = 'https://github.com/UlisseMini'
const gitlab = 'https://gitlab.com/0u'
const email = 'ulisse.mini@gmail.com'
const discord = 'uli#4334'
const matrix = 'valvate:matrix.org'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <h1>Hello!</h1>

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

      <h2>Posts</h2>
      <ul>
        {allPostsData.map(({ id, date, title }, key) => {
          return (
            <li key={key}>
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const getStaticProps = async context => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData: allPostsData
    }
  }
}
