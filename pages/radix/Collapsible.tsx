import { Cross2Icon, RowSpacingIcon } from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { Flex, Text } from 'components/ui'
import { NextPage } from 'next'
import { useState } from 'react'
import { styled } from 'stitches.config'

const Repository = styled('div', {
  backgroundColor: '$gray1',
  borderRadius: 4,
  margin: '10px 0',
  padding: 10,
})

const IconButton = styled('div', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$violet11',
  '&[data-state="closed"]': { backgroundColor: '$gray1' },
  '&[data-state="open"]': { backgroundColor: '$violet3' },
  '&:hover': { backgroundColor: '$violet3' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

const CollapsiblePage: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
      <Showcase>
        <Collapsible open={open} onOpenChange={setOpen}>
          <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>@peduarte starred 3 repositories</Text>
            <CollapsibleTrigger asChild>
              <IconButton>
                {open ? <Cross2Icon /> : <RowSpacingIcon />}
              </IconButton>
            </CollapsibleTrigger>
          </Flex>

          <Repository>
            <Text>@radix-ui/primitives</Text>
          </Repository>

          <CollapsibleContent>
            <Repository>
              <Text>@radix-ui/colors</Text>
            </Repository>
            <Repository>
              <Text>stitches.config</Text>
            </Repository>
          </CollapsibleContent>
        </Collapsible>
      </Showcase>
    </Layout>
  )
}

export default CollapsiblePage
