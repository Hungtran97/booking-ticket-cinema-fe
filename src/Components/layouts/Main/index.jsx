import { Layout } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import AppHeader from '../Components/AppHeader';
import MainContent from '../Components/MainContent';
import Sidebar from '../Components/Sidebar';

const useStyles = createStyles(({ css }) => ({
  layoutStyle: css`
    overflow: hidden;
    height: 100vh;
    width: 100%;
  `,
}));

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={styles.layoutStyle}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
