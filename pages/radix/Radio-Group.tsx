import Layout from 'components/Layout'
import { Label, Radio, RadioGroup } from 'components/radix'
import Showcase from 'components/Showcase'
import { Flex } from 'components/ui'
import { NextPage } from 'next'

const RadioGroupPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <RadioGroup>
          <Flex css={{ marginBottom: 16, alignItems: 'center' }}>
            <Radio value="everything" id="everything" />
            <Label css={{ marginLeft: 8 }} htmlFor="everything">
              Everything
            </Label>
          </Flex>
          <Flex css={{ marginBottom: 16, alignItems: 'center' }}>
            <Radio value="same" id="same" color="plum" />
            <Label css={{ marginLeft: 8 }} htmlFor="same">
              Same as email
            </Label>
          </Flex>
          <Flex css={{ marginBottom: 16, alignItems: 'center' }}>
            <Radio value="none" id="none" color="bronze" />
            <Label css={{ marginLeft: 8 }} htmlFor="none">
              No push notifications
            </Label>
          </Flex>
        </RadioGroup>
      </Showcase>
    </Layout>
  )
}

export default RadioGroupPage
