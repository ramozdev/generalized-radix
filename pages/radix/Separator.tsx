import Layout from 'components/Layout'
import { Separator } from 'components/radix'
import Showcase from 'components/Showcase'
import { Box, Flex } from 'components/ui'
import { NextPage } from 'next'
import { styled } from 'stitches.config'

const Text = styled('div', {
  color: '$gray12',
  fontSize: 15,
  lineHeight: '20px',
})

const SeparatorPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <Box css={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
          <Text css={{ fontWeight: 500 }}>Radix Primitives</Text>
          <Text>An open-source UI component library.</Text>
          <Separator css={{ margin: '15px 0' }} />
          <Flex css={{ height: 20, alignItems: 'center' }}>
            <Text>Blog</Text>
            <Separator
              decorative
              orientation="vertical"
              css={{ margin: '0 15px' }}
            />
            <Text>Docs</Text>
            <Separator
              decorative
              orientation="vertical"
              css={{ margin: '0 15px' }}
            />
            <Text>Source</Text>
          </Flex>
        </Box>
      </Showcase>
    </Layout>
  )
}

export default SeparatorPage
