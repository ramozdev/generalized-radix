import Layout from 'components/Layout'
import {
  AlertDialogAction,
  AlertDialogCancel,
  GeneralizedAlertDialog,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { Button, Flex } from 'components/ui'
import { NextPage } from 'next'

const AlertDialogPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedAlertDialog
          trigger={{ children: <Button>Delete account</Button> }}
          title={{ children: 'Are you absolutely sure?' }}
          description={{
            children:
              'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
          }}
        >
          <Flex css={{ justifyContent: 'flex-end' }}>
            <AlertDialogCancel asChild>
              <Button color="mauve" css={{ marginRight: 25 }}>
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button color="red">Yes, delete account</Button>
            </AlertDialogAction>
          </Flex>
        </GeneralizedAlertDialog>
      </Showcase>
    </Layout>
  )
}

export default AlertDialogPage
