import Layout from 'components/Layout'
import {
  GeneralizedHoverCard,
  GeneralizedHoverCardProps,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { Flex } from 'components/ui'
import { NextPage } from 'next'
import { styled } from 'stitches.config'

const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px $gray1` },
})

const Img = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
})

const Text = styled('div', {
  margin: 0,
  color: '$mauve12',
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: '$mauve10' },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
})

const trigger: GeneralizedHoverCardProps['trigger'] = {
  children: (
    <ImageTrigger
      href="https://twitter.com/radix_ui"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Img src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png" />
    </ImageTrigger>
  ),
}

const HoverCard: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedHoverCard
          trigger={trigger}
          contentProps={{ sideOffset: 5 }}
        >
          <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <Img
              size="large"
              src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            />
            <Flex css={{ flexDirection: 'column', gap: 15 }}>
              <Text>
                <Text bold>Radix</Text>
                <Text faded>@radix_ui</Text>
              </Text>
              <Text>
                Components, icons, colors, and templates for building
                high-quality, accessible UI. Free and open-source.
              </Text>
              <Flex css={{ gap: 15 }}>
                <Flex css={{ gap: 5 }}>
                  <Text bold>0</Text> <Text faded>Following</Text>
                </Flex>
                <Flex css={{ gap: 5 }}>
                  <Text bold>2,900</Text> <Text faded>Followers</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </GeneralizedHoverCard>
      </Showcase>
    </Layout>
  )
}

export default HoverCard
