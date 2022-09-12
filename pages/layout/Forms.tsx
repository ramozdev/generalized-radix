import Layout from 'components/Layout'
import NotificationsSettingsForm from 'components/layouts/NotificationSettingsForm'
import SignUpForm from 'components/layouts/SignUpForm'
import Showcase from 'components/Showcase'

const Forms = () => {
  return (
    <Layout>
      <Showcase>
        <SignUpForm />
        <NotificationsSettingsForm />
      </Showcase>
    </Layout>
  )
}

export default Forms
