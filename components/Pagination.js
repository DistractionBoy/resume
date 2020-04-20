import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  className
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={className ? "mi-pagination " + className : "mi-pagination"}>
      <ul>
        {currentPage === 1 ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage - 1)} href="!#">
              <ChevronLeftIcon />
            </a>
          </li>
        )}
        {pageNumbers.map(number => (
          <li
            key={number}
            className={currentPage === number ? "is-active" : null}
          >
            <a onClick={e => paginate(e, number)} href="!#">
              {number}
            </a>
          </li>
        ))}
        {currentPage === pageNumbers[pageNumbers.length - 1] ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage + 1)} href="!#">
              <ChevronRightIcon />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
