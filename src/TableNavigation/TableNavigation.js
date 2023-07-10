import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

function calculatePages(page, totalPages, offset = 3) {
  if (totalPages <= 1) {
    return null;
  }
  if (totalPages <= 5) {
    return {
      first: 1,
      startPage: 2,
      endPage: totalPages - 1,
      last: totalPages,
    };
  }

  if (totalPages > 5) {
    if (page === totalPages) {
      const startPage = page - offset + 1;
      return {
        first: 1,
        startPage,
        endPage: startPage + offset - 1,
        last: page,
      };
    }
    const position = (page - 2) % offset;
    const startPage = page - position;
    const finalPage = startPage + (offset - 1);
    const endPage = finalPage > totalPages - 1 ? totalPages : finalPage;
    return {
      first: 1,
      startPage,
      endPage,
      last: totalPages,
    };
  }

  return null;
}

function TableNavigation(props) {
  const { onChange, search } = props;
  const { params } = search;
  const { page: rawPage } = params;
  const { totalPages } = search;
  const page = props.hasZero ? rawPage + 1 : rawPage;

  const pagination = calculatePages(page, totalPages);
  const pages = [];

  const handleClick = useCallback((index) => {
    onChange(props.hasZero ? index - 1 : index);
  }, []);

  if (pagination) {
    const { startPage, endPage, first, last } = pagination;
    for (let i = startPage; i <= endPage; i++) {
      const active = i === page;
      pages.push(
        <li
          key={i}
          className={`page-item ${active ? 'active' : ''}`}
          onClick={() => handleClick(i)}
        >
          <span className="page-link" href="#">
            {i}
          </span>
        </li>
      );
    }

    const isFirst = page === first;
    const isLast = page === last;
    return (
      <nav className="table-navigation">
        <ul className="pagination">
          <li
            className={`page-item ${isFirst ? 'disabled' : ''}`}
            onClick={() => !isFirst && handleClick(page - 1)}
          >
            <span className="page-link" href="#">
              Anterior
            </span>
          </li>
          <li
            className={`page-item ${isFirst ? 'active' : ''}`}
            onClick={() => !isFirst && handleClick(first)}
          >
            <span className="page-link" href="#">
              {first}
            </span>
          </li>
          {page > 4 && (
            <li
              className="page-item"
              onClick={() => handleClick(startPage - 1)}
            >
              <span className="page-link" href="#">
                &hellip;
              </span>
            </li>
          )}
          {pages}

          {totalPages > 5 && endPage != totalPages && (
            <li className="page-item" onClick={() => handleClick(endPage + 1)}>
              <span className="page-link" href="#">
                &hellip;
              </span>
            </li>
          )}
          {startPage !== 1 && endPage != totalPages && (
            <li
              className={`page-item ${isLast ? 'active' : ''}`}
              onClick={() => !isLast && handleClick(last)}
            >
              <span className="page-link" href="#">
                {last}
              </span>
            </li>
          )}
          <li
            className={`page-item ${isLast ? 'disabled' : ''}`}
            onClick={() => !isLast && handleClick(page + 1)}
          >
            <span className="page-link" href="#">
              Siguiente
            </span>
          </li>
        </ul>
      </nav>
    );
  }
  return <div />;
}

TableNavigation.propTypes = {
  params: PropTypes.object,
  totalPages: PropTypes.number,
  totalElements: PropTypes.number,
  result: PropTypes.object,
  onChange: PropTypes.func,
  hasZero: PropTypes.bool,
};

TableNavigation.defaultProps = {
  onChange: _noop,
  hasZero: true,
};

export default TableNavigation;
