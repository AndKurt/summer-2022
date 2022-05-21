import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header, InfoContainer, Loader, Pagination, RepoContainer } from '../../components';
import { IUserDataFromApi } from '../../interfaces';
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

  let userDataFromApi = useMemo(() => {
    if (userData) {
      return { ...userData };
    }
  }, [userData]) as IUserDataFromApi | null;

  const setPaginationPage = (value: number) => {
    setActivePage(value);
  };

  useEffect(() => {
    if (userName) {
      dispatch(fetchUser(userName));
      setActivePage(0);
      userDataFromApi = null;
    }
  }, [userName, dispatch]);

  useEffect(() => {
    if (isError) {
      isError === 'Not found' ? navigation('/empty-state') : navigation('/not-found');
    }
    if (userName) {
      if (userData) {
        dispatch(fetchRepos({ userName: userName }));
      }
      if (!userDataFromApi?.public_repos && userDataFromApi?.public_repos !== undefined) {
        navigation('/empty-state');
      }
    }
  }, [userName, userData, dispatch, userDataFromApi, navigation, isError]);

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
