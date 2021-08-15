import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { logOutAccount, signInAccount } from '../../store/redux/auth/actions';

const SignInForm: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const [validated, setValidated] = useState(true);
  const [signInValue, setSignInValue] = useState({
    username: '',
    password: ''
  });
  useEffect(() => {
    if (auth.isLogged) {
      history.push('/');
    }
  })
  const signInHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [event.target.name]: event.target.value
    });
  };
  const onSignInBtnClick = () => {
    if (signInValue.username && signInValue.password) {
      dispatch(signInAccount(signInValue));
    } else {
      setValidated(false);
    }
  };
  const onMoveToSignUpBtnClick = () => {
    dispatch(logOutAccount());
  }
  return (
    <Container className="auth-form">
      <h2>Sign In</h2>
      {
        auth.authError ?
          <Alert variant="danger">{auth.authError}</Alert> : auth.authSuccess &&
          <Alert variant="success">{auth.authSuccess}</Alert>
      }
      <Row className="col-12 col-lg-6 auth-form-item">
        <label htmlFor="username">Username</label>
        <input
          type="text" name="username" placeholder="Username"
          onChange={signInHandleChange} />
        <span
          className={`${(!validated && !signInValue.username) && 'p-active'}`}>Please
          enter your username</span>
      </Row>
      <Row className="col-12 col-lg-6 auth-form-item">
        <label htmlFor="password">Password</label>
        <input
          type="password" name="password" placeholder="Password"
          onChange={signInHandleChange} />
        <span
          className={`${(!validated && !signInValue.password) && 'p-active'}`}>Please
          enter your password</span>
      </Row>
      <Row className="col-12 col-lg-6 auth-form-item">
        <p>Don't have an account ? <Link to="/sign-up"
                                         onClick={onMoveToSignUpBtnClick}>Sign
          Up</Link>
        </p>
      </Row>
      <Row className="col-6 col-lg-3 auth-form-item">
        <button type="submit" onClick={onSignInBtnClick}>Sign In
        </button>
      </Row>
    </Container>
  );
};

export default SignInForm;