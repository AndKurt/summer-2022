import React from 'react';
import styles from './InitialPage.module.scss';
import searchBig from '../../assets/img/svg/searchBig.svg';
import { Header } from '../../components';

export const InitialPage = () => {
  return (
    <main className={styles.initialPage}>
      <Header />
      <div className={styles.container}>
        <img src={searchBig} alt="searchBig" />
        <p>Start with searching a GitHub user</p>
      </div>
    </main>
  );
};
