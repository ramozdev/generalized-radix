import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import { GeneralizedPopover, Label } from 'components/radix'
import Showcase from 'components/Showcase'
import { Flex, Input, Text } from 'components/ui'
import { NextPage } from 'next'
import { FC } from 'react'
import { styled } from 'stitches.config'

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
})

const Content: FC = () => (
  <Flex css={{ flexDirection: 'column', gap: 10 }}>
    <Text css={{ marginBottom: 10 }}>Dimensions</Text>
    <Fieldset>
      <Label htmlFor="width">Width</Label>
      <Input id="width" defaultValue="100%" />
    </Fieldset>
    <Fieldset>
      <Label htmlFor="maxWidth">Max. width</Label>
      <Input id="maxWidth" defaultValue="300px" />
    </Fieldset>
    <Fieldset>
      <Label htmlFor="height">Height</Label>
      <Input id="height" defaultValue="25px" />
    </Fieldset>
    <Fieldset>
      <Label htmlFor="maxHeight">Max. height</Label>
      <Input id="maxHeight" defaultValue="none" />
    </Fieldset>
  </Flex>
)

const PopoverPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedPopover
          content={{ children: <Content />, props: { sideOffset: 5 } }}
          trigger={{ children: <MixerHorizontalIcon /> }}
        />
      </Showcase>
    </Layout>
  )
}

export default PopoverPage
