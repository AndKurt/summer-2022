import React from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Pagination.module.scss';
import prevArrowPaginate from '../../assets/img/svg/prevArrowPaginate.svg';
import nextArrowPaginate from '../../assets/img/svg/nextArrowPaginate.svg';
import { fetchRepos } from '../../redux/actions/reposActions';

const REPOS_PER_PAGE = 4;

export const Pagination = () => {
  const { userData } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  if (userData) {
    const { login, public_repos } = userData;

    let pageCount = 0;
    if (userData) {
      pageCount = Math.floor(public_repos / REPOS_PER_PAGE);
    }

    const handlePageChange = (selectedItem: { selected: number }) => {
      console.log(selectedItem);
      const pageForRequest = selectedItem.selected + 1;
      dispatch(fetchRepos({ userName: login, currentPage: pageForRequest }));
    };

    return (
      <div className={styles.paginationContainer}>
        <p></p>
        <ReactPaginate
          pageCount={pageCount}
          previousLabel={<img src={prevArrowPaginate} />}
          nextLabel={<img src={nextArrowPaginate} />}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          breakLabel="..."
          containerClassName={styles.pagination}
          breakClassName={styles.test1}
          breakLinkClassName={styles.test2}
          //renderOnZeroPageCount={() => null}
        />
      </div>
    );
  } else {
    return null;
  }
};
