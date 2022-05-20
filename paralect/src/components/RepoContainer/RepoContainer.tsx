import React from 'react';
import { ListItemRepo } from '..';
import { useAppSelector } from '../../redux/hooks';
import styles from './RepoContainer.module.scss';

export const RepoContainer = () => {
  const { reposData } = useAppSelector((state) => state.reposReducer);
  const { userData } = useAppSelector((state) => state.userReducer);
  return (
    <div className={styles.repoContainer}>
      <h2>Repositories ({userData?.public_repos})</h2>
      <ul className={styles.listRepos}>
        {reposData &&
          reposData.map((repo) => (
            <ListItemRepo
              key={repo.id}
              name={repo.name}
              html_url={repo.html_url}
              description={repo.description}
            />
          ))}
      </ul>
    </div>
  );
};
