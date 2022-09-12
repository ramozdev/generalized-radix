import { FC, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Box, Flex } from './ui'

const Layout: FC = ({ children }) => {
  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <Navbar />

      <Flex
        css={{
          paddingTop: 64, // Move content below navbar
          height: '100vh',
        }}
      >
        <Sidebar />
        <Box css={{ px: 20, height: '100%', width: '100%', overflow: 'auto' }}>
          {children}
        </Box>
      </Flex>
    </>
  )
}

export default Layout
