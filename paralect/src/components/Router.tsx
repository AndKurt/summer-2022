import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EmptyStatePage, InitialPage, MainPage, NotFoundPage } from '../pages';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';

export const Router = () => {
  return (
    <Routes>
      <Route path="/main/:userName" element={<MainPage />} />
      <Route path="/" element={<InitialPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/main/" element={<MainPage />} />
      </Route>
      <Route path="/empty-state" element={<EmptyStatePage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};
