import { LockOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import EmailField from '../Components/EmailField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${token.colorBgLayout};
  `,
  form: css`
    max-width: 500px;
    margin: auto;
    padding: ${token.padding}px;
    background-color: ${token.colorBgContainer};
    border-radius: ${token.borderRadiusLG}px;
    box-shadow: ${token.boxShadow};
    @media (max-width: 480px) {
      width: 100%;
    }
    @media (max-width: 767px) and (min-width: 481px) {
      width: 80%;
    }
    @media (min-width: 768px) {
      width: 50%;
    }
  `,
  title: css`
    display: flex;
    justify-content: center;
    padding: 10px 0 20px 0;
    font-weight: bold;
  `,
}));
const LogLoginForm = () => {
  const { styles, cx } = useStyles();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={styles.container}>
      <Form name="login" onFinish={handleSubmit(onSubmit)} className={styles.form}>
        <span className={styles.title}> LOGIN FORM </span>
        <EmailField control={control} errors={errors} />
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LogLoginForm;
