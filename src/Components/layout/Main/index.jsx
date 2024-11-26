import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { createStyles } from 'antd-style';
const { Header, Sider, Content } = Layout;
const useStyles = createStyles(({ token, css }) => ({
  layoutStyle: css`
    border-radius: 8px;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  `,
  siderStyle: css`
    border-radius: 8px;
  `,
  contentStyle: css`
    margin: 24px 16px 0px;
    padding: 24px;
    min-height: 280px;
    background: ${token.colorBgContainer};
    border-radius: ${token.borderRadiusLG}px;
  `,
}));
const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { styles, cx } = useStyles();
  return (
    <Layout className={styles.layoutStyle}>
      <Sider trigger={null} collapsible collapsed={collapsed} className={styles.siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className={styles.contentStyle}>Content</Content>
      </Layout>
    </Layout>
  );
};
export default Main;
