import { Cross2Icon } from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import { DialogClose, GeneralizedDialog } from 'components/radix'
import Showcase from 'components/Showcase'
import { Button, Flex, Input } from 'components/ui'
import { NextPage } from 'next'
import { styled } from 'stitches.config'

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$violet11',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$violet4' },
  '&:focus': { boxShadow: `0 0 0 2px ${'$violet7'}` },
})

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
})

const Label = styled('label', {
  fontSize: 15,
  color: '$violet11',
  width: 90,
  textAlign: 'right',
})
const DialogPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedDialog
          trigger={{ children: <Button>Edit profile</Button> }}
          title={{ children: 'Edit profile' }}
          description={{
            children: `Make changes to your profile here. Click save when you're done.`,
          }}
        >
          <Fieldset>
            <Label htmlFor="name">Name</Label>
            <Input color="violet" id="name" defaultValue="Pedro Duarte" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="username">Username</Label>
            <Input color="violet" id="username" defaultValue="@peduarte" />
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <DialogClose asChild>
              <Button aria-label="Close" color="green">
                Save changes
              </Button>
            </DialogClose>
          </Flex>
          <DialogClose asChild>
            <IconButton>
              <Cross2Icon />
            </IconButton>
          </DialogClose>
        </GeneralizedDialog>
      </Showcase>
    </Layout>
  )
}

export default DialogPage
