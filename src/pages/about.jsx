import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import SocialLink from '@/ui-lib/social-link'
// import Resume from '@/ui-lib/resume/index'
import {
  CodeWarsIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/alex-headshot.jpeg'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Alex Jack</title>
        <meta
          name="description"
          content="I'm Alex Jack. I live in London, where I design and build applications."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Alex. I live in London, where I design and build
              applications.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I enjoy programming because there&apos;s always more to learn
                and things I can improve on. I have a knack for breaking big
                challenges down into smaller solvable problems.
              </p>
              <p>
                I&apos;ve loved making things for as long as I can remember. As
                a kid, I would often disassemble the electronic devices in our
                house, which drove my parents mad. My curiosity and interest in
                tinkering was fuelled further, when my dad brought home our
                first computer. I&apos;d spend hours opening all of the
                applications, to see what they could do and playing around in
                Microsoft Paint.
              </p>
              <p>
                My love of art and drawing led me to studying animation at
                university. Studying animation really strengthened my attention
                to detail and knowledge of colour theory, both of which I have
                found extremely useful when it comes to designing and building
                UIs.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m a big comic and anime fan.
                One thing I&apos;d like to explore in the future is electronics,
                because I love the idea of turning my code into something
                tangible. Being able to program hardware so that it can solve
                physical problems is really intriguing.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.codewars.com/users/alexjack"
                icon={CodeWarsIcon}
                className="mt-4"
              >
                Follow on CodeWars
              </SocialLink>
              <SocialLink
                href="https://github.com/alexljack"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/alexljack/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:alex.ljack4@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                alex.ljack4@gmail.com
              </SocialLink>
            </ul>
            <br className="mt-12" />
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}
