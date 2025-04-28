import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

import Article from '@/ui-lib/article'
// import Newsletter from '@/ui-lib/newsletter'
import Photos from '@/ui-lib/photos'
import Resume from '@/ui-lib/resume'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Alex Jack - Software engineer.</title>
        <meta
          name="description"
          content="I’m Alex, a software engineer based in London.I'm passionate about creating engaging and intuitive software."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Alex, a software engineer based in London. I&apos;m
            passionate about creating engaging and intuitive software.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/alexljack"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/alexljack"
              aria-label="Connect on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
