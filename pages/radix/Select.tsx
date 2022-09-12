import Layout from 'components/Layout'
import { GeneralizedSelect, GeneralizedSelectProps } from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const items: GeneralizedSelectProps['items'] = [
  {
    label: { children: 'Fruits' },
    items: [
      { props: { value: 'apple' }, label: 'Apple' },
      { props: { value: 'banana' }, label: 'Banana' },
      { props: { value: 'blueberry' }, label: 'Blueberry' },
      { props: { value: 'grapes' }, label: 'Grapes' },
      { props: { value: 'pineapple' }, label: 'Pineapple' },
    ],
  },
  {
    label: { children: 'Vegetables' },
    items: [
      { props: { value: 'aubergine' }, label: 'Aubergine' },
      { props: { value: 'broccoli' }, label: 'Broccoli' },
      { props: { value: 'carrot', disabled: true }, label: 'Carrot' },
      { props: { value: 'courgette' }, label: 'Courgette' },
      { props: { value: 'leek' }, label: 'Leek' },
    ],
  },
  {
    label: { children: 'Meat' },
    items: [
      { props: { value: 'beef' }, label: 'Beef' },
      { props: { value: 'chicken' }, label: 'Chicken' },
      { props: { value: 'lamb' }, label: 'Lamb' },
      { props: { value: 'pork' }, label: 'Pork' },
    ],
  },
]

const SelectPage: NextPage = () => (
  <Layout>
    <Showcase>
      <GeneralizedSelect
        items={items}
        selectValueProps={{ placeholder: 'Select food…' }}
      />
    </Showcase>
  </Layout>
)

export default SelectPage
