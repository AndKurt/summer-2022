import React from 'react';
import styles from './EmptyRepoContainer.module.scss';
import emptyRepo from '../../assets/img/svg/emptyRepo.svg';

export const EmptyRepoContainer = () => {
  return (
    <div className={styles.emptyRepoContainer}>
      <img src={emptyRepo} alt="emptyRepo-img" />
      <h1>Repository list is empty</h1>
    </div>
  );
};
