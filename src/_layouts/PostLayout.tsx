import Head from 'next/head'

interface PostLayoutProps {
  title: string
  description: string
  content: string
}

export default function PostLayout(props: PostLayoutProps) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>

        <meta name="description" content={props.description} />

        <meta property="og:site_name" content="Blog do Diego" />

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />

        {/* <meta property="og:image" content={props.thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        {/* <meta name="twitter:image" content={props.thumbnailUrl} /> */}
      </Head>
      <article>
        <h1>{props.title}</h1>
        {/* <img width="600" src={props.thumbnailUrl} alt={props.title}/> */}
        <div dangerouslySetInnerHTML={{__html:props.content}}/>
      </article>
    </main>
  )
}