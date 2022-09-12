import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme, globalStyles } from 'stitches.config'
import { GlobalProvider } from 'context/GlobalState'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <GlobalProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: 'light',
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default MyApp
