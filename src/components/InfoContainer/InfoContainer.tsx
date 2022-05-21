import React from 'react';
import styles from './InfoContainer.module.scss';
import followersIco from '../../assets/img/svg/followers.svg';
import followingIco from '../../assets/img/svg/following.svg';
import { numberRounding } from '../../utils';
import { useAppSelector } from '../../redux/hooks';

export const InfoContainer = () => {
  const { userData } = useAppSelector((state) => state.userReducer);
  if (userData) {
    const { login, name, avatar_url, followers, following, html_url } = userData;
    const followersNum = numberRounding(followers);
    const followingNum = numberRounding(following);
    return (
      <div className={styles.infoContainer}>
        <img className={styles.userAvatar} src={avatar_url} alt={`${login}-avatar`} />
        <h3>{name}</h3>
        <a href={html_url} rel="noreferrer noopener" target="_blank">
          {login}
        </a>
        <div className={styles.folowerContainer}>
          <div className={styles.followers}>
            <img src={followersIco} alt="followers" />
            <p>{followersNum} followers</p>
          </div>
          <div className={styles.followers}>
            <img src={followingIco} alt="followers" />
            <p>{followingNum} following</p>
          </div>
        </div>
      </div>
    );
  } else return null;
};
