import React, { FC, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup, ListGroup,
  Row
} from 'react-bootstrap';
import './FlightSearchSection.scss';
import ModalPassenger from './ModalPassenger';
import { getListPlace } from '../../network/services';
import { IListPlaceData } from '../../models';

interface ISearchInput {
  originPlace: string,
  destinationPlace: string
};

interface IRequestResult {
  resultOriginPlace: IListPlaceData[],
  resultDestinationPlace: IListPlaceData[]
};

interface IShowListDetail {
  originPlace: boolean,
  destinationPlace: boolean
}

const FlightSearchSection: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<ISearchInput>({
    originPlace: '',
    destinationPlace: ''
  });
  const [data, setData] = useState<IRequestResult>({
    resultDestinationPlace: [],
    resultOriginPlace: []
  });
  const [showList, setShowList] = useState<IShowListDetail>({
    originPlace: false,
    destinationPlace: false
  })
  const onShowModalInputClick = () => {
    setShowModal(true);
  };
  const onSelectOriginPlace = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput({
      ...searchInput,
      originPlace: event.target.value
    });
    if (event.target.value) {
      await getListPlace(searchInput.originPlace).then((response) => {
        setData({
          resultOriginPlace: response.data.Places,
          resultDestinationPlace: []
        });
        setShowList({
          originPlace: true,
          destinationPlace: false
        });
      });
    } else {
      setShowList({
        originPlace: false,
        destinationPlace: false
      });
    }
  };
  const onSelectDestinationPlace = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput({
      ...searchInput,
      destinationPlace: event.target.value
    });
    if (event.target.value) {
      await getListPlace(searchInput.destinationPlace).then((response) => {
        setData({
          resultOriginPlace: [],
          resultDestinationPlace: response.data.Places
        });
        setShowList({
          originPlace: false,
          destinationPlace: true
        });
      });
    } else {
      setShowList({
        originPlace: false,
        destinationPlace: false
      });
    }
  }
  const onSelectPlaceBtnClick = (type: string, place: string) => {
    if (type === 'originPlace') {
      setSearchInput({
        ...searchInput,
        originPlace: place
      });
      setShowList({
        ...showList,
        originPlace: false,
      });
    } else {
      setSearchInput({
        ...searchInput,
        destinationPlace: place
      });
      setShowList({
        ...showList,
        destinationPlace: false
      });
    }
  }
  const onSearchBtnClick = async () => {
    console.table(searchInput);
  }
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
                <FormControl autoComplete="off" id="inlineFormInputGroup"
                             placeholder="Ex: Ho Chi Minh City (SGN)"
                             name="originPlace"
                             value={searchInput.originPlace}
                             onChange={onSelectOriginPlace} />
              </InputGroup>
              <ListGroup className="dropdown-list">
                {
                  showList.originPlace && data.resultOriginPlace.map((val, index) => {
                    return (
                      <ListGroup.Item key={index}
                                      style={{ color: "black" }}
                                      onClick={() => onSelectPlaceBtnClick('originPlace', val.PlaceName)}
                      >
                        {val.PlaceName}
                      </ListGroup.Item>
                    )
                  })
                }
              </ListGroup>
            </Col>
            <Col className="col-12 col-lg-4 align-items-center">
              <Form.Label htmlFor="inlineFormInputGroup">
                To
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text className="icons-size">
                  <i className='bx bxs-plane-land'></i>
                </InputGroup.Text>
                <FormControl autoComplete="off" id="inlineFormInputGroup"
                             placeholder="Ex: Dalat (DLI)"
                             name="destinationPlace"
                             value={searchInput.destinationPlace}
                             onChange={onSelectDestinationPlace} />
              </InputGroup>
              <ListGroup className="dropdown-list">
                {
                  showList.destinationPlace && data.resultDestinationPlace.map((val, index) => {
                    return (
                      <ListGroup.Item key={index}
                                      style={{ color: "black" }}
                                      onClick={() => onSelectPlaceBtnClick('destinationPlace', val.PlaceName)}
                      >
                        {val.PlaceName}
                      </ListGroup.Item>
                    )
                  })
                }
              </ListGroup>
            </Col>
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
              <Button onClick={onSearchBtnClick}>Search Flights</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default FlightSearchSection;
