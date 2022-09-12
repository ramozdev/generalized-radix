export function coloredInputs(colors: string[]) {
  let obj: { [key: string]: any } = {
    variants: {
      color: {},
    },
    compoundVariants: [],
  }

  colors.forEach((color) => {
    obj['variants']['color'] = {
      ...obj.variants.color,
      [`${color}`]: {
        color: `$${color}12`,
        backgroundColor: `$${color}1`,
        boxShadow: `0 0 0 1px $colors$${color}7`,
        '&:focus, &:focus-visible': {
          boxShadow: `0 0 0 2px $colors$${color}8`,
        },
        '&::placeholder': {
          color: `$${color}11`,
        },
      },
    }
  })
  return obj
}
