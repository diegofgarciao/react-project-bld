import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './app/auth/pages/LoginPage';
import DashboardPage from './app/dashboard/pages/DashboardPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* Otras rutas */}
        </Routes>
    );
};

export default AppRoutes;
