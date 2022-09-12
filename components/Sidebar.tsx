import Link from 'next/link'
import { FC } from 'react'
import { Button, Grid, Text } from './ui'
import slugify from 'slugify'

const radixComponents = [
  'Accordion',
  'Alert Dialog',
  'Aspect Ratio',
  'Avatar',
  'Checkbox',
  'Collapsible',
  'Context Menu',
  'Dialog',
  'Dropdown Menu',
  'Hover Card',
  'Label',
  'Navigation Menu',
  'Popover',
  'Progress',
  'Radio Group',
  'Scroll Area',
  'Select',
  'Separator',
  'Slider',
  'Switch',
  'Tabs',
  'Toast',
  'Toggle Group',
  'Toggle',
  'Toolbar',
  'Tooltip',
]

const uiComponents = [
  'Badge',
  'Box',
  'Button',
  'Card',
  'Center',
  'Code',
  'Container',
  'Flex',
  'Grid',
  'Input',
  'Kbd',
  'Link',
  'Table',
  'Text Area',
  'Text',
]

const layoutComponents = ['Forms']

const Sidebar: FC = () => {
  return (
    <Grid
      as="nav"
      css={{
        padding: '10px 0',
        width: 280,
        overflow: 'auto',
        height: '100%',
      }}
    >
      <Text kind="h6" css={{ px: 16, py: 8 }}>
        Radix Components
      </Text>
      {radixComponents.map((value) => (
        <Link key={value} href={`/radix/${slugify(value)}`} passHref>
          <Button ghost as="a" css={{ px: 28 }}>
            {value}
          </Button>
        </Link>
      ))}
      <Text kind="h6" css={{ px: 16, py: 8 }}>
        UI Components
      </Text>
      {uiComponents.map((value) => (
        <Link key={value} href={`/ui/${slugify(value)}`} passHref>
          <Button ghost as="a" css={{ px: 28 }}>
            {value}
          </Button>
        </Link>
      ))}
      <Text kind="h6" css={{ px: 16, py: 8 }}>
        Layout Components
      </Text>
      {layoutComponents.map((value) => (
        <Link key={value} href={`/layout/${slugify(value)}`} passHref>
          <Button ghost as="a" css={{ px: 28 }}>
            {value}
          </Button>
        </Link>
      ))}
    </Grid>
  )
}

export default Sidebar
