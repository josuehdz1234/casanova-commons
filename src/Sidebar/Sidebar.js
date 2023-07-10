import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  Fragment,
} from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _get from 'lodash/get';
import _throttle from 'lodash/debounce';
import cn from 'classnames';
import { HideMenu } from '../Icons';

const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

function SidebarItem(props) {
  const { active, expanded, item, onClick, labelVisible } = props;
  const { name, route, label, icon: Icon, show = true } = item;
  const isActive = active && active.startsWith(route);

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const className = cn(
    'nav-item',
    'sidebar-item',
    isActive && 'active',
    hasChildren && 'dropdown'
  );
  return (
    <>
      {show && (
        <li
          className={className}
          onClick={() => onClick(name, hasChildren && item.children[0].name)}
        >
          <span className="sidebar-item-icon">
            <Icon />
          </span>
          <span
            className={cn(
              'sidebar-item-label',
              labelVisible && 'visible',
              'text-left'
            )}
          >
            {label}
          </span>
          {isActive && <span className="arrow-left" />}
        </li>
      )}
    </>
  );
}

SidebarItem.propTypes = {
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
};

SidebarItem.defaultProps = {
  onClick: _noop,
};

function Sidebar(props) {
  const [expanded, expand] = useState(true);
  const [distanceToTop, setDistanceToTop] = useState(120);
  const [sticky, setSticky] = useState(false);
  const [timer, setTimer] = useState(null);
  const [labelVisible, setLabelVisible] = useState(true);
  const { items, activeRoute, onChangeRoute, children } = props;
  const active = _get(activeRoute, 'general.route');
  const ref = useRef(null);
  const sideBarRef = useRef(null);
  const sidebarListRef = useRef(null);
  const [listMinHeight, setListMinHeight] = useState('1px');

  const handleScroll = useCallback(
    _throttle(() => {
      setDistanceToTop(sideBarRef.current.getBoundingClientRect().top);
    }, 350),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setSticky(!entries[0].intersectionRatio);
      },
      {
        threshold: [0, 1],
      }
    );
    observer.observe(ref.current);

    if (!sticky) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      observer.disconnect();
      if (!sticky) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [expanded]);

  useEffect(() => {
    if (sidebarListRef.current) {
      const itemsHeight = Object.values(sidebarListRef.current.children).reduce(
        (acc, listItem) => {
          const { height = 0 } = listItem.getBoundingClientRect() || {};

          return acc + height;
        },
        0
      );

      if (itemsHeight) {
        const minHeight = window.parseInt(itemsHeight * 1.11);
        const newListMinHeight = `${minHeight}px`;

        setListMinHeight(newListMinHeight);
      }
    }
  }, [sidebarListRef]);

  const handleExpand = useCallback(() => {
    const next = !expanded;
    expand(next);

    if (next) {
      if (timer) {
        clearTimeout(timer);
      } else {
        const newTimer = setTimeout(() => {
          setTimer(null);
          setLabelVisible(true);
        }, 500);
        setTimer(newTimer);
      }
    } else {
      clearTimeout(timer);
      setTimer(null);
      setLabelVisible(false);
    }
  }, [expand, expanded]);

  return (
    <>
      <div ref={ref} style={{ height: 0, backgroundColor: 'red' }} />
      <div
        ref={sideBarRef}
        className={`sidebar ${expanded && 'expanded'} ${sticky && 'sticky'}`}
        style={
          sticky ? undefined : { height: `calc(100vh - ${distanceToTop}px)` }
        }
      >
        <ul
          className="nav flex-column sidebar-list"
          ref={sidebarListRef}
          style={{ minHeight: listMinHeight }}
        >
          {items.map((item) => {
            const { label } = item;
            return (
              <SidebarItem
                key={label}
                item={item}
                expanded={expanded}
                onClick={onChangeRoute}
                active={active}
                labelVisible={labelVisible}
              />
            );
          })}
          <li
            key="close"
            className="nav-item sidebar-item sidebar-toggle"
            onClick={handleExpand}
          >
            <span>
              <HideMenu />
            </span>
            <span>{expanded ? 'Cerrar menú' : ''}</span>
          </li>
        </ul>
      </div>
      <div className={`sidebar-pusher ${expanded && 'expanded'}`}>
        {children}
      </div>
    </>
  );
}

Sidebar.propTypes = {
  activeRoute: PropTypes.object,
};

export default Sidebar;
