import React from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';

const { Header } = Layout;
const useStyles = createStyles(({ token, css }) => ({
  buttonStyle: css`
    font-size: '16px';
    width: 64;
    height: 64;
  `,
}));

const AppHeader = ({ collapsed, toggleCollapsed }) => {
  const { styles } = useStyles();
  return (
    <Header
      style={{
        padding: 0,
        background: '#fff',
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        className={styles.buttonStyle}
      />
    </Header>
  );
};

export default AppHeader;
