import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import _isObject from 'lodash/isObject';
import * as Icons from '../../Icons';
import FilePage from './FilePage';
import './FileViewer.scss';

const FileViewer = ({ files = [] }) => {
  const [current, setCurrent] = useState(0);
  const [fileList, setFileList] = useState([]);

  const increaseCurrent = useCallback(() => {
    if (current === files.length - 1) return false;
    setCurrent(current + 1);
  }, [current, files]);

  const decreaseCurrent = useCallback(() => {
    if (current === 0) return false;
    setCurrent(current - 1);
  }, [current]);

  useEffect(() => {
    if (files) {
      const filesWithId = files.map((file, index) => {
        if (_isObject(file)) {
          return {
            ...file,
            id: index,
          };
        }

        return {
          file,
          id: index,
        };
      });
      setFileList(filesWithId);
    }
  }, [files]);

  const currentTitle = fileList[current]?.title;

  return (
    <>
      {fileList && (
        <div className="FileViewer">
          {fileList.map(({ file, id }, index) => (
            <FilePage
              key={id}
              url={file}
              index={index}
              currentIndex={current}
            />
          ))}
        </div>
      )}

      <div className="ViewerControls">
        <span
          onClick={decreaseCurrent}
          onKeyDown={decreaseCurrent}
          tabIndex="0"
          role="button"
          className="ViewerControls__controls"
        >
          {current !== 0 && (
            <Icons.ChevronLeft width="1.5rem" height="1.5rem" />
          )}
        </span>

        {currentTitle && (
          <h6 className="mt-1 mb-3 text-uppercase">{currentTitle}</h6>
        )}

        <span
          onClick={increaseCurrent}
          onKeyDown={increaseCurrent}
          tabIndex="0"
          role="button"
          className="ViewerControls__controls"
        >
          {current !== files.length - 1 && (
            <Icons.ChevronRight width="1.5rem" height="1.5rem" />
          )}
        </span>
      </div>
    </>
  );
};

FileViewer.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
};

export default FileViewer;
