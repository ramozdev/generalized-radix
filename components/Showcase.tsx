import { FC } from 'react'
import { Box, Grid, Text } from './ui'

type Props = {
  title?: string
  description?: string
  variants?: object
}

const Showcase: FC<Props> = ({ title, variants, children }) => {
  return (
    <Box
      css={{
        flexGrow: 1,
        w: '100%',
        overflow: 'auto',
        mx: 'auto',
        py: 30,
        maxWidth: '65ch',
        px: 20,
        '@bp3': {
          px: 0,
        },
      }}
    >
      {title && (
        <Text as="h1" kind="h1">
          {title}
        </Text>
      )}
      <Grid
        as="article"
        css={{ pt: 24, mx: 'auto', placeItems: 'start center' }}
      >
        {children}
      </Grid>
      {variants && (
        <Box>
          <Text kind="h3" as="h3" css={{ mb: 12 }}>
            Variants
          </Text>
          <pre>{JSON.stringify(variants, null, 2)}</pre>
        </Box>
      )}
    </Box>
  )
}

export default Showcase
