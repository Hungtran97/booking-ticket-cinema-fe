import { UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const EmailField = ({ control, errors }) => {
  return (
    <Form.Item validateStatus={errors.email ? 'error' : ''} help={errors.email?.message}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <Input {...field} prefix={<UserOutlined />} placeholder="Email" />}
      />
    </Form.Item>
  );
};
export default EmailField;
