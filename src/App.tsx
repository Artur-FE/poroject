// import { BrowserRouter } from 'react-router-dom'
// import GlobalStyles from "./styles/GlobalStyles"


// function App() {

//   return (
//     //BrowserRouter - глобальная обёртка для всего приложения,
//     // которая позволяет использовать маршрутизацию
//     <BrowserRouter>
//       <GlobalStyles />
      
//     </BrowserRouter>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import UserData from "./pages/UserData/UserData";
import { UserProvider, useUser } from "./context/UserContext";
import { JSX } from "react/jsx-dev-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/user-data" element={<UserData />} />
          <Route path="/user" element={ 
            <ProtectedRoute> 
              <UserData />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
