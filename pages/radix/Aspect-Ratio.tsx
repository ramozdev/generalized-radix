import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Box } from 'components/ui'
import { NextPage } from 'next'
import { styled } from 'stitches.config'

const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

const AspectRatioPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <Box
          css={{
            width: 300,
            borderRadius: 6,
            overflow: 'hidden',
          }}
        >
          <AspectRatio ratio={16 / 9}>
            <Img
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              alt="Landscape photo by Tobias Tullius"
            />
          </AspectRatio>
        </Box>
      </Showcase>
    </Layout>
  )
}

export default AspectRatioPage
