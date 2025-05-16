import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Login from './views/login/Login'
import Plans from './views/plans/Plans'
import Summary from './views/summary/Summary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'plans', element: <Plans /> },
      { path: 'resume', element: <Summary /> }
    ]
  }
])
