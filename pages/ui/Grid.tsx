import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Box, Grid } from 'components/ui'
import { NextPage } from 'next'

const GridPage: NextPage = () => {
  return (
    <Layout>
      <Showcase title="Grid">
        <Grid>
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Grid>
      </Showcase>
    </Layout>
  )
}

export default GridPage
