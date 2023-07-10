/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import cln from 'classnames';
import i18n from '@i18n';
import Dropdown from '../Dropdown';
import Circles from '../Circles';
import * as Icons from '../Icons';
import { SHOW_DROPDOWN_MODE } from '../utils/constants';
import VERSIONS from '../utils/constants/versions';
import noImage from './renderers/no-image.png';
import './Table.scss';

const ColumnHeader = ({ column, label }) => {
  const { align } = column;
  const className = `text-${align || 'left'}`;
  return (
    <th className={className}>
      <b>{label}</b>
    </th>
  );
};

const Cell = ({ column, value, children }) => {
  const { align } = column;
  const className = `text-${align || 'left'}`;
  return (
    <td className={className}>
      {children}
      {value}
    </td>
  );
};

const CellImage = ({ value }) => (
  <td>
    <img src={value || noImage} alt="background" />
  </td>
);

const CellLink = ({ column }) => {
  const { label } = column;
  return (
    <td>
      <a href="#">{label}</a>
    </td>
  );
};

const CellCard = () => {
  const { title, description } = {
    title: 'Chevrolet Beat',
    description: 'Apariencia moderna para el mundo',
  };
  return (
    <td>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link">Editar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Edicion rapida</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Ver</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Eliminar</a>
          </li>
        </ul>
      </div>
    </td>
  );
};

const cols = [
  {
    field: 'photo',
    label: 'Fotografia',
    align: 'center',
    renderer: CellImage,
  },
  {
    field: 'name',
    label: 'Nombre',
    renderer: CellCard,
  },
  {
    field: '250km',
    label: 'Km_250',
    renderer: Cell,
  },
  {
    field: 'milFree',
    label: 'Km libre',
    renderer: Cell,
  },
  {
    field: 'weekly',
    label: 'Semanal',
    renderer: Cell,
  },
  {
    field: 'monthly',
    label: 'Mensual',
    renderer: Cell,
  },
  {
    field: 'category',
    label: 'Categoria',
    renderer: CellLink,
  },
];

function RenderHead({ columns, additionalHeader, removeItems = false }) {
  return (
    <>
      <tr>
        {columns.map((col) => {
          const { label, field } = col;
          return (
            <ColumnHeader
              key={field}
              column={col}
              field={field}
              label={label}
            />
          );
        })}
        {removeItems && <ColumnHeader column="" field="" label="" />}
      </tr>

      {additionalHeader && (
        <tr className="custom-table-head-bg">
          {columns.map(({ AdditionalHeaderCamp, field }) => (
            <th key={field}>
              {AdditionalHeaderCamp && <AdditionalHeaderCamp />}
            </th>
          ))}
        </tr>
      )}
    </>
  );
}

const BodyRow = ({
  id: rowKey,
  columns = [],
  onRowClick,
  selectedRowDropdown,
  dropdownCell,
  rowClassName,
  data,
  showDropdownMode,
  cellToShowDropdown,
  onAddElementToDropdown,
  removeItems,
  dataList,
  dropdownOptions,
  onSelect,
  onDimmerClick,
  onRemoveItem,
  withEllipsis,
  ellipsisClassName = 'text-overflow-ellipsis-sm',
}) => {
  const rowRef = useRef({});
  const dropdownContainerRef = useRef(null);

  useEffect(() => {
    if (rowRef.current.getBoundingClientRect && dropdownContainerRef.current) {
      const { height } = rowRef.current.getBoundingClientRect();

      const finalHeight = height - height * 0.25;

      dropdownContainerRef.current.style.height = `${parseInt(
        finalHeight,
        10
      )}px`;
    }
  }, [rowRef, dropdownContainerRef]);

  const handleRowClick = useCallback(
    (rowData, rowToOpenDropdown = null) => {
      if (!rowRef.current.stopPropagation) {
        if (onRowClick) onRowClick(rowData);
        if (dropdownCell && showDropdownMode === SHOW_DROPDOWN_MODE.ROW_CLICK) {
          onAddElementToDropdown(rowToOpenDropdown);
        }
      } else if (rowRef.current) {
        rowRef.current.stopPropagation = false;
      }
    },
    [
      rowRef.current,
      onRowClick,
      dropdownCell,
      showDropdownMode,
      onAddElementToDropdown,
    ]
  );

  return (
    <tr
      ref={rowRef}
      tabIndex="0"
      onClick={() => handleRowClick(data, selectedRowDropdown ? null : rowKey)}
      className={`${dropdownCell ? 'DropdownCell' : ''} ${rowClassName}`}
    >
      {columns.map((col, i) => {
        const cellKey = col.field + data.id;
        const { field, renderer: CellComponent } = col;
        const value = _get(data, field);
        const firstCell = i === 0;
        const cellWithDropdown = firstCell && dropdownCell;
        const keyToValueDropdown =
          showDropdownMode === SHOW_DROPDOWN_MODE.ROW_CLICK ? rowKey : cellKey;
        const selectedDropdown = cellToShowDropdown === keyToValueDropdown;

        const handleAction = () => {
          if (showDropdownMode === SHOW_DROPDOWN_MODE.POINTS_CLICK) {
            rowRef.current.stopPropagation = true;

            onAddElementToDropdown(
              selectedDropdown ? null : keyToValueDropdown
            );
          }
        };

        return (
          <CellComponent
            key={cellKey}
            value={value}
            data={data}
            dataList={dataList}
            column={col}
          >
            {(props) => {
              const menuItems = props.dropdownOptions || dropdownOptions;
              const withMenuItems = menuItems && menuItems.length > 0;
              return (
                <div className={cln(cellWithDropdown && 'd-flex BodyRowCell')}>
                  {cellWithDropdown && withMenuItems && (
                    <div
                      className={`btn p-0 DropdownCell__Container ${
                        selectedDropdown ? 'ShowDropdownCell' : ''
                      }`}
                      onClick={handleAction}
                      onKeyPress={handleAction}
                      role="button"
                      tabIndex="-1"
                      ref={dropdownContainerRef}
                    >
                      <div className="col-md-12 d-flex flex-column flex-md-row justify-content-between p-0 mr-3">
                        <div className="m-auto">
                          <Dropdown
                            menuItems={menuItems}
                            onSelect={(values) =>
                              onSelect({ ...values, ...data })
                            }
                            isVisible={selectedDropdown}
                            onDimmerClick={onDimmerClick}
                            showButton={false}
                            buttonClassName="p-0 m-0 bg-white"
                          >
                            <Circles
                              className={`DropdownCell__Item ${
                                selectedDropdown ? 'd-flex' : ''
                              }`}
                              secondary
                            />
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className={cln(
                      withEllipsis && ellipsisClassName,
                      cellWithDropdown &&
                        withMenuItems &&
                        'd-flex DropdownCell text',
                      cellWithDropdown &&
                        withMenuItems &&
                        selectedDropdown &&
                        'text__active'
                    )}
                  >
                    {props.value}
                  </div>
                </div>
              );
            }}
          </CellComponent>
        );
      })}
      {removeItems && (
        <td>
          <div
            className="RemoveItemButton"
            type="button"
            onClick={() => onRemoveItem(data)}
            onKeyPress={() => onRemoveItem(data)}
            tabIndex="0"
            role="button"
          >
            <Icons.IcoDeleteGray width="1.5rem" height="1.5rem" />
          </div>
        </td>
      )}
    </tr>
  );
};

function RenderBody({
  dataList,
  columns,
  emptyMessage,
  rowClick,
  rowClassName,
  dropdownCell = false,
  dropdownOptions = [],
  showDropdownMode = SHOW_DROPDOWN_MODE.ROW_CLICK,
  onDropdownSelect = () => {},
  removeItems = false,
  onRemoveItem,
  withEllipsis,
  ellipsisClassName,
}) {
  const [cellToShowDropdown, setCellToShowDropdown] = useState(null);

  const handleAddElementToDropdown = useCallback((cell) => {
    setCellToShowDropdown(cell);
  }, []);

  const handleDimmerClick = useCallback(() => {
    setCellToShowDropdown(null);
  }, []);

  const handleSelect = useCallback(
    (values) => {
      onDropdownSelect(values);
      setCellToShowDropdown(null);
    },
    [onDropdownSelect, setCellToShowDropdown]
  );

  const handleRowClick = useCallback(
    (data) => {
      if (rowClick) rowClick(data);
    },
    [rowClick]
  );

  const handleRemoveItem = useCallback(
    (data) => {
      if (onRemoveItem) onRemoveItem(data);
    },
    [onRemoveItem]
  );

  const bodyRowProps = {
    columns,
    dataList,
    dropdownCell,
    showDropdownMode,
    dropdownOptions,
    removeItems,
    onDimmerClick: handleDimmerClick,
    onSelect: handleSelect,
    onRowClick: handleRowClick,
    onRemoveItem: handleRemoveItem,
    onAddElementToDropdown: handleAddElementToDropdown,
    withEllipsis,
    ellipsisClassName,
  };

  return (
    <>
      {dataList.length > 0 ? (
        dataList.map((data) => {
          const { id, uuid } = data;
          const rowKey = id || uuid;
          const selectedRowDropdown = cellToShowDropdown === rowKey;
          return (
            <BodyRow
              key={rowKey}
              id={rowKey}
              selectedRowDropdown={selectedRowDropdown}
              cellToShowDropdown={cellToShowDropdown}
              data={data}
              {...bodyRowProps}
            />
          );
        })
      ) : (
        <tr tabIndex="0" className={rowClassName}>
          <td className="empty-row" colSpan={columns.length}>
            {emptyMessage}
          </td>
        </tr>
      )}
    </>
  );
}

function Table(props) {
  const {
    isResponsive = true,
    className = '',
    primary = false,
    variant = '',
    version = VERSIONS.V2,
  } = props;

  const tableClassName = useMemo(
    () =>
      cln(
        `Table Table__${version} table table-striped table-borderless ${className} `
      ),
    [className, version]
  );

  const theadClassName = useMemo(() => {
    const tablePrimary = primary && 'Table__Thead--primary';
    const tableWithVariant = variant && `Table__Thead--${variant}`;

    return cln(tablePrimary, tableWithVariant);
  }, [primary, variant]);

  return (
    <div className={cln('d-inline-block', isResponsive && 'table-responsive')}>
      <table className={tableClassName}>
        <thead className={theadClassName}>
          <RenderHead {...props} />
        </thead>
        <tbody>
          <RenderBody {...props} />
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.object),
  rowClassName: PropTypes.string,
  emptyMessage: PropTypes.string,
  rowClick: PropTypes.func,
  columns: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
  withEllipsis: PropTypes.bool,
  ellipsisClassName: PropTypes.string,
};

Table.defaultProps = {
  dataList: [],
  columns: cols,
  emptyMessage: i18n('ERROR__COMMONS__NOT_FOUND'),
  rowClassName: '',
  rowClick: () => {},
};

export default Table;
