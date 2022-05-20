import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EmptyStatePage, InitialPage, MainPage, NotFoundPage } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/main/" element={<MainPage />} />
      <Route path="/main/:userName" element={<MainPage />} />
      <Route path="/empty-state" element={<EmptyStatePage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};
