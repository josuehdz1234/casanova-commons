import { StyleSheet } from '@react-pdf/renderer';
import { COLORS } from '@utils/colors';

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.WHITE,
    width: '100vw',
    paddingHorizontal: 3,
    paddingVertical: 40,
  },
});

export default styles;
