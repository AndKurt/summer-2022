import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { InitialPage, MainPage, NotFoundPage } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/main/" element={<MainPage />} />
      <Route path="/main/:userName" element={<MainPage />} />
      <Route path="/notFound" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/notFound" />} />
    </Routes>
  );
};
