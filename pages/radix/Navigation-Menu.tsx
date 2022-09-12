import Layout from 'components/Layout'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Link } from '@radix-ui/react-navigation-menu'
import { styled } from 'stitches.config'

// Your app...
const ContentList = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
})

const ListItem = styled('li', {})

const LinkTitle = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: '$violet12',
})

const LinkText = styled('p', {
  all: 'unset',
  color: '$mauve11',
  lineHeight: 1.4,
  fontWeight: 'initial',
})

const ContentListItem = forwardRef<
  ElementRef<typeof Link>,
  ComponentPropsWithoutRef<typeof Link>
>(({ children, title, ...props }, forwardedRef) => (
  <ListItem>
    <NavigationMenuLink
      {...props}
      ref={forwardedRef}
      css={{
        padding: 12,
        borderRadius: 6,
        '&:hover': { backgroundColor: '$mauve3' },
      }}
    >
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{children}</LinkText>
    </NavigationMenuLink>
  </ListItem>
))

const ContentListItemCallout = forwardRef<
  ElementRef<typeof Link>,
  ComponentPropsWithoutRef<typeof Link>
>(({ children, ...props }, forwardedRef) => (
  <ListItem css={{ gridRow: 'span 3' }}>
    <NavigationMenuLink
      {...props}
      href="/"
      ref={forwardedRef}
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${'$purple9'} 0%, ${'$indigo9'} 100%);`,
        borderRadius: 6,
        padding: 25,
      }}
    >
      <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
        <path d="M12 0H4V8H12V0Z"></path>
        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
      </svg>
      <LinkTitle
        css={{
          fontSize: 18,
          color: '$gray2',
          marginTop: 16,
          marginBottom: 7,
        }}
      >
        Radix Primitives
      </LinkTitle>
      <LinkText
        css={{
          fontSize: 14,
          color: '$mauve4',
          lineHeight: 1.3,
        }}
      >
        Unstyled, accessible components for React.
      </LinkText>
    </NavigationMenuLink>
  </ListItem>
))

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
})

const NavigationMenuPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ContentList layout="one">
                  <ContentListItemCallout />
                  <ContentListItem
                    href="https://stitches.dev/"
                    title="Stitches"
                  >
                    CSS-in-JS with best-in-class developer experience.
                  </ContentListItem>
                  <ContentListItem href="/colors" title="Colors">
                    Beautiful, thought-out palettes with auto dark mode.
                  </ContentListItem>
                  <ContentListItem
                    href="https://icons.modulz.app/"
                    title="Icons"
                  >
                    A crisp set of 15x15 icons, balanced and consistent.
                  </ContentListItem>
                </ContentList>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ContentList layout="two">
                  <ContentListItem
                    title="Introduction"
                    href="/docs/primitives/overview/introduction"
                  >
                    Build high-quality, accessible design systems and web apps.
                  </ContentListItem>
                  <ContentListItem
                    title="Getting started"
                    href="/docs/primitives/overview/getting-started"
                  >
                    A quick tutorial to get you up and running with Radix
                    Primitives.
                  </ContentListItem>
                  <ContentListItem
                    title="Styling"
                    href="/docs/primitives/overview/styling"
                  >
                    Unstyled and compatible with any styling solution.
                  </ContentListItem>
                  <ContentListItem
                    title="Animation"
                    href="/docs/primitives/overview/animation"
                  >
                    Use CSS keyframes or any animation library of your choice.
                  </ContentListItem>
                  <ContentListItem
                    title="Accessibility"
                    href="/docs/primitives/overview/accessibility"
                  >
                    Tested in a range of browsers and assistive technologies.
                  </ContentListItem>
                  <ContentListItem
                    title="Releases"
                    href="/docs/primitives/overview/releases"
                  >
                    Radix Primitives releases and their changelogs.
                  </ContentListItem>
                </ContentList>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="https://github.com/radix-ui">
                Github
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>

          <ViewportPosition>
            <NavigationMenuViewport />
          </ViewportPosition>
        </NavigationMenu>
      </Showcase>
    </Layout>
  )
}

export default NavigationMenuPage
