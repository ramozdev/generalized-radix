import Layout from 'components/Layout'
import { GeneralizedSlider } from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'

const SliderPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedSlider
          defaultValue={[50]}
          max={100}
          step={1}
          aria-label="Volume"
        />
      </Showcase>
    </Layout>
  )
}

export default SliderPage
