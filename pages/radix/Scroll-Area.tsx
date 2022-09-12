import Layout from 'components/Layout'
import { GeneralizedScrollArea } from 'components/radix'
import Showcase from 'components/Showcase'
import { Box } from 'components/ui'
import { NextPage } from 'next'
import { styled } from 'stitches.config'

const Text = styled('div', {
  color: '$violet11',
  fontSize: 15,
  lineHeight: '18px',
  fontWeight: 500,
})
const Tag = styled('div', {
  color: '$mauve12',
  fontSize: 13,
  lineHeight: '18px',
  marginTop: 10,
  borderTop: `1px solid ${'$mauve6'}`,
  paddingTop: 10,
})

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const CheckboxPage: NextPage = () => {
  return (
    <Layout>
      <Showcase>
        <GeneralizedScrollArea>
          <Box style={{ padding: '15px 20px' }}>
            <Text>Tags</Text>
            {TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Box>
        </GeneralizedScrollArea>
      </Showcase>
    </Layout>
  )
}

export default CheckboxPage
