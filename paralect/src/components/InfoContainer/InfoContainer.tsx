import React from 'react';
import styles from './InfoContainer.module.scss';
import testImg from '../../assets/img/image1.png';
import followers from '../../assets/img/svg/followers.svg';
import following from '../../assets/img/svg/following.svg';

export const InfoContainer = () => {
  return (
    <div className={styles.infoContainer}>
      <img className={styles.userAvatar} src={testImg} alt="user-avatar" />
      <h3>Dan Abramov</h3>
      <a href="#" rel="noreferrer noopener">
        gaearon
      </a>
      <div className={styles.folowerContainer}>
        <div className={styles.followers}>
          <img src={followers} alt="followers" />
          <p>65.8k followers</p>
        </div>
        <div className={styles.followers}>
          <img src={following} alt="followers" />
          <p>171 following</p>
        </div>
      </div>
    </div>
  );
};
