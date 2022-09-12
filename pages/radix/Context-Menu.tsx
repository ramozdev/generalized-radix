import { ChevronRightIcon } from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import {
  GeneralizedContextMenu,
  GeneralizedContextMenuProps,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'
import { useState } from 'react'
import { styled } from 'stitches.config'

const Instruction = styled('div', {
  border: `2px $gray11 dashed`,
  color: '$gray11',
  borderRadius: 4,
  fontSize: 15,
  userSelect: 'none',
  padding: '45px 0',
  width: 300,
  textAlign: 'center',
})

const ContextMenuPage: NextPage = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  const items: GeneralizedContextMenuProps['items'] = [
    {
      kind: 'ITEM',
      label: 'Back',
      rightSlot: { children: '⌘+[' },
    },
    {
      kind: 'ITEM',
      label: 'Foward',
      rightSlot: { children: '⌘+]' },
      props: { disabled: true },
    },
    {
      kind: 'ITEM',
      label: 'Reload',
      rightSlot: { children: '⌘+R' },
    },
    {
      kind: 'SUB_MENU',
      subContent: { sideOffset: 2, alignOffset: -5 },
      trigger: {
        label: 'More Tools',
        rightSlot: { children: <ChevronRightIcon /> },
      },
      items: [
        {
          kind: 'ITEM',
          label: 'Save Page As…',
          rightSlot: { children: '⌘+S' },
        },
        {
          kind: 'ITEM',
          label: 'Create Shortcut…',
        },
        {
          kind: 'ITEM',
          label: 'Name Window…',
        },
        { kind: 'SEPARATOR' },
        {
          kind: 'ITEM',
          label: 'Developer Tools',
        },
      ],
    },
    { kind: 'SEPARATOR' },
    {
      kind: 'CHECKBOX',
      props: {
        onCheckedChange: setBookmarksChecked,
        checked: bookmarksChecked,
      },
      label: 'Show Bookmarks',
      rightSlot: { children: '⌘+B' },
    },
    {
      kind: 'CHECKBOX',
      props: { onCheckedChange: setUrlsChecked, checked: urlsChecked },
      label: 'Show Full URLs',
    },
    { kind: 'SEPARATOR' },
    { kind: 'LABEL', label: 'People' },
    {
      kind: 'RADIO_GROUP',
      items: [
        { label: 'Pedro Duarte', props: { value: 'pedro' } },
        { label: 'Colm Tuite', props: { value: 'colm' } },
      ],
      props: { onValueChange: setPerson, value: person },
    },
  ]
  return (
    <Layout>
      <Showcase>
        <GeneralizedContextMenu
          items={items}
          contentProps={{ alignOffset: 5 }}
          trigger={{ children: <Instruction>Right click here.</Instruction> }}
        />
      </Showcase>
    </Layout>
  )
}

export default ContextMenuPage
