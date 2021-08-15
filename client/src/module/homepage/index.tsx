import React, { FC } from 'react';
import './Homepage.scss';
import { Container, Row } from 'react-bootstrap';
import FlightSearchSection from '../../components/flightSearchSection';

const Homepage: FC = () => {
  return (
    <Container className="homepage" fluid>
      <Row>
        <FlightSearchSection />
      </Row>
      <Row>
        section 2
      </Row>
    </Container>
  );
};

export default Homepage;