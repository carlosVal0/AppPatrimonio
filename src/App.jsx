import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './containers/Layout'
import Login from './components/Login'
import UserDashboard from './containers/UserDashboard'

function App() {

  return (

      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/#/dashboard' element={<UserDashboard />} />
        <Route exact path='/' element={<Layout />} />
        <Route path='*' element={<Layout />} />
      </Routes>
  )
}

export default App
