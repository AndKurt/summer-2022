import React from 'react';
import { ListItemRepo } from '..';
import styles from './RepoContainer.module.scss';

export const RepoContainer = () => {
  return (
    <div className={styles.repoContainer}>
      <h2>Repositories (249)</h2>
      <ul className={styles.listRepos}>
        <ListItemRepo link={''} repoName={''} repoDesciption={''} />
      </ul>
    </div>
  );
};
