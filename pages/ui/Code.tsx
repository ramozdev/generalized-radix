import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Code } from 'components/ui/Code'
import { NextPage } from 'next'

const CodePage: NextPage = () => {
  return (
    <Layout>
      <Showcase title="Code">
        <Code>THIS IS CODE</Code>
      </Showcase>
    </Layout>
  )
}

export default CodePage
