import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';

import styles from './styles';

const PDFInfoText = ({ label, info }) => (
  <View style={styles.infoTextContainer}>
    <Text style={styles.infoTextLabel}>{label}</Text>
    <Text style={styles.infoTextValue}>{info}</Text>
  </View>
);

PDFInfoText.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default PDFInfoText;
