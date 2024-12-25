import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Form } from 'antd';
import { createStyles } from 'antd-style';
import EmailField from 'Components/layouts/Components/EmailField';
import PasswordField from 'Components/layouts/Components/PasswordField';
import { Controller, useForm } from 'react-hook-form';
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

const LoginForm = (props) => {
  const { styles } = useStyles();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    // email: Yup.string().email('Invalid email').required('Email is required'),
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
      email: 'emilys',
      password: 'emilyspass',
      remember: false,
    },
  });

  const onSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {onSubmit(values)}
  };

  return (
    <div className={styles.container}>
      <Form name="login" onFinish={handleSubmit(onSubmit)} className={styles.form} layout="vertical">
        <span className={styles.title}>LOGIN FORM</span>

        {/* Email Field */}
        <EmailField control={control} errors={errors} />

        {/* Password Field */}
        <PasswordField control={control} errors={errors} />

        {/* Remember Me and Forgot Password */}
        <Form.Item>
          <div className={styles.flex}>
            <Form.Item valuePropName="checked" noStyle>
              <Controller
                name="remember"
                control={control}
                render={({ field }) => <Checkbox checked={field.value} >Remember me</Checkbox>}
              />
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

export default LoginForm;
