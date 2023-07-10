import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _capitalize from 'lodash/capitalize';
import Sidebar from '../Sidebar';
import { Logo, CasanovaLogo, LogoSara, Power } from '../Icons';

function Layout({
  logoSara,
  sidebarItems,
  activeRoute,
  onChangeRoute,
  userFullName,
  userBranch,
  logout,
  showSidebar = true,
  children,
  contentClassName = '',
  headerClassName = '',
}) {
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <div className="layout container-fluid">
      <div className={`row row-header ${headerClassName}`}>
        <div className="col col-header">
          {logoSara ? <LogoSara height="60%" /> : <CasanovaLogo />}
        </div>
        <div className="col col-header col-header-right">
          {userFullName && (
            <div className="col-header-user mr-3">
              <p>{userFullName}</p>

              {userBranch && (
                <p className="branch text-secondary text-left">
                  <span className="font-weight-bold mr-2">
                    Sucursal {_capitalize(userBranch)}
                  </span>
                </p>
              )}
            </div>
          )}

          <Power
            width="1.5rem"
            height="1.5rem"
            className="pointer"
            onClick={handleLogout}
          />

          <Logo
            width="4.5rem"
            height="4.5rem"
            style={{ marginLeft: '1.125rem' }}
          />
        </div>
      </div>

      <div id="something" className="row flex-nowrap">
        {showSidebar ? (
          <Sidebar
            activeRoute={activeRoute}
            items={sidebarItems}
            onChangeRoute={onChangeRoute}
          >
            <div className={`container-fluid content ${contentClassName}`}>
              {children}
            </div>
          </Sidebar>
        ) : (
          <div className={`container-fluid content ${contentClassName}`}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

Layout.propTypes = {
  sidebarItems: PropTypes.array,
  activeRoute: PropTypes.object,
  onChangeRoute: PropTypes.func,
  userFullName: PropTypes.string.isRequired,
  userBranch: PropTypes.string,
  logoSara: PropTypes.bool,
  logout: PropTypes.func,
  contentClassName: PropTypes.string,
  headerClassName: PropTypes.string,
};

Layout.defaultProps = {
  sidebarItems: [],
  onChangeRoute: _noop,
  logoSara: false,
  logout: _noop,
};

export default Layout;
