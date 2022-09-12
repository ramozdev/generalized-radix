import Layout from 'components/Layout'
import {
  GeneralizedAccordion,
  GeneralizedAccordionProps,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const AccordionPage: NextPage = () => {
  const items: GeneralizedAccordionProps['items'] = [
    {
      itemProps: {
        value: 'item-1',
      },
      trigger: { children: 'Is it accessible?' },
      content: { children: 'Yes. It adheres to the WAI-ARAI design pattern.' },
    },
    {
      itemProps: {
        value: 'item-2',
      },
      trigger: { children: 'Is it unstyled?' },
      content: {
        children: `Yes. It's unstyled by default, giving you freedom over the look and feel.`,
      },
    },
    {
      itemProps: {
        value: 'item-3',
      },
      trigger: { children: 'Can it be animated?' },
      content: {
        children: 'Yes! You can animate the Accordion with CSS or JavaScript.',
      },
    },
  ]

  return (
    <Layout>
      <Showcase>
        <GeneralizedAccordion
          type="single"
          defaultValue="item-1"
          collapsible
          items={items}
        />
      </Showcase>
    </Layout>
  )
}

export default AccordionPage
