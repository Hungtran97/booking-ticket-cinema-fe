import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { createStyles } from 'antd-style';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import EmailField from '../Components/EmailField';

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
  button: css`
    margin-top: 10px;
    text-align: center;
  `,
  flex: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
}));

const LogLoginForm = () => {
  const { styles } = useStyles();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    remember: Yup.boolean(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (values) => {
    console.log('Received values of form: ', values);
    // Handle form submission, e.g., API call
  };

  return (
    <div className={styles.container}>
      <Form name="login" onFinish={handleSubmit(onSubmit)} className={styles.form} layout="vertical">
        <span className={styles.title}>LOGIN FORM</span>

        {/* Email Field */}
        <EmailField control={control} errors={errors} />

        {/* Password Field */}
        <Form.Item label="Password" validateStatus={errors.password ? 'error' : ''} help={errors.password?.message}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input.Password {...field} prefix={<LockOutlined />} placeholder="Password" />}
          />
        </Form.Item>

        {/* Remember Me and Forgot Password */}
        <Form.Item>
          <div className={styles.flex}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </div>
        </Form.Item>

        {/* Submit Button and Register Link */}
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          <div className={styles.button}>
            or <a href="">Register now!</a>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogLoginForm;
