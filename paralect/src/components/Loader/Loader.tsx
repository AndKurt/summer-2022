import React from 'react';
import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.overlay}>
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  </div>
);
