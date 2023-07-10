import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { PasswordInput, PlainInput, Button } from '..';
import * as Icons from '../Icons';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Muy corto!')
    .max(20, 'Muy Largo!')
    .required('Requerido'),
  password: Yup.string().required('Requerido'),
});

const initialValues = {
  username: '',
  password: '', // NOSONAR
};

const errorMessage = 'Tu usuario y/o contraseña son inválidos.';

export default function Login({ login, loading, error, resetLogin }) {
  const formikRef = useRef(null);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    if (formikRef.current && error) {
      formikRef.current.setErrors(initialValues);
    }
  }, [formikRef, error]);

  const handleFormik = useCallback(
    (values) => {
      login(values);
    },
    [login]
  );

  const resetForm = useCallback(() => {
    setSubmitted(false);
    resetLogin();
  }, []);

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
                <p className="text-white" style={{ fontSize: '20px' }}>
                  Cargando...
                </p>
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
                        <Icons.Logo width="100px" />
                      </div>
                    </div>
                  </div>
                  <h1 className="text-center sub text-uppercase">
                    Iniciar Sesión
                  </h1>
                  <p className="text-center">
                    Antes de continuar, por favor ingresa tu usuario y
                    contraseña
                  </p>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={LoginSchema}
                    validateOnChange={submitted}
                    validateOnBlur
                    onSubmit={handleFormik}
                    innerRef={formikRef}
                  >
                    {({ isValid, handleSubmit }) => (
                      <form
                        onSubmit={(evt) => {
                          evt.preventDefault();
                          setSubmitted(true);
                          resetLogin();
                          handleSubmit();
                        }}
                      >
                        <PlainInput
                          name="username"
                          label="Usuario"
                          type="text"
                          onlyError
                          displayError={false}
                        />
                        <PasswordInput
                          onBlur={resetForm}
                          name="password"
                          label="Contraseña"
                          onlyError
                          displayError={false}
                        />
                        {(error || (!isValid && submitted)) && (
                          <span className="col-form-error text-danger">
                            {error || errorMessage}
                          </span>
                        )}
                        <p className="text-bold text-center mt-4 mb-4">
                          <a className="small" href="#">
                            Olvidé mi contraseña
                          </a>
                        </p>
                        <Button block>Aceptar</Button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
