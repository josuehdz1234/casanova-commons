import React from 'react';
import ReactDOM from 'react-dom';
import { portalRoot as root } from '@utils/htmlRoots';

export default function Portal({ children }) {
  return <>{ReactDOM.createPortal(<>{children}</>, root)}</>;
}
