import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Box } from 'components/ui'
import { NextPage } from 'next'

const BadgePage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <Box>
          The box element is a styled `div` component with no added css
          properties. It&apos;s meant to be used as a replacement for the `div`
          component because it allows you to pass css properties using your
          stitches configuration
        </Box>
      </Showcase>
    </Layout>
  )
}

export default BadgePage
