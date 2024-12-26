import { LockOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

const PasswordField = ({ control, errors }) => {
  return (
    <Form.Item label="Password" validateStatus={errors.password ? 'error' : ''} help={errors.password?.message}>
      <Controller
        name="password"
        control={control}
        render={({ field }) => <Input.Password {...field} prefix={<LockOutlined />} placeholder="Password" />}
      />
    </Form.Item>
  );
};
export default PasswordField;
