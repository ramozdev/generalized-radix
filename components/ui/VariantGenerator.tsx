import { GeneralizedRadioGroup, GeneralizedScrollArea } from 'components/radix'
import { CheckboxWithLabel } from 'components/radix/CheckboxWithLabel'
import { Box } from './Box'
import { Text } from './Text'

export type Items = {
  [key: string]:
    | {
        kind: 'CHECKBOX'
        state: [any, React.Dispatch<React.SetStateAction<any>>]
      }
    | {
        kind: 'RADIO_GROUP' | 'RADIO_GROUP_LARGE'
        keys: string[]
        state: [any, React.Dispatch<React.SetStateAction<any>>]
      }
}

export function generateSelectors(items: Items) {
  return Object.entries(items).map(([key, item]) => {
    switch (item.kind) {
      case 'CHECKBOX':
        return (
          <CheckboxWithLabel
            key={key}
            checkboxProps={{
              id: key,
              defaultChecked: item.state[0],
              onCheckedChange: (value) => item.state[1](value as boolean),
            }}
          >
            {key}
          </CheckboxWithLabel>
        )
      case 'RADIO_GROUP':
        return (
          <Box key={key}>
            <Text kind="h6" css={{ marginBottom: 12 }}>
              {key}
            </Text>
            <GeneralizedRadioGroup
              value={item.state[0]}
              onValueChange={(value) => item.state[1](value)}
              defaultValue={item.keys[0]}
              items={item.keys.map((value) => ({
                props: {
                  value,
                },
              }))}
              css={{
                paddingLeft: 10,
                display: 'grid',
                gap: 12,
              }}
            />
          </Box>
        )
      case 'RADIO_GROUP_LARGE':
        return (
          <Box key={key}>
            <Text kind="h6" css={{ marginBottom: 12 }}>
              {key}
            </Text>
            <GeneralizedScrollArea>
              <GeneralizedRadioGroup
                value={item.state[0]}
                onValueChange={(value) => item.state[1](value)}
                defaultValue={item.keys[0]}
                items={item.keys.map((value) => ({
                  props: {
                    value,
                  },
                }))}
                css={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  display: 'grid',
                  gap: 12,
                }}
              />
            </GeneralizedScrollArea>
          </Box>
        )
    }
  })
}
