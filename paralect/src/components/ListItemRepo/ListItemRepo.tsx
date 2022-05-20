import React from 'react';
import { IReposDataFromApi } from '../../interfaces';
import styles from './ListItemRepo.module.scss';

export const ListItemRepo = ({ name, description, html_url }: IReposDataFromApi) => {
  return (
    <li className={styles.itemRepo}>
      <a href={html_url} rel="noreferrer noopener" target="_blank">
        <h4>{name}</h4>
      </a>
      <p>{description}</p>
    </li>
  );
};
