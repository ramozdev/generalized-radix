import { Label } from 'components/radix'
import { Box, Button, Card, Flex, Input } from 'components/ui'
import { Grid } from 'components/ui/Grid'
import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

export const InputWrapper = forwardRef<
  ElementRef<typeof Box>,
  ComponentPropsWithoutRef<typeof Box>
>(({ children, css, ...props }, forwardedRef) => (
  <Box
    css={{
      colSpan: 'full',
      '@bp1': {
        colSpan: 2,
      },
      ...css,
    }}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Box>
))

const SignUpForm: FC = () => {
  return (
    <Card outlined>
      <Grid columns={{ '@initial': 4, '@bp1': 6 }} css={{ gap: 24, mb: 24 }}>
        <InputWrapper>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Pablo" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Mendoza" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="pablo@example.com" />
        </InputWrapper>
        <InputWrapper css={{ gridColumn: '1 / -1' }}>
          <Label htmlFor="street">Street Address</Label>
          <Input id="street" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="city">City</Label>
          <Input id="city" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="stateProvince">State / Province</Label>
          <Input id="stateProvince" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="zip">ZIP / Postal Code</Label>
          <Input id="zip" type="number" />
        </InputWrapper>
      </Grid>
      <Flex css={{ gap: 16, justifyContent: 'end' }}>
        <Button color="red" ghost>
          Cancel
        </Button>
        <Button color="sky" outlined>
          Save
        </Button>
        <Button color="green">Submit</Button>
      </Flex>
    </Card>
  )
}

export default SignUpForm
