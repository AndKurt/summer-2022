import React from 'react';
import styles from './ListItemRepo.module.scss';

interface IListItemRepo {
  link: string;
  repoName: string;
  repoDesciption: string;
}

export const ListItemRepo = ({ link, repoName, repoDesciption }: IListItemRepo) => {
  return (
    <li className={styles.itemRepo}>
      <a href="#" rel="noreferrer noopener">
        {/*<a href={link} rel="noreferrer noopener">*/}
        <h4>react-hot-loader{repoName}</h4>
      </a>
      <p>
        Tweak React components in real time. (Deprecated: use Fast Refresh instead.{repoDesciption}
      </p>
    </li>
  );
};
