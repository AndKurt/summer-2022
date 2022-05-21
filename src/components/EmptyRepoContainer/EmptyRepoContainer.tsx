import React from 'react';
import styles from './EmptyRepoContainer.module.scss';
import emptyRepo from '../../assets/img/svg/emptyRepo.svg';

export const EmptyRepoContainer = () => {
  return (
    <div className={styles.emptyRepoContainer}>
      <img src={emptyRepo} alt="emptyRepo-img" className={styles.emptyImg} />
      <h2>Repository list is empty</h2>
    </div>
  );
};
