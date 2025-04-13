import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserContext/UserContext";
import GlobalStyles from "./styles/GlobalStyles";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserDataPage from "./pages/UserDataPage/UserData";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user" element={<UserDataPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
