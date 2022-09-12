import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Box, Flex } from 'components/ui'
import { NextPage } from 'next'

const FlexPage: NextPage = () => {
  return (
    <Layout>
      <Showcase title="Flex">
        <Flex>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Flex>
      </Showcase>
    </Layout>
  )
}

export default FlexPage
