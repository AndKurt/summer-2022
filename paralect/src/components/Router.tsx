import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InitialPage, MainPage, NotFoundPage } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/:userName" element={<MainPage />} />
      <Route path="/main/:userName" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
