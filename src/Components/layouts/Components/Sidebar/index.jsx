import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';

const { Sider } = Layout;

const useStyles = createStyles(({ css }) => ({
  siderStyle: css``,
}));

const Sidebar = ({ collapsed }) => {
  const { styles } = useStyles();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className={styles.siderStyle}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          { key: '1', icon: <UserOutlined />, label: 'nav 1' },
          { key: '2', icon: <VideoCameraOutlined />, label: 'nav 2' },
          { key: '3', icon: <UploadOutlined />, label: 'nav 3' },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
