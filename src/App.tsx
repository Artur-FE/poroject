import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from "./styles/GlobalStyles"


function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      
    </BrowserRouter>
  )
}

export default App
