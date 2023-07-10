import React, { useState, useEffect, useCallback } from 'react';
import * as Icons from '../../Icons';
import './PageNavigator.scss';

export default function PageNavigator({
  loop = false,
  elements,
  pageSize = 1,
  onChangeCurrentPage = () => {},
  onDecreasePage = () => {},
  onIncreasePage = () => {},
  children,
  containerClassName = '',
  childrenClassName = '',
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (elements.length > 0) {
      const allElements = [...elements];
      const allPages = [];
      while (allElements.length > 0) {
        const page = allElements.splice(0, pageSize);
        allPages.push(page[0]);
      }
      setPages(allPages);
    } else if (elements.length === 0) setPages([]);
  }, [elements, pageSize]);

  const handleDecreasePage = useCallback(() => {
    if (!loop && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }

    if (loop && currentPage === 0) {
      setCurrentPage(pages.length - 1);
    }

    onDecreasePage(currentPage);
  }, [setCurrentPage, currentPage, pages, loop]);

  const handleIncreasePage = useCallback(() => {
    if (!loop && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }

    if (loop && currentPage === pages.length - 1) {
      setCurrentPage(0);
    }

    onIncreasePage(currentPage);
  }, [setCurrentPage, currentPage, pages, loop]);

  useEffect(() => {
    onChangeCurrentPage(currentPage);
  }, [currentPage]);

  return (
    <div className={`container-fluid ${containerClassName}`}>
      <div className="row">
        <div className="col-4 justify-content-start d-flex">
          {(currentPage > 0 || loop) && (
            <button
              type="button"
              className="btn PageNavigator__Left-arrow"
              onClick={handleDecreasePage}
            >
              <Icons.ChevronLeft width="1.375rem" height="1.375rem" />
            </button>
          )}
        </div>
        <div className="col">
          <div className={`${childrenClassName}`}>{children}</div>
        </div>
        <div className="col-4 justify-content-end d-flex">
          {(currentPage < pages.length - 1 || loop) && (
            <button
              type="button"
              className="btn PageNavigator__Right-arrow"
              onClick={handleIncreasePage}
            >
              <Icons.ChevronRight width="1.375rem" height="1.375rem" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
