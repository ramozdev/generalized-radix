import { ComponentProps, FC } from 'react'
import { styled } from 'stitches.config'

export const Caption = styled('caption', {
  marginBottom: 8,
})

export const Tbody = styled('tbody', {
  width: '100%',
})

export const Tfoot = styled('tfoot', {
  display: 'block',
  marginTop: 8,
})

export const Tr = styled('tr', {})

export const Th = styled('th', {
  color: '$gray11',
  textAlign: 'start',
  fontWeight: 600,
  py: 4,
  borderBottom: '1px solid $gray4',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  '&:first-child': {
    paddingLeft: 8,
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
})

export const Td = styled('td', {
  py: 4,
  borderBottom: '1px solid $gray4',
  fontSize: '$2',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  '&:first-child': {
    paddingLeft: 8,
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
})

export const Thead = styled('thead', {})

export const Table = styled('table', {
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              backgroundColor: '$gray2',
            },
          },
        },
      },
    },
  },
})

export type GeneralizedTableProps = {
  root?: ComponentProps<typeof Table>
  columns: { [key: string]: string; name: string }[]
  data: { [key: string]: string }[]
}

export const GeneralizedTable: FC<GeneralizedTableProps> = ({
  root,
  columns,
  data,
}) => (
  <Table {...root}>
    <Thead>
      <Tr>
        {columns.map((column, index) => (
          <Th key={`th-${index}`}>{column.name}</Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {data.map((row, index) => (
        <Tr key={`tr-${index}`}>
          {Object.entries(row).map(([key, value]) => (
            <Td key={`${key}:${value}`}>{value}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
)
