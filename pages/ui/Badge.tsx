import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Badge, Box, Flex, Grid } from 'components/ui'
import BadgeVariantSelector, {
  Color,
  Interactive,
  Size,
} from 'components/ui/variants/BadgeVariantSelector'
import { NextPage } from 'next'
import { useState } from 'react'

const BadgePage: NextPage = () => {
  const colorState = useState<Color>('gray')
  const interactiveState = useState<Interactive>(false)
  const sizeState = useState<Size>('1')

  const state = { colorState, interactiveState, sizeState }

  return (
    <Layout>
      <Showcase title="Badge">
        <Flex css={{ gap: 40 }}>
          <Box>
            <Badge
              color={colorState[0]}
              interactive={interactiveState[0]}
              size={sizeState[0]}
            >
              Badge
            </Badge>
          </Box>
          <Grid css={{ gap: 20 }}>
            <BadgeVariantSelector {...state} />
          </Grid>
        </Flex>
      </Showcase>
    </Layout>
  )
}

export default BadgePage
