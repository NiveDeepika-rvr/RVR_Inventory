import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  

        {/* Protected routes */}
        <Route path="/" element={
       
            <MainLayout />
    
        }>
        
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
