


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import LoginForm from './pages/components/LoginForm';

import UserData from './components/UserData';

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/user-data" element={<UserData />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;