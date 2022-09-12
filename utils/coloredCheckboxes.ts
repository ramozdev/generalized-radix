export function coloredCheckboxes(colors: string[]) {
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
        backgroundColor: `$${color}3`,
        boxShadow: `0 0 0 1px $colors$${color}7`,
        '&:hover': { backgroundColor: `$${color}4` },
        '&:focus, &:focus-visible': {
          boxShadow: `0 0 0 2px $colors$${color}8`,
        },
      },
    }
  })
  return obj
}

export function coloredCheckboxIndicators(colors: string[]) {
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
        '& svg': { color: `$${color}11` },
      },
    }
  })
  return obj
}
