import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Input } from 'components/ui'
import { NextPage } from 'next'

const InputPage: NextPage = () => {
  return (
    <Layout>
      <Showcase title="Input">
        <Input placeholder="Input" css={{ mx: 'auto', maxWidth: '300px' }} />
      </Showcase>
    </Layout>
  )
}

export default InputPage
