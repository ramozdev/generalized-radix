import Layout from 'components/Layout'
import { Grid, Text } from 'components/ui'
import { NextPage } from 'next'

const TextPage: NextPage = () => {
  return (
    <Layout>
      <Grid>
        <Text kind="h1" as="h1">
          h1 lorem ipsum
        </Text>
        <Text kind="h2" as="h2">
          h2 lorem ipsum
        </Text>
        <Text kind="h3" as="h3">
          h3 lorem ipsum
        </Text>
        <Text kind="h4" as="h4">
          h4 lorem ipsum
        </Text>
        <Text kind="h5" as="h5">
          h5 lorem ipsum
        </Text>
        <Text kind="h6" as="h6">
          h6 lorem ipsum
        </Text>
        <Text as="div">body lorem ipsum</Text>
        <Text kind="small">small lorem ipsum</Text>
        <Text kind="tiny">tiny lorem ipsum</Text>
      </Grid>
    </Layout>
  )
}

export default TextPage
