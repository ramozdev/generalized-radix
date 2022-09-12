export function coloredButtons(colors: string[]) {
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
        color: `$${color}11`,
        '&:hover': {
          backgroundColor: `$${color}4`,
        },
        '&:focus': {
          backgroundColor: `$${color}4`,
        },
        '&:active': {
          backgroundColor: `$${color}5`,
        },
      },
    }

    obj['compoundVariants'] = [
      ...obj.compoundVariants,
      {
        color,
        ghost: 'true',
        css: {
          backgroundColor: 'transparent',
        },
      },
      {
        color,
        outlined: 'true',
        css: {
          boxShadow: `0 0 0 1px $colors$${color}7`,
          '&:focus': {
            boxShadow: `0 0 0 1px $colors$${color}8`,
          },
        },
      },
    ]
  })
  return obj
}
