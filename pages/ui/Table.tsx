import Layout from 'components/Layout'
import { GeneralizedTable } from 'components/ui'
import { NextPage } from 'next'

const columns = [
  {
    id: 'name',
    name: 'Name',
  },
  {
    id: 'email',
    name: 'Email',
  },
  {
    id: 'phoneNumber',
    name: 'Phone Number',
  },
]

const data = [
  {
    name: 'Jessica',
    email: 'jessica@example.com',
    phoneNumber: '123 456 7890',
  },
  { name: 'Cesar', email: 'cesar@gmail.com', phoneNumber: '098 765 432' },
]

const TablePage: NextPage = () => {
  return (
    <Layout>
      <GeneralizedTable
        root={{ striped: true }}
        columns={columns}
        data={data}
      />
    </Layout>
  )
}

export default TablePage
