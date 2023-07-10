import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../Breadcrumb';
import Button from '../Button';
import Layout from '../Layout';

const withLayout = (Component, args = {}) => {
  const {
    download,
    aside,
    centerClass = '',
    breadcrumbProps = { back: false },
    withLoader = true,
    className = '',
  } = args;

  function WrappedChildren(props) {
    const { showTitle = true, handleClickDownload } = props;
    const loader = useSelector((state) => state.commons.loader);
    const activeRoute = useSelector((state) => state.app.activeRoute);
    return (
      <>
        {showTitle && (
          <Layout.Title
            label={
              <Breadcrumb activeRoute={activeRoute} {...breadcrumbProps} />
            }
            right={
              download && (
                <Button onClick={handleClickDownload} outline>
                  Descargar información
                </Button>
              )
            }
          />
        )}
        <Layout.Body
          showLoader={withLoader && loader}
          aside={aside}
          centerClass={centerClass}
          className={className}
        >
          <Component {...props} />
        </Layout.Body>
      </>
    );
  }

  return WrappedChildren;
};

export default withLayout;
