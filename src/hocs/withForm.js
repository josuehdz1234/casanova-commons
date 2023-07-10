import React, { useState, useCallback, useMemo } from 'react';
import _get from 'lodash/get';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, validateYupSchema, yupToFormErrors } from 'formik';
import * as Icons from '../Icons';
import Button from '../Button';
import { ActionModal } from '../Modal';

const withForm = (parentProps) => {
  const config = _get(parentProps, 'config', {});
  const enableReinitialize = _get(config, 'enableReinitialize', false);
  const validateOnBlur = _get(config, 'validateOnBlur', false);
  const validateOnMount = _get(config, 'validateOnBlur', false);
  const showContinue = _get(config, 'showContinue', true);
  const showCancel = _get(config, 'showCancel', true);
  const validateOnChange = _get(config, 'validateOnChange', false);
  const disableOnDirty = _get(config, 'disableOnDirty', false);
  const initialTouched = _get(config, 'initialTouched', {});
  const btnCancelLabel = _get(config, 'btnCancelLabel', 'Cancelar');
  const btnSubmitLabel = _get(config, 'btnSubmitLabel', 'Guardar');
  const withButtons = _get(config, 'withButtons', true);
  const dialogs = _get(config, 'dialogs', {});
  const submitForm = _get(config, 'submitForm', () =>
    console.warn('No submit action defined')
  );
  const textBold = _get(config, 'textBold', '');
  const messageBold = _get(config, 'messageBold', false);
  const schema = _get(config, 'schema', {});
  const onConfigSuccess = _get(config, 'onSuccess', null);
  const onSuccessAction = _get(config, 'onSuccessAction', null);
  const onClose = _get(config, 'onClose', null);
  const onCloseAction = _get(config, 'onCloseAction', null);
  const alwaysSetTemporalValues = _get(
    config,
    'alwaysSetTemporalValues',
    false
  );
  const disableSubmit = _get(config, 'disableSubmit', false);
  const handleClickSubmit = _get(config, 'handleClickSubmit', null);
  const redirectInSuccess = _get(config, 'redirectInSuccess', true);
  const initialShowResponseDialog = _get(config, 'disableResponseDialog', true);
  const validateIsValidProp = _get(config, 'validateIsValidProp', false);
  const onBeforeSubmit = _get(config, 'onBeforeSubmit', () => {});

  return (Component) => ({
    loader,
    responseDialog = {},
    closeResponseDialog,
    IconsResponseDialog = {
      Success: null,
      Error: null,
    },
    onCancelPath,
    onCancel,
    onActionCancel = null,
    onSuccess,
    left,
    middle,
    leftCol = '4',
    middleCol = '4',
    rightCol = '4',
    cancelClass = '',
    continueClass = '',
    confirmationMessage = true,
    disabledSubmit: disabledFormikSubmit = null,
    ...rest
  }) => {
    const onCancelPathWrapper = onCancelPath || '/vehicle';

    const [submitted, setSubmitted] = useState(false);
    const [openConfirmationMessage, setOpenConfirmationMessage] = useState(
      false
    );
    const [temporalValues, setTemporalValues] = useState({});
    const [detailValues, setDetailValues] = useState({});
    const [withInitialValues, setWithInitialValues] = useState(false);
    const [showResponseDialog, setShowResponseDialog] = useState(
      initialShowResponseDialog
    );
    const [fieldsTouched, setFieldsTouched] = useState(initialTouched);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDefaultCancel = useCallback(() => {
      history.push(onCancelPathWrapper);
      if (onCloseAction) dispatch(onCloseAction());
    }, [history, onCancelPathWrapper, dispatch]);

    const getCancelWrapper = useCallback(() => {
      if (onActionCancel) {
        return dispatch(onActionCancel());
      }
      return onCancel || handleDefaultCancel;
    }, [dispatch, onActionCancel, onCancel, handleDefaultCancel]);

    const onCancelWrapper = getCancelWrapper();

    const handleFormik = useCallback(
      (values) => {
        onBeforeSubmit(values);

        if (alwaysSetTemporalValues) {
          setTemporalValues(values);
        }

        if (confirmationMessage) {
          setOpenConfirmationMessage(true);
          setTemporalValues(values);
        } else {
          const request = config.formatter
            ? config.formatter(values, detailValues)
            : values;
          dispatch(submitForm(request));
        }
      },
      [confirmationMessage, dispatch, detailValues, submitForm, onBeforeSubmit]
    );

    const handleValidation = useCallback(
      (values) => {
        try {
          const context = {
            initialValues: withInitialValues ? detailValues : undefined,
          };
          validateYupSchema(values, schema, true, context);
        } catch (error) {
          return yupToFormErrors(error);
        }
      },
      [withInitialValues, detailValues, schema]
    );

    const handleConfirmAction = useCallback(() => {
      if (responseDialog.closeInConfirmation) {
        closeResponseDialog();
        return;
      }

      const request = config.formatter
        ? config.formatter(temporalValues, detailValues)
        : temporalValues;

      setOpenConfirmationMessage(false);
      dispatch(submitForm(request));
    }, [
      temporalValues,
      dispatch,
      detailValues,
      submitForm,
      responseDialog,
      closeResponseDialog,
    ]);

    const handleCancelAction = useCallback(() => {
      if (onClose) onClose();
      setOpenConfirmationMessage(false);
      setTemporalValues({});
    }, [onClose]);

    const handleSuccessAction = useCallback(() => {
      closeResponseDialog();
      if (dialogs.response.successPath === 'refresh') {
        window.location.reload();
      } else {
        const handleSuccess = onConfigSuccess || onSuccess;
        if (handleSuccess) handleSuccess(temporalValues);
        if (onSuccessAction) dispatch(onSuccessAction(temporalValues));
        if (redirectInSuccess) history.push(dialogs.response.successPath);
      }
    }, [
      closeResponseDialog,
      dialogs,
      history.push,
      temporalValues,
      onSuccess,
      onConfigSuccess,
      onSuccessAction,
      redirectInSuccess,
    ]);

    const finalInitialValues = useMemo(
      () =>
        !withInitialValues
          ? config.initialValues
          : {
              ...config.initialValues,
              ...detailValues,
            },
      [config.initialValues, withInitialValues, detailValues]
    );

    return (
      <>
        <ActionModal
          open={openConfirmationMessage}
          icon={
            IconsResponseDialog.Warning ? (
              <IconsResponseDialog.Warning />
            ) : (
              <Icons.StatusWarning />
            )
          }
          onClose={handleCancelAction}
          onAction={handleConfirmAction}
          title={dialogs.confirmation.title}
          actionLabel={dialogs.confirmation.actionLabel}
          closeButton
          message={dialogs.confirmation.message || ''}
          textBold={textBold}
          messageBold={messageBold}
        />
        {responseDialog && showResponseDialog && (
          <ActionModal
            open={responseDialog.open}
            icon={
              responseDialog.success ? (
                <>
                  {IconsResponseDialog.Success ? (
                    <IconsResponseDialog.Success />
                  ) : (
                    <Icons.IcoCarOk />
                  )}
                </>
              ) : (
                <>
                  {IconsResponseDialog.Error ? (
                    <IconsResponseDialog.Error />
                  ) : (
                    <Icons.IcoCarError />
                  )}
                </>
              )
            }
            onClose={closeResponseDialog}
            onAction={
              responseDialog.success ? handleSuccessAction : handleConfirmAction
            }
            title={
              responseDialog.success
                ? dialogs.response.successTitle
                : dialogs.response.errorTitle
            }
            actionLabel={
              responseDialog.success
                ? responseDialog.successLabel || dialogs.response.successLabel
                : responseDialog.errorLabel || dialogs.response.errorLabel
            }
            message={
              responseDialog.success
                ? dialogs.response.successMessage
                : responseDialog.message
            }
            modalType={responseDialog.modalType || 'confirmation'}
            code={responseDialog.errorCode}
            closeButton
            textBold={textBold}
            messageBold={messageBold}
          />
        )}
        <Formik
          initialValues={finalInitialValues}
          validate={handleValidation}
          validateOnChange={validateOnChange}
          validateOnBlur={validateOnBlur}
          validateOnMount={validateOnMount}
          enableReinitialize={enableReinitialize}
          onSubmit={handleFormik}
          initialTouched={submitted ? fieldsTouched : {}}
        >
          {(formikProps) => {
            const {
              values,
              initialValues,
              handleSubmit,
              dirty,
              isValid,
            } = formikProps;

            const shouldDisabledSubmit = () => {
              if (disabledFormikSubmit !== null) return disabledFormikSubmit;
              return validateIsValidProp ? !isValid : disableOnDirty && !dirty;
            };

            const handleUpdateFormValues = useCallback(
              (fullValues, shouldFormat = true, setInitialValues = true) => {
                const newValues =
                  config.transformer && shouldFormat
                    ? config.transformer(fullValues)
                    : fullValues;
                setWithInitialValues(setInitialValues);
                setDetailValues(newValues);
              },
              [config.transformer]
            );

            const cancelCls = classNames(
              !showContinue && !cancelClass && 'offset-6',
              cancelClass || 'col-12 col-sm-6 mb-2 mb-sm-0 pl-0'
            );

            const continueCls = classNames(
              continueClass || 'col-12 col-sm-6 pl-0'
            );

            const bottom = (
              <div className="row mb-3">
                <div className={`col-md-${leftCol}`}>
                  {left || (
                    <>
                      <span style={{ marginRight: '1rem' }}>
                        <Icons.Coment height="2rem" />
                      </span>
                      * Campos obligatorios.
                    </>
                  )}
                </div>
                <div className={`col-md-${middleCol}`}>{middle}</div>
                <div className={`col-md-${rightCol} text-right pl-0`}>
                  <div className="row">
                    <div className={cancelCls}>
                      {showCancel && (
                        <Button
                          onClick={() => onCancelWrapper(formikProps)}
                          outline
                          block
                        >
                          {btnCancelLabel}
                        </Button>
                      )}
                    </div>

                    {showContinue && (
                      <div className={continueCls}>
                        <Button
                          disabled={shouldDisabledSubmit()}
                          type="submit"
                          block
                          onClick={() => {
                            if (!disableSubmit) {
                              setSubmitted(true);
                              handleSubmit(values, initialValues);
                            }
                            if (handleClickSubmit)
                              handleClickSubmit(formikProps);
                          }}
                        >
                          {btnSubmitLabel}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <>
                <Component
                  values={values}
                  initialValues={initialValues}
                  onUpdateForm={handleUpdateFormValues}
                  dirty={dirty}
                  submitted={submitted}
                  loader={loader}
                  responseDialog={responseDialog}
                  bottom={!withButtons && bottom}
                  openConfirmationMessage={openConfirmationMessage}
                  setShowResponseDialog={setShowResponseDialog}
                  setFieldsTouched={setFieldsTouched}
                  {...rest}
                />
                {withButtons && bottom}
              </>
            );
          }}
        </Formik>
      </>
    );
  };
};

export default withForm;
