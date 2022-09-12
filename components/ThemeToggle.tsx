import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { FC } from 'react'
import { useTheme } from 'next-themes'
import { Button } from './ui'

const ThemeToggle: FC = () => {
  if (typeof window === 'undefined') return null
  const { setTheme, resolvedTheme, theme } = useTheme()

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light'

    setTheme(targetTheme)
  }

  return (
    <Button
      ghost="true"
      css={{
        borderRadius: '$round',
        cursor: 'pointer',
        padding: 8,
      }}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <SunIcon height={24} width={24} />
      ) : (
        <MoonIcon height={24} width={24} />
      )}
    </Button>
  )
}

export default ThemeToggle
