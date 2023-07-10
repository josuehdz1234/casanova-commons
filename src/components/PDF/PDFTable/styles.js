import { StyleSheet } from '@react-pdf/renderer';
import { COLORS } from '@utils/colors';

const border = `1px solid ${COLORS.GOLD}`;

const styles = StyleSheet.create({
  table: {
    width: '100vw',
    flexShrink: 0,
  },

  headerContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.GOLD,
  },
  header: {
    minHeight: 8,
    padding: 7,
    border: 0,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },

  body: {},
  bodyRow: {
    flexDirection: 'row',
    width: '100%',
    borderBottom: border,
  },
  bodyColumn: {
    borderRight: border,
    paddingLeft: 1,
    paddingRight: 3,
    paddingVertical: 4,
  },
  bodyText: {
    fontSize: 13,
    paddingBottom: 2,
    textAlign: 'center',
  },
});

export default styles;
