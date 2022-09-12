import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons'
import Layout from 'components/Layout'
import {
  GeneralizedToggleGroup,
  GeneralizedToggleGroupProps,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const items: GeneralizedToggleGroupProps['items'] = [
  {
    props: { value: 'left', 'aria-label': 'Left aligned' },
    children: <TextAlignLeftIcon />,
  },
  {
    props: { value: 'center', 'aria-label': 'Center aligned' },
    children: <TextAlignCenterIcon />,
  },
  {
    props: { value: 'right', 'aria-label': 'Right aligned' },
    children: <TextAlignRightIcon />,
  },
]

const ToggleGroup: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedToggleGroup
          type="single"
          defaultValue="center"
          aria-label="Text alignment"
          items={items}
        />
      </Showcase>
    </Layout>
  )
}

export default ToggleGroup
