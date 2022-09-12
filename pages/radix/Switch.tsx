import Layout from 'components/Layout'
import { GeneralizedSwtich } from 'components/radix'
import Showcase from 'components/Showcase'
import { Flex } from 'components/ui'
import { NextPage } from 'next'
import { styled } from 'stitches.config'

const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
})

const SwtichPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <form>
          <Flex css={{ alignItems: 'center' }}>
            <Label htmlFor="s1" css={{ paddingRight: 15 }}>
              Airplane mode
            </Label>
            <GeneralizedSwtich defaultChecked id="s1" />
          </Flex>
        </form>
      </Showcase>
    </Layout>
  )
}

export default SwtichPage
