import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header, InfoContainer, Loader, Pagination, RepoContainer } from '../../components';
import { fetchRepos } from '../../redux/actions/reposActions';
import { fetchUser } from '../../redux/actions/userAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [activePage, setActivePage] = useState(0);
  const { userName } = useParams();
  const {
    userData,
    isLoading: isLoaddingUser,
    isError,
  } = useAppSelector((state) => state.userReducer);
  const { isLoading: isLoaddingRepos } = useAppSelector((state) => state.reposReducer);

  const setPaginationPage = (value: number) => {
    setActivePage(value);
  };

  useEffect(() => {
    console.log(1);
    if (userName) {
      dispatch(fetchUser(userName));
      setActivePage(0);
    }
  }, [userName, dispatch]);

  useEffect(() => {
    console.log(2);
    if (isError) {
      navigation('/not-found');
    }
  }, [navigation, isError]);

  useEffect(() => {
    console.log(userData);

    console.log(userData?.public_repos);
    if (userName) {
      if (userData?.public_repos) {
        dispatch(fetchRepos({ userName: userName }));
      }
    }
  }, [userName, dispatch, userData, navigation]);

  //useEffect(() => {
  //  console.log(userData?.public_repos);
  //  if (!userData?.public_repos) {
  //    navigation('/empty-state');
  //  }
  //}, [userData, navigation]);

  return (
    <main className={styles.mainPage}>
      {isLoaddingUser || (isLoaddingRepos && <Loader />)}
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          {<InfoContainer />}
          <RepoContainer />
        </div>
        <Pagination activePage={activePage} setPaginationPage={setPaginationPage} />
      </div>
    </main>
  );
};
