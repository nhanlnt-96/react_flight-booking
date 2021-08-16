import React, { FC, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row
} from 'react-bootstrap';
import './FlightSearchSection.scss';
import ModalPassenger from './ModalPassenger';
import { ListPlaceData, SearchFlightData } from '../../models';
import { getListPlace } from '../../network/services/listPlace';

const FlightSearchSection: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [returnDate, setReturnData] = useState<boolean>(false);
  const [place, setPlace] = useState<string>('');
  const [data, setData] = useState<ListPlaceData[]>([]);
  const onShowModalInputClick = () => {
    setShowModal(true);
  };
  const onReturnDateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReturnData(event.target.checked);
  };
  const onHandleInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(event.target.value);
    const place = event.target.value;
    await getListPlace(place).then((response) => setData(response.data.Places));
  }
  // const onSearchBtnClick = async () => {
  //   await getListPlace(place).then((response) => setData(response.data.Places));
  // }
  return (
    <Container fluid className="flight-search-container">
      <Container>
        <h1>Let the journey begin</h1>
        <Form className="flight-search-form">
          <Row className="mt-3 mb-3">
            <Col className="col-12 col-lg-4 align-items-center">
              <Form.Label htmlFor="inlineFormInputGroup">
                From
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text className="icons-size">
                  <i className='bx bxs-plane-take-off'></i>
                </InputGroup.Text>
                <FormControl id="inlineFormInputGroup"
                             placeholder="Ex: Ho Chi Minh City (SGN)"
                             value={place} onChange={onHandleInput} />
              </InputGroup>
            </Col>
            {/*  <Col className="col-12 col-lg-4 align-items-center">*/}
            {/*    <Form.Label htmlFor="inlineFormInputGroup">*/}
            {/*      To*/}
            {/*    </Form.Label>*/}
            {/*    <InputGroup className="mb-2">*/}
            {/*      <InputGroup.Text className="icons-size">*/}
            {/*        <i className='bx bxs-plane-land'></i>*/}
            {/*      </InputGroup.Text>*/}
            {/*      <FormControl id="inlineFormInputGroup"*/}
            {/*                   placeholder="Ex: Dalat (DLI)" />*/}
            {/*    </InputGroup>*/}
            {/*  </Col>*/}
            {/*  <Col className="col-12 col-lg-4 align-items-center">*/}
            {/*    <Form.Label htmlFor="inlineFormInputGroup">*/}
            {/*      No. of Passengers*/}
            {/*    </Form.Label>*/}
            {/*    <InputGroup className="mb-2">*/}
            {/*      <InputGroup.Text className="icons-size">*/}
            {/*        <i className='bx bxs-group'></i>*/}
            {/*      </InputGroup.Text>*/}
            {/*      <FormControl id="inlineFormInputGroup"*/}
            {/*                   value="1 Adult, 0 Child, 0 Infant"*/}
            {/*                   onClick={onShowModalInputClick} />*/}
            {/*    </InputGroup>*/}
            {/*    <ModalPassenger showModal={showModal}*/}
            {/*                    setShowModal={setShowModal} />*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            {/*<Row>*/}
            {/*  <Col className="col-12 col-lg-4 align-items-center">*/}
            {/*    <Form.Label htmlFor="inlineFormInputGroup">*/}
            {/*      Departure Date*/}
            {/*    </Form.Label>*/}
            {/*    <InputGroup className="mb-2">*/}
            {/*      <InputGroup.Text className="icons-size">*/}
            {/*        <i className='bx bxs-calendar'></i>*/}
            {/*      </InputGroup.Text>*/}
            {/*      <input type="date" id="inlineFormInputGroup"*/}
            {/*             className="form-control" />*/}
            {/*    </InputGroup>*/}
            {/*  </Col>*/}
            {/*  <Col className="col-12 col-lg-4 align-items-center">*/}
            {/*    <Form.Group className="mb-2" controlId="formBasicCheckbox">*/}
            {/*      <Form.Check type="checkbox" label="Return Date"*/}
            {/*                  onChange={onReturnDateHandle} />*/}
            {/*    </Form.Group>*/}
            {/*    {*/}
            {/*      returnDate && (*/}
            {/*        <InputGroup className="mb-2">*/}
            {/*          <InputGroup.Text className="icons-size">*/}
            {/*            <i className='bx bxs-calendar'></i>*/}
            {/*          </InputGroup.Text>*/}
            {/*          <input type="date" id="inlineFormInputGroup"*/}
            {/*                 className="form-control" />*/}
            {/*        </InputGroup>*/}
            {/*      )*/}
            {/*    }*/}
            {/*  </Col>*/}
            <Col
              className="col-12 col-lg-4 align-items-center d-flex justify-content-center">
              <Button>Search Flights</Button>
            </Col>
          </Row>
        </Form>
        {
          data.map((val, index) => {
            return (
              <ul key={index} style={{ backgroundColor: "white" }}>
                <li>{val.PlaceName}</li>
              </ul>
            )
          })
        }
      </Container>
    </Container>
  );
};

export default FlightSearchSection;
