import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';

import styles from './styles';

export default function PDFTable({ columns, dataList }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.table}>
        <View style={styles.headerContainer}>
          {columns.map((column) => {
            const { label, field } = column;
            const width = `${100 / columns.length}%`;

            return (
              <View key={field} style={[styles.header, { width }]}>
                <Text style={styles.headerTitle}>{label}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.body}>
          {dataList.map((data) => {
            const currentList = Object.entries(data).filter(
              ([key]) => key !== 'id' && key !== 'uuid'
            );
            const colWidth = `${100 / currentList.length}%`;

            return (
              <View key={data.id} style={styles.bodyRow}>
                {currentList.map(([key, value]) => {
                  const columnProps =
                    columns.find(({ field }) => field === key) || {};

                  const { styles: columnStyles = [] } = columnProps;

                  return (
                    <View
                      key={key}
                      style={[
                        styles.bodyColumn,
                        { width: colWidth },
                        ...columnStyles,
                      ]}
                    >
                      <Text style={styles.bodyText}>{value}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

PDFTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
