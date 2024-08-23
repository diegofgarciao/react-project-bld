import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './app/auth/pages/LoginPage';
//import DashboardPage from './app/dashboard/pages/DashboardPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
                {/* Otras rutas */}
            </Routes>
        </Router>
    );
}

export default App;
