import {
  // Colors
  blue,
  brown,
  crimson,
  cyan,
  grass,
  green,
  indigo,
  orange,
  pink,
  plum,
  purple,
  red,
  teal,
  tomato,
  violet,
  // Bright Colors
  amber,
  lime,
  mint,
  sky,
  yellow,
  // Grays
  gray,
  mauve,
  olive,
  sage,
  sand,
  slate,
  // Metals
  bronze,
  gold,
  //////////////
  // Colors
  blueA,
  brownA,
  crimsonA,
  cyanA,
  grassA,
  greenA,
  indigoA,
  orangeA,
  pinkA,
  plumA,
  purpleA,
  redA,
  tealA,
  tomatoA,
  violetA,
  // Bright Colors
  amberA,
  limeA,
  mintA,
  skyA,
  yellowA,
  // Grays
  grayA,
  mauveA,
  oliveA,
  sageA,
  sandA,
  slateA,
  // Metals
  bronzeA,
  goldA,
  ///////////
  // Colors
  blueDark,
  brownDark,
  crimsonDark,
  cyanDark,
  grassDark,
  greenDark,
  indigoDark,
  orangeDark,
  pinkDark,
  plumDark,
  purpleDark,
  redDark,
  tealDark,
  tomatoDark,
  violetDark,
  // Bright Colors
  amberDark,
  limeDark,
  mintDark,
  skyDark,
  yellowDark,
  // Grays
  grayDark,
  mauveDark,
  oliveDark,
  sageDark,
  sandDark,
  slateDark,
  // Metals
  bronzeDark,
  goldDark,
  //////////////
  // Colors
  blueDarkA,
  brownDarkA,
  crimsonDarkA,
  cyanDarkA,
  grassDarkA,
  greenDarkA,
  indigoDarkA,
  orangeDarkA,
  pinkDarkA,
  plumDarkA,
  purpleDarkA,
  redDarkA,
  tealDarkA,
  tomatoDarkA,
  violetDarkA,
  // Bright Colors
  amberDarkA,
  limeDarkA,
  mintDarkA,
  skyDarkA,
  yellowDarkA,
  // Grays
  grayDarkA,
  mauveDarkA,
  oliveDarkA,
  sageDarkA,
  sandDarkA,
  slateDarkA,
  // Metals
  bronzeDarkA,
  goldDarkA,
  /////////
  whiteA,
  blackA,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { reset } from 'utils/reset'

export type CSS = Stitches.CSS<typeof config>
export type CSSProps = { css?: CSS }

export const { createTheme, keyframes, styled, globalCss, config } =
  createStitches({
    theme: {
      colors: {
        // Colors
        ...blue,
        ...brown,
        ...crimson,
        ...cyan,
        ...grass,
        ...green,
        ...indigo,
        ...orange,
        ...pink,
        ...plum,
        ...purple,
        ...red,
        ...teal,
        ...tomato,
        ...violet,
        // Bright Colors
        ...amber,
        ...lime,
        ...mint,
        ...sky,
        ...yellow,
        // Grays
        ...gray,
        ...mauve,
        ...olive,
        ...sage,
        ...sand,
        ...slate,
        // Metals
        ...bronze,
        ...gold,
        //////////////
        // Colors
        ...blueA,
        ...brownA,
        ...crimsonA,
        ...cyanA,
        ...grassA,
        ...greenA,
        ...indigoA,
        ...orangeA,
        ...pinkA,
        ...plumA,
        ...purpleA,
        ...redA,
        ...tealA,
        ...tomatoA,
        ...violetA,
        // Bright Colors
        ...amberA,
        ...limeA,
        ...mintA,
        ...skyA,
        ...yellowA,
        // Grays
        ...grayA,
        ...mauveA,
        ...oliveA,
        ...sageA,
        ...sandA,
        ...slateA,
        // Metals
        ...bronzeA,
        ...goldA,
        ///////////
        ...whiteA,
        ...blackA,
      },
      space: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '20px',
        5: '24px',
      },
      fontSizes: {
        // title/h1
        // h2 (title)
        // h3 (title)
        // Subtitle (big copy)
        // Strong (Bold)
        // Em (Emphasized)
        // Body copy
        // Small copy
        // Button text
        // Pre title
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.875rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1.125rem',
        body: '1rem',
        small: '0.875rem',
        tiny: '0.75rem',
      },
      fontWeights: {
        h1: 700,
        h2: 700,
        h3: 600,
        h4: 600,
        h5: 600,
        h6: 600,
        body: 500,
        small: 500,
        tiny: 500,
        bold: 900,
      },
      fonts: {
        sans: 'apple-system, sans-serif',
        mono: 'monospace',
      },
      lineHeights: {
        h1: 1,
        h2: '2.5rem',
        h3: '2.25rem',
        h4: '2rem',
        h5: '1.75rem',
        h6: '1.125rem',
        body: '1.5rem',
        small: '1.25rem',
        tiny: '1rem',
      },
      letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      sizes: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
      },
      radii: {
        pill: '50%',
        round: '9999px',
      },
      shadows: {},
      transitions: {},
    },
    utils: {
      // MARGIN
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mx: (value: Stitches.PropertyValue<'margin'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'margin'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      mt: (value: Stitches.PropertyValue<'margin'>) => ({
        marginTop: value,
      }),
      mb: (value: Stitches.PropertyValue<'margin'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'margin'>) => ({
        marginLeft: value,
      }),
      mr: (value: Stitches.PropertyValue<'margin'>) => ({
        marginRight: value,
      }),

      // PADDING
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      px: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      pt: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
      }),
      pb: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingLeft: value,
      }),
      pr: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingRight: value,
      }),
      // DIMENSIONS
      w: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
      }),
      h: (value: Stitches.PropertyValue<'height'>) => ({
        height: value,
      }),

      // GRID
      colSpan: (value: number | 'full') => {
        if (value === 'full') {
          return {
            gridColumn: '1 / -1',
          }
        }
        return {
          gridColumn: `span ${value} / span ${value}`,
        }
      },
    },
    media: {
      bp1: '(min-width: 600px)',
      bp2: '(min-width: 905px)',
      bp3: '(min-width: 1240px)',
      bp4: '(min-width: 1440px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
  })

export const globalStyles = globalCss(reset)

export const darkTheme = createTheme({
  colors: {
    // Colors
    ...blueDark,
    ...brownDark,
    ...crimsonDark,
    ...cyanDark,
    ...grassDark,
    ...greenDark,
    ...indigoDark,
    ...orangeDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...redDark,
    ...tealDark,
    ...tomatoDark,
    ...violetDark,
    // Bright Colors
    ...amberDark,
    ...limeDark,
    ...mintDark,
    ...skyDark,
    ...yellowDark,
    // Grays
    ...grayDark,
    ...mauveDark,
    ...oliveDark,
    ...sageDark,
    ...sandDark,
    ...slateDark,
    // Metals
    ...bronzeDark,
    ...goldDark,
    //////////////
    // Colors
    ...blueDarkA,
    ...brownDarkA,
    ...crimsonDarkA,
    ...cyanDarkA,
    ...grassDarkA,
    ...greenDarkA,
    ...indigoDarkA,
    ...orangeDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...redDarkA,
    ...tealDarkA,
    ...tomatoDarkA,
    ...violetDarkA,
    // Bright Colors
    ...amberDarkA,
    ...limeDarkA,
    ...mintDarkA,
    ...skyDarkA,
    ...yellowDarkA,
    // Grays
    ...grayDarkA,
    ...mauveDarkA,
    ...oliveDarkA,
    ...sageDarkA,
    ...sandDarkA,
    ...slateDarkA,
    // Metals
    ...bronzeDarkA,
    ...goldDarkA,
  },
})

// https://rude.im/blog/dark-theme-with-stitches-and-next-js

// type ColorsKeys = keyof typeof darkTheme.colors

// export const globalStyles = globalCss({
//   '@dark': {
//     // notice the `media` definition on the stitches.config.ts file
//     ':root:not(.light)': {
//       ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
//         const currentColor = darkTheme.colors[currentColorKey as ColorsKeys]
//         const currentColorValue =
//           currentColor.value.substring(0, 1) === '$'
//             ? `$colors${currentColor.value}`
//             : currentColor.value

//         return {
//           [currentColor.variable]: currentColorValue,
//           ...varSet,
//         }
//       }, {}),
//     },
//   },
// })
