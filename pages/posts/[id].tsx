import Head from "next/head";
import Date from '../../components/date';
import Layout from "../../components/layout";
import { getAllPostIds, getPostData, getPostDataAndHtml } from "../../lib/posts";
import Link from "next/link";
import { GetStaticPaths } from "next";

export default function Post ({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
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

export const getStaticPaths: GetStaticPaths = async () => {
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