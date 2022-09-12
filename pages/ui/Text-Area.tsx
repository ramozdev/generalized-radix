import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { TextArea } from 'components/ui/TextArea'
import { NextPage } from 'next'

const CardPage: NextPage = () => {
  return (
    <Layout>
      <Showcase title="Card">
        <TextArea>TextArea</TextArea>
      </Showcase>
    </Layout>
  )
}

export default CardPage
