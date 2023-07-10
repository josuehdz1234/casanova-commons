import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function MiniIconCard({
  title = '',
  Icon,
  uppercase = false,
  size = 'medium',
  containerStyle = '',
  iconDomProps,
  classNameCustomSize,
  classNameTitleSize,
  onClick,
  containerClassName = '',
}) {
  const getSize = () => {
    let width = '200px';
    let height = '190px';
    let titleFontSize = 'h5';
    let containerClass = 'mini-card-container';

    switch (size) {
      case 'extraSmall':
        width = '30px';
        height = '30px';
        containerClass = 'mini-card-container-xs';
        break;
      case 'small':
        width = '140px';
        height = '130px';
        titleFontSize = 'h6';
        containerClass = 'mini-card-container-xs';
        break;
      case 'medium':
        width = '200px';
        height = '190px';
        titleFontSize = 'h5';
        break;
      default:
        break;
    }
    const container = {
      width,
      height,
    };
    return [container, titleFontSize, containerClass];
  };

  return (
    <div
      className={`d-inline-block ${containerStyle} ${
        size !== 'extraSmall' && 'btn'
      } ${containerClassName}`}
      onClick={onClick}
      {...iconDomProps}
    >
      <div
        className={classNameCustomSize || getSize()[2]}
        style={classNameCustomSize ? {} : getSize()[0]}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="container-fluid">
            <div className="row p-0">
              <div className="col-12 p-0 justify-content-center d-flex align-items-center">
                {Icon && Icon}
              </div>
            </div>
            {size !== 'extraSmall' && (
              <div className="row mt-3 p-0">
                <div className="col-12 p-0">
                  <div
                    className={`text-secondary ${
                      classNameTitleSize || getSize()[1]
                    }`}
                  >
                    {uppercase ? title.toUpperCase() : title}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

MiniIconCard.propTypes = {
  Icon: PropTypes.node,
  title: PropTypes.string,
  uppercase: PropTypes.bool,
  containerStyle: PropTypes.string,
};
