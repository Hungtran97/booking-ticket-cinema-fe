import { unwrapResult } from '@reduxjs/toolkit';
import { notification } from 'antd';
import LoginForm from 'feature/Auth/LoginForm';
import { login } from 'feature/Auth/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

Login.propsTypes = {};
function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description,
    });
  };
  const handleOnSubmit = async (values) => {
    try {
      const userInfor = {
        username: values.email,
        password: values.password,
      };
      // Handle form submission, e.g., API call
      const action = login(userInfor);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      openNotificationWithIcon('success','Login success');
      setTimeout(() => navigate('/home'), 2000);
    } catch (error) {
      openNotificationWithIcon('error', 'Login fail');}
  };
  return (
    <div>
      {contextHolder}
      <LoginForm onSubmit={handleOnSubmit} />
    </div>
  );
}
export default Login;
