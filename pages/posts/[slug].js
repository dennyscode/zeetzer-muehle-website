
function Post({ slug, post, posts, category, data }) {
  console.log("output", slug, post, posts, category, data)
  return (
    <>

    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params

  try {
    console.log("TRY BLOCK", promise)

    const post = await client.getEntry('3PZ8ZrN0Yawx9r1lOcMPnR')
    const promise = await Promise.all([post])

    return {
      props: {
        post: promise[0],
      },
    }
  } catch (e) {
    return {
      // redirect: {
      //   destination: '/',
      //   permanent: false,
      // },
    }
  }
}

export default Post
