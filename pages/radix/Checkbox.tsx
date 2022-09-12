import Layout from 'components/Layout'
import { Checkbox } from 'components/radix'
import Showcase from 'components/Showcase'
import { Flex, Text } from 'components/ui'
import { NextPage } from 'next'

const CheckboxPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <Flex css={{ alignItems: 'center' }}>
          <Checkbox defaultChecked color="gold" />
          <Text css={{ paddingLeft: 15 }}>Accept terms and conditions.</Text>
        </Flex>
      </Showcase>
    </Layout>
  )
}

export default CheckboxPage
