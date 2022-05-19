import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InitialPage, MainPage, NotFoundPage } from '../pages';

export const router = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
