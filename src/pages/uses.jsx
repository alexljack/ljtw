import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import ToolsSection from '@/ui-lib/tools-section'
import Tool from '@/ui-lib/tool'

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Latch Jack</title>
        <meta
          name="description"
          content="Software I use, tech I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, tech I love, and other things I recommend."
        intro="I've seen this Uses pages on other developer's websites and thought it looked pretty cool. So here's mine... A list of what I use to build software and stay productive."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool
              title="13” MacBook Pro - Core i5 2.3GHz, 8GB RAM (2018)"
              href="https://www.apple.com/uk/"
            >
              I&apos;ve had this laptop for a good few years. It does what I
              need it to do really well, so I don&apos;t see me upgrading it any
              time soon.
            </Tool>
            <Tool
              title="Dell UltraSharp U2720Q"
              href="https://www.dell.com/en-uk"
            >
              This monitor is really good. It&apos;s 4k resolution is really
              nice, and means I have screen real estate to work with.
            </Tool>
            <Tool title="Keychron Q1 v2" href="https://www.keychron.uk/">
              I absolutely love mechanical keyboards. I find that once you make
              the switch, it&apos;s really hard to use anything else. Although,
              I still use the regular old qwerty layout I grew up on and
              haven&apos;t tried any of the others
            </Tool>
            <Tool
              title="Logitech MX Anywhere 3"
              href="https://www.logitech.com/en-gb/products/mice/mx-anywhere-3.910-005990.html"
            >
              I&apos;ve experimented with a few different mice and even
              Apple&apos;s Magic Trackpad. I prefer using a regular mouse.
              Currently considering switch to the MX Master 3, as this ones a
              little small for my hands.
            </Tool>
            <Tool title="ErgoDesk Atlas Mini" href="https://ergodesks.co.uk/">
              Sitting at a desk all day isn&apos;t great for your back, and
              I&apos;d often have a back-ache at the end of the day. I got this
              desk to enable me to switch up my position throughout the day.
              It&apos;s really helped. Aside from that, it&apos;s a really nice,
              solid desk (it can also lift up to 100kg).
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code" href="https://code.visualstudio.com/">
              A great text editor for writing code. Super extensible.
            </Tool>
            <Tool title="iTerm2" href="https://iterm2.com/">
              I&apos;m honestly not even sure what features I get with this that
              aren&apos;t just part of the MacOS Terminal but it&apos;s what I
              use.
            </Tool>
            <Tool title="Insomnia" href="https://insomnia.rest/">
              Great software for working with api&apos;s and testing endpoints.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma" href="https://www.figma.com/">
              We started using Figma as just a design tool but now it&apos;s
              become our virtual whiteboard for the entire company. Never would
              have expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred" href="https://www.alfredapp.com/">
              Alfred is a really nice application launcher. I&apos;m far from a
              power-user, but I like it.
            </Tool>
            <Tool title="AltTab" href="https://alt-tab-macos.netlify.app/">
              The default application switcher on MacOS is far from great. You
              can jump between apps i.e Teams to Chrome, but not between
              different instances of the app (like you can on Windows OS).
              AltTab fixes that, meaning I don&apos;t have to take my hands off
              the keyboard.
            </Tool>
            <Tool title="Clipy" href="https://clipy-app.com/">
              Great tool for using your clipboard. No more accidental
              overwriting your copy when you hit cmd+c instead of cmd+v.
            </Tool>
            <Tool title="Obsidian" href="https://obsidian.md/">
              A really customisable note taking application. You can write in
              markdown and create links between your notes. Another app that I
              don&apos;t use to it&apos;s full capabilities, but one I really
              recommend.
            </Tool>
            <Tool title="Rectangle" href="https://rectangleapp.com/">
              I use this as my window manager. It makes it easy to snap
              applications right where I want them.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
