import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { logOutAccount } from '../../store/redux/auth/actions';

const NavigationHeader: FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const { authAccount } = auth;
  const onLogOutBtnClick = () => {
    dispatch(logOutAccount());
  }
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <img src={Logo} alt="tech-life-logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {
          auth.isLogged ? (
            <>
              <Nav className="mr-auto">
                <Nav.Link href="#/flights">Flights</Nav.Link>
                <Nav.Link href="#/hotels">Hotels</Nav.Link>
                <Nav.Link href="#/car-rental">Car
                  Rental</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Item>
                  <DropdownButton id="dropdown-basic-button"
                                  title={authAccount && `${authAccount.firstName} ${authAccount.lastName}`}>
                    <Dropdown.Item
                      onClick={onLogOutBtnClick}>Logout</Dropdown.Item>
                  </DropdownButton>
                </Nav.Item>
              </Nav>
            </>
          ) : (
            <Nav className="col-12 p-0 justify-content-end">
              <Nav.Item>
                <Nav.Link href="#/sign-up">Sign Up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/sign-in">Sign In</Nav.Link>
              </Nav.Item>
            </Nav>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationHeader;
