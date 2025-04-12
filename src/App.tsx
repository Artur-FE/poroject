import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from "./styles/GlobalStyles"
import Layout from './components/Layout/Layout'
import LoginForm from './pages/LoginForm/LoginForm'
import UserData from './pages/UserData/UserData'


function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/user' element={<UserData />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
