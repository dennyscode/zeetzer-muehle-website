import * as contentful from 'contentful';
import Head from 'next/head';
import BlogPreview from '../components/blog-preview/blogPreview';
import styles from '../styles/Home.module.css';

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home(props) {
  console.log("props", props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1></h1>
        <p>Seit fast dreißig Jahren:
          Begegnungen mit Menschen und anderen Wesen. Hier werden Kinder geboren, hier wird geliebt und gestritten
          Musik und Theater gemacht.
          Die ehemalige, Historische Wassermühle Zeetzer Mühle ist heute ein Raum für Menschen, Kunst und Natur.
        </p>
      </main>
      <BlogPreview posts={props.posts} />
    </div>
  )
}


export async function getStaticProps() {
  // get data from headless cms
  const posts = await client.getEntries({
    content_type: "post"
  })
  const legal = await client.getEntries({
    content_type: "legal"
  })
  const events = await client.getEntries({
    content_type: "events"
  })


  return {
    props: {
      legal: await legal,
      posts: await posts,
      events: await events,
    },
  }
}


