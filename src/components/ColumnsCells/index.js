import React, { useMemo } from 'react';
import classNames from 'classnames';
import { getTextColor } from '../../utils/colors';

export const Cell = (props) => {
  const {
    children,
    className,
    style = {},
    Container = (containerProps) => <>{containerProps.children}</>,
  } = props;
  return (
    <td className={className} style={style}>
      <Container {...props}>{children(props)}</Container>
    </td>
  );
};

export const CellText = (props) => {
  const formatedProps = useMemo(() => {
    const { column = {} } = props;
    const { align } = column;
    const className = classNames(`text-${align || 'left'}`);
    return { ...props, className };
  }, [props]);

  return <Cell {...formatedProps} />;
};

export const CellStatus = (props) => {
  const formatedProps = useMemo(() => {
    const { value = '', column, statusColor = null } = props;
    const { align } = column;
    const stringValue = typeof value === 'string';

    const textColor = classNames(
      // eslint-disable-next-line no-nested-ternary
      stringValue && getTextColor(value)
        ? getTextColor(value)
        : value
        ? 'success'
        : 'danger'
    );

    const className = classNames(
      `text-${align || 'left'}`,
      !statusColor && `text-${`${textColor || 'default'}`}`
    );

    // eslint-disable-next-line no-nested-ternary
    const valueToShow = stringValue ? value : value ? 'Activo' : 'Inactivo';

    const style = { color: statusColor || '' };

    return { ...props, className, value: valueToShow, style };
  }, [props]);

  return <Cell {...formatedProps} />;
};

export const CellDashedContainer = (props) => {
  const { fixedColor, textClass, value } = props;

  const cls = classNames(
    'dash',
    value.toLowerCase() !== 'normal' && 'dash--error'
  );

  const textClasses = classNames(
    'd-flex flex-row align-items-center',
    textClass
  );

  const style = fixedColor ? { backgroundColor: fixedColor } : {};
  return (
    <div className={textClasses}>
      <div className={cls} style={style} />
      {value}
    </div>
  );
};

export const CellDashed = (props) => {
  const formatedProps = useMemo(() => {
    const { column } = props;
    const { align = 'left' } = column;
    const className = classNames(`text-${align}`);
    return { ...props, className };
  }, [props]);

  return <Cell {...formatedProps} Container={CellDashedContainer} />;
};
