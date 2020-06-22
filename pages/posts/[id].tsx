import Head from "next/head";
import Date from '../../components/date';
import Layout from "../../components/layout";
import { getAllPostIds, getPostData, getPostDataAndHtml } from "../../lib/posts";
import Link from "next/link";

export default function Post ({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.3/styles/railscasts.min.css"
        />
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const postPaths = getAllPostIds()
  return {
    paths: postPaths.map(path => {
      return { params: { id: path } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostDataAndHtml(params.id)
  return {
    props: {
      postData
    }
  }
}