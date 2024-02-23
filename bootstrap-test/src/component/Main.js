import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Layout from "./layout/Layout";
import { useState } from "react";
import CustomModal from "./login/SignupModal";
import SignupModal from "./login/SignupModal";

const Main = () => {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  return (
    <Layout>
      <Container>
        <h3>사용자목록</h3>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>카드헤더</Card.Header>
              <Card.Body>카드바디</Card.Body>
              <Card.Footer>카드푸터</Card.Footer>
            </Card>
          </Col>
        </Row>
        <Button variant="primary" onClick={() => setModalShow1(true)}>
          Launch vertically centered modal
        </Button>
        <Button variant="primary" onClick={() => setModalShow2(true)}>
          Launch vertically centered modal
        </Button>
        <CustomModal
          show={modalShow1}
          onHide={() => setModalShow1(false)}
          size="md"
        />
        <SignupModal
          show={modalShow2}
          onHide={() => setModalShow2(false)}
          size="md"
        />
      </Container>
    </Layout>
  );
};
export default Main;
