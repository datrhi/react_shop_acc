import React from "react";
import "./Pagination.css";
export default function Pagination({
  ItemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / ItemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {currentPage !== 1 && (
          <li key={0} className="page-item">
            <button className="page-link" onClick={() => paginate(1)}>
              <i class="fas fa-angle-double-left"></i>
            </button>
          </li>
        )}
        {pageNumbers.map(
          (number) =>
            currentPage > number - 3 &&
            currentPage < number + 3 && (
              <li key={number} className="page-item">
                <button
                  onClick={() => paginate(number)}
                  className={
                    currentPage === number ? "page-link active" : "page-link"
                  }
                >
                  {number}
                </button>
              </li>
            )
        )}
        {currentPage !== Math.ceil(totalItems / ItemsPerPage) && (
          <li
            key={Math.ceil(totalItems / ItemsPerPage) + 1}
            className="page-item"
          >
            <button
              className="page-link"
              onClick={() => paginate(Math.ceil(totalItems / ItemsPerPage))}
            >
              <i class="fas fa-angle-double-right"></i>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
