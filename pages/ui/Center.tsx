import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Center } from 'components/ui/Center'
import { NextPage } from 'next'

const BadgePage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <Center>This is centered.</Center>
      </Showcase>
    </Layout>
  )
}

export default BadgePage
