import { StyleSheet } from '@react-pdf/renderer';
import { COLORS } from '@utils/colors';

const styles = StyleSheet.create({
  infoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTextLabel: {
    fontSize: 14,
    fontWeight: 'extra-bold',
    textTransform: 'uppercase',
    color: COLORS.BLACK,
    marginRight: 4,
  },
  infoTextValue: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
});

export default styles;
