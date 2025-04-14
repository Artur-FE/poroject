import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from "./styles/GlobalStyles"
import Layout from './components/Layout/Layout'
import LoginForm from './pages/LoginForm/LoginForm'
import UserData from './pages/UserData/UserData'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import UserHistory from './pages/UserHistory/UserHistory'


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
        <Route path='/user-history' element={<UserHistory />}/>
        {/* обработка ошибки 404 */}
        <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
