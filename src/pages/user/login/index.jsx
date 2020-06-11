import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link, connect } from 'umi';
import styles from './style.less';
import LoginFrom from './components/Login';

const { UserName, Password, Submit } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userAndlogin = {}, submitting } = props;
  const { status, type: loginType } = userAndlogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'userAndlogin/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        {status === 'error' && loginType === 'account' && !submitting && (
          <LoginMessage content="Incorrect account or password（admin/ant.design）" />
        )}

        <UserName
          name="userName"
          placeholder="Username: admin or user"
          rules={[
            {
              required: true,
              message: 'Please enter username!',
            },
          ]}
        />
        <Password
          name="password"
          placeholder="Password: ant.design"
          rules={[
            {
              required: true,
              message: 'Please enter password!',
            },
          ]}
        />

        <div>
          <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
            Remember me
          </Checkbox>
        </div>
        <Submit loading={submitting}>Login</Submit>
      </LoginFrom>
    </div>
  );
};

export default connect(({ userAndlogin, loading }) => ({
  userAndlogin,
  submitting: loading.effects['userAndlogin/login'],
}))(Login);
