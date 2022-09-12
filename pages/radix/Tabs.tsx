import Layout from 'components/Layout'
import { GeneralizedTabs } from 'components/radix/Tabs'
import Showcase from 'components/Showcase'
import { Button, Flex, Input } from 'components/ui'
import { NextPage } from 'next'
import { FC } from 'react'
import { styled } from 'stitches.config'

const Text = styled('div', {
  marginBottom: 20,
  color: '$mauve11',
  fontSize: 15,
  lineHeight: 1.5,
})

const Fieldset = styled('fieldset', {
  all: 'unset',
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
})

const Label = styled('label', {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: '$violet12',
  display: 'block',
})

const Tab1: FC = () => (
  <>
    <Text>Make changes to your account here. Click save when you're done.</Text>
    <Fieldset>
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="Pedro Duarte" />
    </Fieldset>
    <Fieldset>
      <Label htmlFor="username">Username</Label>
      <Input id="username" defaultValue="@peduarte" />
    </Fieldset>
    <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
      <Button color="green">Save changes</Button>
    </Flex>
  </>
)

const Tab2: FC = () => (
  <>
    <Text>Change your password here. After saving, you'll be logged out.</Text>
    <Fieldset>
      <Label htmlFor="currentPassword">Current password</Label>
      <Input id="currentPassword" type="password" />
    </Fieldset>
    <Fieldset>
      <Label htmlFor="newPassword">New password</Label>
      <Input id="newPassword" type="password" />
    </Fieldset>
    <Fieldset>
      <Label htmlFor="confirmPassword">Confirm password</Label>
      <Input id="confirmPassword" type="password" />
    </Fieldset>
    <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
      <Button color="green">Change password</Button>
    </Flex>
  </>
)

const TabsPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedTabs
          defaultValue="tab1"
          items={[
            {
              trigger: { children: 'Account', props: { value: 'tab1' } },
              content: { children: <Tab1 />, props: { value: 'tab1' } },
            },
            {
              trigger: { children: 'Password', props: { value: 'tab2' } },
              content: { children: <Tab2 />, props: { value: 'tab2' } },
            },
          ]}
        />
      </Showcase>
    </Layout>
  )
}

export default TabsPage
