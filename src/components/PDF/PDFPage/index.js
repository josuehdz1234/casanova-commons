import React from 'react';
import PropTypes from 'prop-types';
import { Page, Document } from '@react-pdf/renderer';

import styles from './styles';

export default function PDFPage({ size = [841.89, 1190.55], children }) {
  return (
    <Document>
      <Page size={size} style={styles.page}>
        {children}
      </Page>
    </Document>
  );
}

PDFPage.propTypes = {
  size: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ),
  children: PropTypes.node.isRequired,
};
