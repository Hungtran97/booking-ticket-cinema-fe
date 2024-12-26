import React from 'react';
import { Layout } from 'antd';
import { createStyles } from 'antd-style';

const { Content } = Layout;

const useStyles = createStyles(({ token, css }) => ({
  contentStyle: css`
    margin: 24px 16px 0px;
    padding: 24px;
    min-height: 280px;
    background: ${token.colorBgContainer};
    border-radius: ${token.borderRadiusLG}px;
  `,
}));

const Users = () => {
  const { styles } = useStyles();
  return <Content className={styles.contentStyle}>Users Content</Content>;
};

export default Users;
