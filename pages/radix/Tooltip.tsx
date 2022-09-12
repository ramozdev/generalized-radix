import { PlusIcon } from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import { GeneralizedTooltip } from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const TooltipPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedTooltip icon={{ children: <PlusIcon /> }} sideOffset={5}>
          Add to library
        </GeneralizedTooltip>
      </Showcase>
    </Layout>
  )
}

export default TooltipPage
