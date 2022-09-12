export function coloredBadges(colors: string[]) {
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
        '&:focus': {
          boxShadow: `inset 0 0 0 1px $colors$${color}8, 0 0 0 1px $colors$${color}8`,
        },
      },
    }

    obj['compoundVariants'] = [
      ...obj.compoundVariants,
      {
        interactive: true,
        color,
        css: {
          '&:hover': {
            backgroundColor: `$${color}4`,
          },
          '&:active': {
            backgroundColor: `$${color}5`,
          },
          '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
            {
              backgroundColor: `$${color}5`,
            },
        },
      },
    ]
  })
  return obj
}
