import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import searchSmall from '../../assets/img/svg/searchSmall.svg';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigation(`/main/${userName}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <img className={styles.searchIcon} src={searchSmall} alt="search--icon" />
      <input
        onChange={handleSearch}
        type="text"
        name="search"
        id="search"
        value={userName}
        placeholder="Enter GitHub username"
        autoComplete="off"
        autoFocus
      />
    </form>
  );
};
