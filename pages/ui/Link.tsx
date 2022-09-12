import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Link } from 'components/ui/Link'
import { NextPage } from 'next'

const CodePage: NextPage = () => {
  return (
    <Layout>
      <Showcase title="Link">
        <Link>Link</Link>
      </Showcase>
    </Layout>
  )
}

export default CodePage
