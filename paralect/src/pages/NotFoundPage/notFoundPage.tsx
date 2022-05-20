import React from 'react';
import { Header } from '../../components';
import styles from './NotFoundPage.module.scss';
import notFound from '../../assets/img/svg/notFound.svg';

export const NotFoundPage = () => {
  return (
    <main className={styles.notFoundPage}>
      <Header />
      <div className={styles.container}>
        <img src={notFound} alt="notFound-img" />
        <h1>User not found</h1>
      </div>
    </main>
  );
};
