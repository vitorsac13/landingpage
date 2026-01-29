import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/page.jsx'
import About from './pages/about/page.jsx'
import Products from './pages/products/page.jsx'
import Health from './pages/health/page.jsx'
import Contact from './pages/contact/page.jsx'

const pages = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/about', element: <About /> },
			{ path: '/health', element: <Health /> },
			{ path: '/products', element: <Products /> },
			{ path: '/contact', element: <Contact /> },
		]
	}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages}></RouterProvider>
  </StrictMode>,
)
