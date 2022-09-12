import Layout from 'components/Layout'
import { Progress, ProgressIndicator } from 'components/radix'
import Showcase from 'components/Showcase'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const TooltipPage: NextPage = () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <Showcase>
        <Progress value={66}>
          <ProgressIndicator
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress>
      </Showcase>
    </Layout>
  )
}

export default TooltipPage
