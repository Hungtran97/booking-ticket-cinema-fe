import { HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { createStyles } from 'antd-style';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const useStyles = createStyles(({ css }) => ({
  siderStyle: css``,
}));

const Sidebar = ({ collapsed, activePath }) => {
  const { styles } = useStyles();

  const menuItems = [
    { key: '1', icon: <HomeOutlined />, label: 'Home', path: '/home' },
    { key: '2', icon: <UserOutlined />, label: 'Users', path: '/users' },
    { key: '3', icon: <VideoCameraOutlined />, label: 'Videos', path: '/videos' },
    { key: '4', icon: <UploadOutlined />, label: 'Uploads', path: '/uploads' },
  ];
 const navigate = useNavigate();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className={styles.siderStyle}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[menuItems.find(item => item.path === activePath)?.key || '1']}
        items={menuItems.map((item) => ({
          ...item,
          label: item.label,
          onClick: () => navigate(item.path)
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
