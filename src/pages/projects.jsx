import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoSnake from '@/images/logos/bug.jpg'
import logoTwenty from '@/images/logos/twenty.jpg'
import logoBasketball from '@/images/logos/basketball.png'
import logoGeocachr from '@/images/logos/geo-planet.svg'

const projects = [
  {
    name: 'Snake II',
    description: 'A rebuild of the classic, written in vanilla JavaScript.',
    link: {
      href: 'https://alexljack.github.io/sei-project-1/',
      repo: 'https://github.com/alexljack/sei-project-1',
      label: 'github.com',
    },
    logo: logoSnake,
  },
  {
    name: 'TopTwenty',
    description:
      'A movie website built with React, that displays the best 20 films of each genre and year.',
    link: {
      href: 'https://top-twenty.herokuapp.com/',
      repo: 'https://github.com/alexljack/sei-project-2',
      label: 'github.com',
    },
    logo: logoTwenty,
  },
  {
    name: 'GeocachR',
    description:
      'A geo-caching treasure hunting website. Front-end built with React and backend built with Node and MongoDB.',
    link: {
      href: 'http://getgeocachr.herokuapp.com/',
      repo: 'https://github.com/alexljack/sei-group-project',
      label: 'github.com',
    },
    logo: logoGeocachr,
  },
  {
    name: 'NBA Legends',
    description:
      'The React front-end to an API I built. The back-end built with Node and MongoDB.',
    link: {
      href: 'http://nba-legend.herokuapp.com/',
      repo: 'https://github.com/alexljack/nba-legends-api',
      label: 'github.com',
    },
    logo: logoBasketball,
  },
  // {
  //   name: 'Pensive',
  //   description:
  //     'The schematics for the first rocket I designed that successfully made it to orbit.',
  //   link: {
  //     href: 'http://pensiveworld.herokuapp.com/',
  //     repo: 'https://github.com/alexljack/sei-final-project',
  //     label: 'github.com',
  //   },
  //   logo: logoPenseive,
  // },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Latch Jack</title>
        <meta name="description" content="Things I’ve built." />
      </Head>
      <SimpleLayout
        title="Things I’ve built, trying to put my dent in the universe."
        intro="I spend some of my evenings after work digging into new technologies, so I can keep improving. I find the best way to learn (for me anyhow) about development, is to keep building new things. Watch this space :)."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <p className="text-zinc-800 dark:text-zinc-100">Coming soon...</p>
          {/* {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))} */}
        </ul>
      </SimpleLayout>
    </>
  )
}
