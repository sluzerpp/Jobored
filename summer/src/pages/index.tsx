import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const CatalogPage = lazy(() => import('./catalog'));
const FavoritesPage = lazy(() => import('./favorites'));

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<CatalogPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='*' element={<Navigate to={'/'}></Navigate>} />
        </Routes>
    );
};