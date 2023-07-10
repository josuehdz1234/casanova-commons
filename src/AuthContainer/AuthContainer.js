import React from 'react';
import * as Icons from '../Icons';

export default function AuthContainer({
  children,
  title,
  subtitle,
  loading,
  error,
}) {
  return (
    <div className="page-login">
      <div className="container">
        {loading && !error ? (
          <>
            <div className="row justify-content-center">
              <div className="col-md-1">
                <Icons.Logo
                  className="page-login-scaling"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <h3 className="text-white">Cargando...</h3>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row justify-content-center">
              <div className="col-xs-11 col-sm-10 col-md-6 col-lg-5">
                <div className="page-login-form">
                  <div className="row justify-content-center page-login-form-top">
                    <div className="col d-flex justify-content-center">
                      <div className="page-login-logo">
                        <Icons.Logo />
                      </div>
                    </div>
                  </div>
                  <h1 className="text-center sub text-uppercase">{title}</h1>
                  <p className="text-center">{subtitle}</p>
                  <>{children}</>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
