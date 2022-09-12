import { ChevronRightIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import {
  GeneralizedDropdownMenu,
  GeneralizedDropdownMenuProps,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'
import { useState } from 'react'

const trigger: GeneralizedDropdownMenuProps['trigger'] = {
  children: <HamburgerMenuIcon />,
}

const DropdownMenuPage: NextPage = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  const items: GeneralizedDropdownMenuProps['items'] = [
    {
      kind: 'ITEM',
      label: 'New Tab',
      rightSlot: { children: '⌘+T' },
    },
    {
      kind: 'ITEM',
      label: 'New Window',
      rightSlot: { children: '⌘+N' },
    },
    {
      kind: 'ITEM',
      label: 'New Private Window',
      rightSlot: { children: '⇧+⌘+N' },
      props: { disabled: true },
    },
    {
      kind: 'SUB_MENU',
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
        <GeneralizedDropdownMenu
          items={items}
          trigger={trigger}
          arrowProps={{ offset: 15 }}
          contentProps={{ sideOffset: 5 }}
        />
      </Showcase>
    </Layout>
  )
}

export default DropdownMenuPage
