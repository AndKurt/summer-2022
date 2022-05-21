import React from 'react';
import { Header } from '../../components';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <main className={styles.notFoundPage}>
      <Header />
      <div className={styles.container}>
        <h2>Something went wrong...</h2>
        <p>
          Go to <Link to="/">Initial page</Link>
        </p>
      </div>
    </main>
  );
};
