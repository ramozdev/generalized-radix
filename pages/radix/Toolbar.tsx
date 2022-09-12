import {
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import { GeneralizedToolbar, GeneralizedToolbarProps } from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const items: GeneralizedToolbarProps['items'] = [
  {
    kind: 'TOGGLE_GROUP',
    items: [
      {
        children: <FontBoldIcon />,
        props: { value: 'bold', 'aria-label': 'Bold' },
      },
      {
        children: <FontItalicIcon />,
        props: { value: 'italic', 'aria-label': 'Italic' },
      },
      {
        children: <StrikethroughIcon />,
        props: { value: 'strikethrough', 'aria-label': 'Strike through' },
      },
    ],
    props: { type: 'multiple', 'aria-label': 'Text formatting' },
  },
  { kind: 'SEPARATOR' },
  {
    kind: 'TOGGLE_GROUP',
    items: [
      {
        children: <TextAlignLeftIcon />,
        props: { value: 'left', 'aria-label': 'Left aligned' },
      },
      {
        children: <TextAlignCenterIcon />,
        props: { value: 'center', 'aria-label': 'Center aligned' },
      },
      {
        children: <TextAlignRightIcon />,
        props: { value: 'right', 'aria-label': 'Right aligned' },
      },
    ],
    props: {
      type: 'single',
      defaultValue: 'center',
      'aria-label': 'Text alignment',
    },
  },
  { kind: 'SEPARATOR' },
  {
    kind: 'LINK',
    props: {
      href: '#',
      target: '_blank',
      css: { marginRight: 10 },
    },
    children: 'Edited 2 hours ago',
  },
  {
    kind: 'BUTTON',
    props: { css: { marginLeft: 'auto' } },
    children: 'Share',
  },
]

const CheckboxPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedToolbar items={items} />
      </Showcase>
    </Layout>
  )
}

export default CheckboxPage
