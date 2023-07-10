import React from 'react';
import Layout from './Layout';
import Title from './Title';
import Body from './Body';

export function withLayout(menuItems) {
  return (Component) => (props) => (
    <Layout
      title={props.title}
      sidebarItems={menuItems}
      showSidebar={props.showSidebar}
    >
      <Component {...props} />
    </Layout>
  );
}

Layout.Title = Title;
Layout.Body = Body;

export default Layout;
