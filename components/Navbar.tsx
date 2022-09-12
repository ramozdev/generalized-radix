import ThemeToggle from './ThemeToggle'
import { Flex } from './ui'

const Navbar = () => {
  return (
    <Flex
      as="nav"
      css={{
        backgroundColor: '$gray1',
        alignItems: 'center',
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        position: 'fixed',
        px: 16,
        py: 12,
      }}
    >
      <div>Logo</div>
      <Flex as="section" css={{ gap: 8, alignItems: 'center' }}>
        <div>ITEM</div>
        <div>ITEM</div>
        <ThemeToggle />
      </Flex>
    </Flex>
  )
}

export default Navbar
