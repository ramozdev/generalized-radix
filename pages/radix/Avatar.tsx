import Layout from 'components/Layout'
import { GeneralizedAvatar } from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const AvatarPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedAvatar
          imageProps={{
            src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
            alt: 'Colm Tuite',
          }}
          fallback={{ props: { delayMs: 600 }, children: 'CT' }}
        />
      </Showcase>
    </Layout>
  )
}

export default AvatarPage
