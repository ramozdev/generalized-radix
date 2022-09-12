import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Box, Card, Flex, Grid } from 'components/ui'
import { NextPage } from 'next'
import { useState } from 'react'
import CardVariantSelector, {
  Color,
  Variant,
} from 'components/ui/variants/CardVariantSelector'

const CardPage: NextPage = () => {
  const color = useState<Color>('gray')
  const outlined = useState(false)
  const variant = useState<Variant>('interactive')

  const state = { color, outlined, variant }

  return (
    <Layout>
      <Showcase title="Card">
        <Box css={{ mb: 20 }}>
          <pre>
            {outlined[0] && 'outlined'} variant="{variant[0]}" color="
            {color[0]}"
          </pre>
        </Box>
        <Flex css={{ gap: 40 }}>
          <Card
            css={{ w: 300, h: 400 }}
            color={color[0]}
            outlined={outlined[0]}
            variant={variant[0]}
          />
          <Grid css={{ gap: 20 }}>
            <CardVariantSelector {...state} />
          </Grid>
        </Flex>
      </Showcase>
    </Layout>
  )
}

export default CardPage
