import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { Homepage } from './components/Homepage'
import { AboutPage } from './components/AboutPage'
import { ServicesPage } from './components/ServicesPage'
import { IndustriesPage } from './components/IndustriesPage'
import { ProductsPage } from './components/ProductsPage'
import { ContactPage } from './components/ContactPage'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use JSX renderer middleware
app.use(renderer)

// Routes
app.get('/', (c) => {
  return c.render(<Homepage />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

app.get('/services', (c) => {
  return c.render(<ServicesPage />)
})

app.get('/industries', (c) => {
  return c.render(<IndustriesPage />)
})

app.get('/products', (c) => {
  return c.render(<ProductsPage />)
})

app.get('/contact', (c) => {
  return c.render(<ContactPage />)
})

// API route for contact form
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // In a real implementation, you would send emails or store in database
  console.log('Contact form submission:', body)
  
  return c.json({ 
    success: true, 
    message: 'Thank you for your inquiry. We will contact you soon.' 
  })
})

export default app
