export function coloredCards(colors: string[]) {
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
        backgroundColor: `$${color}2`,
      },
    }

    obj['compoundVariants'] = [
      ...obj.compoundVariants,
      {
        color,
        outlined: 'true',
        css: {
          borderColor: `$${color}6`,
        },
      },
    ]
  })
  return obj
}
