import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const useUserState = () => {
  const { userData } = useAppSelector((state) => state.userReducer);
  return userData;
};

export const ProtectedRoute = () => {
  const isUserState = useUserState();

  return isUserState ? <Outlet /> : <Navigate to="/" />;
};
