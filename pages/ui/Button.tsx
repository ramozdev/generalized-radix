import Layout from 'components/Layout'
import Showcase from 'components/Showcase'
import { Box, Button, Flex, Grid } from 'components/ui'
import ButtonVariantSelector, {
  Color,
  Size,
} from 'components/ui/variants/ButtonVariantSelector'
import { NextPage } from 'next'
import { useState } from 'react'

const ButtonPage: NextPage = () => {
  const ghost = useState(false)
  const outlined = useState(false)
  const size = useState<Size>('1')
  const color = useState<Color>('gray')

  const state = { ghost, outlined, size, color }

  return (
    <Layout>
      <Showcase title="Button">
        <Box css={{ mb: 20 }}>
          <pre>
            {ghost[0] && 'ghost'} {outlined[0] && 'outlined'} size="{size[0]}"
            color="
            {color[0]}"
          </pre>
        </Box>
        <Flex css={{ gap: 40 }}>
          <Box>
            <Button
              ghost={ghost[0]}
              outlined={outlined[0]}
              size={size[0]}
              color={color[0]}
            >
              Button
            </Button>
          </Box>
          <Grid css={{ gap: 20 }}>
            <ButtonVariantSelector {...state} />
          </Grid>
        </Flex>
      </Showcase>
    </Layout>
  )
}

export default ButtonPage
