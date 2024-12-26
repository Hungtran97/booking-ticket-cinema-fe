import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
const NotAuthorized = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        {' '}
        <Link to={'/home'}> Back Home</Link>
      </Button>
    }
  />
);
export default NotAuthorized;
