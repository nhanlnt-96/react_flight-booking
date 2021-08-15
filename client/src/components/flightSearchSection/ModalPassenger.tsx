import React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

interface Props {
  showModal: boolean,
  setShowModal:  React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPassenger = ({ showModal, setShowModal }: Props) => {
  const onSubmitBtnClick = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            No. of Passengers
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="passengers-no">
            <Row className="passengers">
              <Col className="col-6 d-flex flex-row align-items-center">
                <div className="passengers-icon">
                  <i className='bx bx-body'></i>
                </div>
                <div className="passengers-label">
                  <p>Adult</p>
                  <span>(age 12 or over)</span>
                </div>
              </Col>
              <Col
                className="col-6 d-flex justify-content-end align-items-center">
                <Col className="col-lg-4 passengers-btn">
                  <div className="item">
                    <i className='bx bx-minus text-danger'></i>
                  </div>
                  <div className="item show-number">
                    1
                  </div>
                  <div className="item">
                    <i className='bx bx-plus text-success'></i>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row className="mt-3 mb-3 passengers">
              <Col className="col-6 d-flex flex-row align-items-center">
                <div className="passengers-icon">
                  <i className='bx bx-body'></i>
                </div>
                <div className="passengers-label">
                  <p>Child</p>
                  <span>(age 2 - 11)</span>
                </div>
              </Col>
              <Col
                className="col-6 d-flex justify-content-end align-items-center">
                <Col className="col-lg-4 passengers-btn">
                  <div className="item">
                    <i className='bx bx-minus text-danger'></i>
                  </div>
                  <div className="item show-number">
                    1
                  </div>
                  <div className="item">
                    <i className='bx bx-plus text-success'></i>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row className="passengers">
              <Col className="col-6 d-flex flex-row align-items-center">
                <div className="passengers-icon">
                  <i className='bx bx-body'></i>
                </div>
                <div className="passengers-label">
                  <p>Infant</p>
                  <span>(below age 2)</span>
                </div>
              </Col>
              <Col
                className="col-6 d-flex justify-content-end align-items-center">
                <Col className="col-lg-4 passengers-btn">
                  <div className="item">
                    <i className='bx bx-minus text-danger'></i>
                  </div>
                  <div className="item show-number">
                    1
                  </div>
                  <div className="item">
                    <i className='bx bx-plus text-success'></i>
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmitBtnClick}>Done</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPassenger;
