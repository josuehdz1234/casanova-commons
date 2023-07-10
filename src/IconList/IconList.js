import React from 'react';
import PropTypes from 'prop-types';

function IconListItem(props) {
  const { item } = props;
  const { label, icon: Icon } = item;
  return (
    <div className="sidebar-item">
      <span className="sidebar-item-icon">
        <Icon alt={label} />
      </span>
    </div>
  );
}

function IconList(props) {
  const { items } = props;
  return (
    <div className="sidebar">
      {items.map((item) => {
        const { name } = item;
        return <IconListItem item={item} key={name} />;
      })}
    </div>
  );
}
IconList.propTypes = {
  items: PropTypes.array,
};

IconList.defaultProps = {
  items: [],
};
export default IconList;
