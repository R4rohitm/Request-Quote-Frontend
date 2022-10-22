import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="page-line">
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            {/* eslint-disable-next-line */}
            <a onClick={() => paginate(number)} className="link">
              {number}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pagination;
