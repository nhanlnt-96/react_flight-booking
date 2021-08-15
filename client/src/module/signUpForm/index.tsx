import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAccount, signUpAccount } from '../../store/redux/auth/actions';
import { RootState } from '../../store/rootReducer';
import './SignInForm.scss';

const SignUpForm: FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const [validated, setValidated] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [signUpValue, setSignUpValue] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    repeatPassword: ""
  });
  const signUpHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpValue({
      ...signUpValue,
      [event.target.name]: event.target.value
    });
  };
  const onSignUpBtnClick = async () => {
    const {
      firstName,
      lastName,
      username,
      password,
      repeatPassword
    } = signUpValue;
    if (firstName && lastName && username && password && repeatPassword) {
      if (password === repeatPassword) {
        dispatch(signUpAccount(signUpValue));
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    } else {
      setValidated(false);
    }
  };
  const onMoveToSignInBtnClick = () => {
    dispatch(logOutAccount());
  }
  return (
    <Container className="auth-form">
      <h2>Sign Up</h2>
      {
        auth.authError ?
          <Alert variant="danger">{auth.authError}</Alert> : auth.authSuccess &&
          <Alert variant="success">
            {auth.authSuccess}
            <Link to="/sign-in">Sign In</Link>
          </Alert>
      }
      <Row className="col-12 col-lg-6 auth-form-item">
        <label htmlFor="firstName">First name</label>
        <input
          type="text" name="firstName" placeholder="First name"
          onChange={signUpHandleChange} />
        <span
          className={`${(!validated && !signUpValue.firstName) && 'p-active'}`}>Please
          enter your First name</span>
      </Row>
      <Row className="col-12 col-lg-6 auth-form-item">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text" name="lastName" placeholder="Last name"
          onChange={signUpHandleChange} />
        <span
          className={`${(!validated && !signUpValue.lastName) && 'p-active'}`}>Please
          enter your Last name</span>
      </Row>
      <Row className="col-12 col-lg-6 auth-form-item">
        <label htmlFor="username">Username</label>
        <input
          type="text" name="username" placeholder="Username"
          onChange={signUpHandleChange} />
        <span
          className={`${(!validated && !signUpValue.username) && 'p-active'}`}>Please
          enter your Username</span>
      </Row>
      <Row className="col-12 col-lg-6 auth-form-item">
        <label htmlFor="password">Password</label>
        <input
          type="password" name="password" placeholder="Password"
          onChange={signUpHandleChange} />
        <span
          className={`${(!validated && !signUpValue.password) && 'p-active'}`}>Please
          enter your Password</span>
      </Row>
      <Row className="col-12 col-lg-6 auth-form-item">
        <label htmlFor="repeatPassword">Repeat password</label>
        <input
          type="password" name="repeatPassword" placeholder="Repeat password"
          onChange={signUpHandleChange} />
        <span
          className={`${(!validated && !signUpValue.password) ? 'p-active' : !passwordMatch && 'p-active'}`}>Password doesn't match</span>
      </Row>
      <Row className="col-12 col-lg-6 auth-form-item">
        <p>Don't have an account ? <Link to="/sign-in"
                                         onClick={onMoveToSignInBtnClick}>Sign
          In</Link>
        </p>
      </Row>
      <Row className="col-6 col-lg-3 auth-form-item">
        <button type="submit" onClick={onSignUpBtnClick}>Sign Up</button>
      </Row>
    </Container>
  );
}

export default SignUpForm;