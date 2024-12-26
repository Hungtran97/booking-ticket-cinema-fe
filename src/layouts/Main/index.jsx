import { Layout } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import AppHeader from '../../Components/AppHeader';
import Users from '../../Components/Users';
import Sidebar from '../../Components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Home from 'Components/Home';

const useStyles = createStyles(({ css }) => ({
  layoutStyle: css`
    overflow: hidden;
    height: 100vh;
    width: 100%;
  `,
}));

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Layout className={styles.layoutStyle}>
      <Sidebar collapsed={collapsed} activePath={pathname} />
      <Layout>
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default Main;
