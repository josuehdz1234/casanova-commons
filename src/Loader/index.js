import React from 'react';
import LoaderCasanova from './Loader';
import './Loader.scss';

export default function Loader({ show, inner }) {
  return (
    <div
      className={`LoaderCasanova ${inner ? 'LoaderCasanova--inner' : ''}`}
      style={{ display: !show ? 'none' : '' }}
    >
      <LoaderCasanova loop className="LoaderCasanova__Content" />
    </div>
  );
}
