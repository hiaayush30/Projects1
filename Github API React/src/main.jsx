import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchAppBar from './components/SearchAppBar.jsx'
import HandleError from './components/HandleError.jsx'
import { UsersContextProvider } from './context/UsersContext.jsx'
import { SingleUserContextProvider } from './context/SingleUserContext.jsx'
import SingleUser from './pages/SingleUser.jsx'
import SearchUser from './pages/SearchUser.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/search', element: <SearchUser /> },
  { path: '/home', element: <SearchAppBar /> },
  { path: '/user/*', element: <SingleUser /> },
  { path: '*', element: <HandleError /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingleUserContextProvider>
      <UsersContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </UsersContextProvider>
    </SingleUserContextProvider>
  </StrictMode>,
)
