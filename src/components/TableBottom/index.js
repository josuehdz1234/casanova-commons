import React from 'react';
import TableNavigation from '../../TableNavigation';
import Button from '../../Button';

export default function TableBottom({
  search,
  onChange,
  onClick,
  textButton = '',
  showButton = true,
  className = '',
}) {
  return (
    <div className={`row ${className}`}>
      <div className="col-12 col-xl-7 table-paginator text-right d-flex justify-content-between align-items-center">
        <TableNavigation search={search} onChange={onChange} />
      </div>
      {showButton && (
        <div className="col-12">
          <div className="row">
            <div className="col" />
            <div className="offset-6 col-3">
              <Button block onClick={onClick}>
                {textButton}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
