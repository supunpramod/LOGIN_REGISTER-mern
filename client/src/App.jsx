import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fixed import statement
import Login from './Login.jsx'; // Import the Login component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;