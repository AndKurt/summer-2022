import React from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Pagination.module.scss';
import arrowPaginate from '../../assets/img/svg/arrowPaginate.svg';
import { fetchRepos } from '../../redux/actions/reposActions';
import clsx from 'clsx';

const REPOS_PER_PAGE = 4;

interface IPagindation {
  activePage: number;
  setPaginationPage: (value: number) => void;
}

export const Pagination = ({ activePage, setPaginationPage }: IPagindation) => {
  const { userData } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const offsetPage = activePage * REPOS_PER_PAGE;

  if (userData) {
    const { login, public_repos } = userData;
    let pageCount = 0;
    if (userData) {
      pageCount = Math.ceil(public_repos / REPOS_PER_PAGE);
    }

    const handlePageChange = (selectedItem: { selected: number }) => {
      const pageForRequest = selectedItem.selected + 1;
      dispatch(fetchRepos({ userName: login, currentPage: pageForRequest }));
      setPaginationPage(selectedItem.selected);
    };

    return (
      <div className={styles.paginationContainer}>
        <p>
          {offsetPage + 1}-
          {offsetPage + REPOS_PER_PAGE < public_repos ? offsetPage + REPOS_PER_PAGE : public_repos}{' '}
          of {public_repos} items
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
    );
  } else {
    return null;
  }
};
