import { jsxRenderer } from 'hono/jsx-renderer'
import { Layout } from './components/Layout'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <Layout>{children}</Layout>
  )
})
