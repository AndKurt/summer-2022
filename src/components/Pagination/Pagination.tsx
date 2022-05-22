import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Pagination.module.scss';
import arrowPaginate from '../../assets/img/svg/arrowPaginate.svg';
import { fetchRepos } from '../../redux/actions/reposActions';
import clsx from 'clsx';
import { REPOS_PER_PAGE } from '../../constants/api';

interface IPagindation {
  activePage: number;
  setPaginationPage: (value: number) => void;
}

export const Pagination = ({ activePage, setPaginationPage }: IPagindation) => {
  const { userData } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [pageCount, setPageCount] = useState<number>(0);
  const [publicRepos, setPublicRepos] = useState<number>(0);
  const offsetPage = activePage * REPOS_PER_PAGE;

  useEffect(() => {
    if (userData) {
      setPageCount(Math.ceil(userData.public_repos / REPOS_PER_PAGE));
      setPublicRepos(userData.public_repos);
    }
  }, [userData]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    if (userData) {
      const pageForRequest = selectedItem.selected + 1;
      dispatch(fetchRepos({ userName: userData.login, currentPage: pageForRequest }));
      setPaginationPage(selectedItem.selected);
    }
  };

  return userData ? (
    <div className={styles.paginationContainer}>
      <p>
        {offsetPage + 1}-
        {offsetPage + REPOS_PER_PAGE < publicRepos ? offsetPage + REPOS_PER_PAGE : publicRepos} of{' '}
        {publicRepos} items
      </p>
      <ReactPaginate
        pageCount={pageCount}
        previousLabel={<img src={arrowPaginate} />}
        nextLabel={<img src={arrowPaginate} />}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        breakLabel="..."
        breakClassName={styles.break}
        containerClassName={styles.pagination}
        pageClassName={styles.common}
        previousClassName={clsx(styles.arrows, styles.rotate)}
        nextClassName={styles.arrows}
        activeClassName={styles.active}
      />
    </div>
  ) : null;
};
