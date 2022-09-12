import Layout from 'components/Layout'
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'components/radix'
import Showcase from 'components/Showcase'
import { Button } from 'components/ui'
import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

const CheckboxPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <Layout>
      <Showcase>
        <ToastProvider swipeDirection="right">
          <Button
            onClick={() => {
              setOpen(false)
              window.clearTimeout(timerRef.current)
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway()
                setOpen(true)
              }, 100)
            }}
          >
            Add to calendar
          </Button>

          <Toast open={open} onOpenChange={setOpen}>
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastDescription asChild>
              <time dateTime={eventDateRef.current.toISOString()}>
                {prettyDate(eventDateRef.current)}
              </time>
            </ToastDescription>
            <ToastAction asChild altText="Goto schedule to undo">
              <Button color="green">Undo</Button>
            </ToastAction>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      </Showcase>
    </Layout>
  )
}

export default CheckboxPage
