import React from 'react';
import { EmptyRepoContainer, Header, InfoContainer, RepoContainer } from '../../components';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <Header />
      <div className={styles.container}>
        <InfoContainer />
        <RepoContainer />
        {/*<EmptyRepoContainer />*/}
      </div>
    </main>
  );
};
