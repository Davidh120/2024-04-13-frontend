import { BrowserRouter, useRoutes } from "react-router-dom"

import {Home} from './pages/Home'
import { Data } from './pages/Data'
import './App.css'

const AppRoutes = () => {
  // this component from react router dom help us to manage the navigation as a static site

  const routes = useRoutes(
      [
        {path: '/', element: <Home/> },
        {path: '/data', element: <Data/> },
      ]
  )
  return routes
}

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
