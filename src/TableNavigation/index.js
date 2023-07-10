import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';
import TableNavigation from './TableNavigation';

export default branch(
  (props) => !props.search.params,
  renderNothing
)(TableNavigation);
