import { connect } from 'react-redux';
import _get from 'lodash/get';
import SearchableSelect from './SearchableSelect';

const withListOptions = connect((state, { options }) => {
  const data = _get(state, options, {});
  return {
    options: data.list || [],
  };
});

export default withListOptions(SearchableSelect);
