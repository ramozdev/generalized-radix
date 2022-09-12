import { Checkbox, Label, Radio, RadioGroup } from 'components/radix'
import { Box, Button, Card, Flex, Text } from 'components/ui'
import { Grid } from 'components/ui/Grid'
import { NextPage } from 'next'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

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

const NotificationsSettingsForm: NextPage = () => {
  return (
    <Card outlined>
      <Text kind="h5" as="div" css={{ marginBottom: 16 }}>
        By Email
      </Text>
      <Flex css={{ marginBottom: 16 }}>
        <Checkbox color="plum" />
        <Grid css={{ marginLeft: 8 }}>
          <Text>Comments</Text>
          <Text kind="small">
            Get notified when someones posts a comment on a posting.
          </Text>
        </Grid>
      </Flex>
      <Flex css={{ marginBottom: 16 }}>
        <Checkbox />
        <Grid css={{ marginLeft: 8 }}>
          <Text>Candidates</Text>
          <Text kind="small">
            Get notified when a candidate applies for a job.
          </Text>
        </Grid>
      </Flex>
      <Flex css={{ marginBottom: 16 }}>
        <Checkbox />
        <Grid css={{ marginLeft: 8 }}>
          <Text>Offers</Text>
          <Text kind="small">
            Get notified when a candidate accepts or rejects an offer.
          </Text>
        </Grid>
      </Flex>
      <Text kind="h5" as="div" css={{ marginBottom: 4 }}>
        Push Notifications
      </Text>
      <Text kind="small" as="div" css={{ marginBottom: 16 }}>
        These are delivered via SMS to your mobile phone.
      </Text>
      <RadioGroup>
        <Flex css={{ marginBottom: 16, alignItems: 'center' }}>
          <Radio value="everything" id="everything" />
          <Label css={{ marginLeft: 8 }} htmlFor="everything">
            Everything
          </Label>
        </Flex>
        <Flex css={{ marginBottom: 16, alignItems: 'center' }}>
          <Radio value="same" id="same" color="plum" />
          <Label css={{ marginLeft: 8 }} htmlFor="same">
            Same as email
          </Label>
        </Flex>
        <Flex css={{ marginBottom: 16, alignItems: 'center' }}>
          <Radio value="none" id="none" color="bronze" />
          <Label css={{ marginLeft: 8 }} htmlFor="none">
            No push notifications
          </Label>
        </Flex>
      </RadioGroup>
      <Button color="blue" css={{ marginLeft: 'auto' }}>
        Submit
      </Button>
    </Card>
  )
}

export default NotificationsSettingsForm
