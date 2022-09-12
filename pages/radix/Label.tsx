import Layout from 'components/Layout'
import { Label } from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const LabelPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <Label css={{ marginLeft: 8 }} htmlFor="none">
          No push notifications
        </Label>
      </Showcase>
    </Layout>
  )
}

export default LabelPage
