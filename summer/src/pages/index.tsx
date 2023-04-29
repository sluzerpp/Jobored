import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const CatalogPage = lazy(() => import('./catalog'));

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<CatalogPage />} />
            <Route path='*' element={<Navigate to={'/'}></Navigate>} />
        </Routes>
    );
};