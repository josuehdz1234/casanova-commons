import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import ChevronLeft from '../Icons/ChevronLeft';

function Breadcrumb(props) {
  const { activeRoute, back = true, onBack } = props;
  const history = useHistory();

  const handleBack = useCallback(
    (evt) => {
      if (onBack) onBack(evt);
      else history.goBack();
    },
    [history.goBack, onBack]
  );

  if (!activeRoute) return null;

  const { general, specific } = activeRoute;
  return (
    <>
      {back && (
        <span className={styles.leftBack} onClick={handleBack}>
          <ChevronLeft width="2.20rem" height="2.20rem" />
        </span>
      )}
      {general && <span className={styles.title}> {general.label} </span>}
      {specific && specific.label && (
        <>
          |<span className={styles.subTitle}> {specific.label} </span>{' '}
        </>
      )}
    </>
  );
}

Breadcrumb.propTypes = {
  activeRoute: PropTypes.shape({
    general: PropTypes.shape({
      label: PropTypes.string,
    }),
    specific: PropTypes.shape({
      label: PropTypes.string,
    }),
  }),
};

Breadcrumb.defaultProps = {
  activeRoute: {
    general: null,
    specific: null,
  },
};

export default Breadcrumb;
