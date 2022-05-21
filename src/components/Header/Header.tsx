import React from 'react';
import logo from '../../assets/img/svg/git.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { SearchBar } from '..';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
};
