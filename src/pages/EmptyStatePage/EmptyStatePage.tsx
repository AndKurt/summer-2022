import React, { useEffect } from 'react';
import { EmptyRepoContainer, Header, InfoContainer } from '../../components';
import notFound from '../../assets/img/svg/notFound.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './EmptyStatePage.module.scss';
import clsx from 'clsx';
import { userSlice } from '../../redux/reducers/userSlice';

export const EmptyStatePage = () => {
  const { userData } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const { resetError } = userSlice.actions;

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch, resetError]);

  return (
    <main className={styles.emptyStatePage}>
      <Header />
      <div className={clsx(styles.container, !userData && styles.notFound)}>
        {userData ? (
          <>
            <InfoContainer />
            <EmptyRepoContainer />
          </>
        ) : (
          <>
            <img src={notFound} alt="notFound-img" className={styles.notFoundImg} />
            <h1>User not found</h1>
          </>
        )}
      </div>
    </main>
  );
};
