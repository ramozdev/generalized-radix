import { FontItalicIcon } from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import { Toggle } from 'components/radix/Toggle'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const TogglePage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <Toggle aria-label="Toggle italic">
          <FontItalicIcon />
        </Toggle>
      </Showcase>
    </Layout>
  )
}

export default TogglePage
