import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const SignupModal = ({ isShow, onHide }) => {
  const [validated, setValidated] = useState(false);
  const signupFrm = useRef(null);

  const hideModal = () => {
    setValidated(false);
    onHide();
  };

  const handleSubmit = () => {
    setValidated(true);
  };

  return (
    <Modal
      show={isShow}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={hideModal}>
        <Modal.Title id="contained-modal-title-vcenter">
          회원가입 신청
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} ref={signupFrm}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              lg="12"
              className="mb-3"
              controlId="SignupModal.userNm"
            >
              <Form.Label>이름</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="이름을 입력하세요."
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              lg="6"
              className="mb-3"
              controlId="SignupModal.passwd"
            >
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                required
                type="password"
                autoComplete="off"
                placeholder="비밀번호를 입력하세요."
              />
              <Form.Text muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              lg="6"
              className="mb-3"
              controlId="SignupModal.passwdChk"
            >
              <Form.Label>비밀번호확인</Form.Label>
              <Form.Control
                required
                type="password"
                autoComplete="off"
                placeholder="비밀번호를 한번 더 입력하세요."
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              lg="6"
              className="mb-3"
              controlId="SignupModal.email"
            >
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="example@email.com" />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          등록
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default SignupModal;
