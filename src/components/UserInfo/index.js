import React from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import _has from 'lodash/has';
import moment from 'moment';

const UserInfo = (props) => {
  const { left, label = '' } = props;

  const isUpdated = !_isEmpty(props.updated);

  const actionProp = isUpdated ? 'updated' : 'inserted';

  const userName = _get(props, `${actionProp}.by.fullname`, 'Sin informacion');
  const dtModify = _get(props, `${actionProp}.at`, undefined);
  const dateInsert = dtModify
    ? moment(dtModify).format('DD/MM/YYYY hh:mm A')
    : '';

  const hasInsert = _has(props, 'inserted');

  const cls = classNames('d-flex flex-row', !left && 'justify-content-end');

  const principalLabel = isUpdated ? 'EDITADO' : 'ALTA';

  return hasInsert ? (
    <>
      {' '}
      <div className={cls}>
        <sub className="subtitle">
          {label || principalLabel}: {userName}{' '}
          <span style={{ textTransform: 'lowercase' }}>{dateInsert}</span>.
        </sub>
      </div>{' '}
      <br />{' '}
    </>
  ) : null;
};

export default UserInfo;
