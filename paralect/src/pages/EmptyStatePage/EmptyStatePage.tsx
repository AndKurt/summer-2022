import React from 'react';
import { EmptyRepoContainer, Header, InfoContainer } from '../../components';
import notFound from '../../assets/img/svg/notFound.svg';
import { useAppSelector } from '../../redux/hooks';
import styles from './EmptyStatePage.module.scss';
import clsx from 'clsx';

export const EmptyStatePage = () => {
  const { userData } = useAppSelector((state) => state.userReducer);

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
            <img src={notFound} alt="notFound-img" />
            <h1>User not found</h1>
          </>
        )}
      </div>
    </main>
  );
};
