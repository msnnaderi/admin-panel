import './App.css'
import '../public/css/style.css'
import Login from './features/identity/components/login'
import Register from './features/identity/components/register'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
