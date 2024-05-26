import { LoginForm } from "../../Molecules";

import './styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page-wrapper">
        <div className="login-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
