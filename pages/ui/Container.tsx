import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Container } from 'components/ui'
import { NextPage } from 'next'

const CodePage: NextPage = () => {
  return (
    <Layout>
      <Showcase title="Container">
        <Container>THIS IS A CONTAINER</Container>
      </Showcase>
    </Layout>
  )
}

export default CodePage
