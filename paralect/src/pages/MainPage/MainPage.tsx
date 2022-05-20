import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmptyRepoContainer, Header, InfoContainer, Loader, RepoContainer } from '../../components';
import { fetchRepos } from '../../redux/actions/reposActions';
import { fetchUser } from '../../redux/actions/userAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { userName } = useParams();
  const {
    userData,
    isLoading: isLoaddingUser,
    isError,
  } = useAppSelector((state) => state.userReducer);
  const { isLoading: isLoaddingRepos } = useAppSelector((state) => state.reposReducer);

  useEffect(() => {
    if (isError) {
      navigation('/notFound');
    }
  }, [navigation, isError]);

  useEffect(() => {
    if (userName) {
      dispatch(fetchUser(userName));
    }
  }, [userName, dispatch]);

  useEffect(() => {
    if (userName) {
      if (userData?.public_repos) {
        dispatch(fetchRepos({ userName: userName }));
      }
    }
  }, [userName, dispatch, userData?.public_repos]);

  return (
    <main className={styles.mainPage}>
      <Header />
      {(isLoaddingUser || isLoaddingRepos) && (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
      {(!isLoaddingUser || !isLoaddingRepos) && userData && (
        <div className={styles.container}>
          <InfoContainer />
          {userData.public_repos ? <RepoContainer /> : <EmptyRepoContainer />}
        </div>
      )}
    </main>
  );
};
