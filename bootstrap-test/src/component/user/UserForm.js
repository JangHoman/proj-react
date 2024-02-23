import { useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Fade,
  Form,
  Row,
  Stack,
} from "react-bootstrap";

const UserForm = ({ isForm, onClose }) => {
  const [validated, setValidated] = useState(false);
  const signupFrm = useRef(null);

  const handleSubmit = () => {
    setValidated(true);
  };

  const closeForm = () => {
    setValidated(false);
    onClose();
  };

  if (!isForm) {
    return null;
  }

  return (
    <Collapse in={isForm} unmountOnExit={true}>
      <Card>
        <Card.Header>사용자 등록</Card.Header>
        <Card.Body>
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
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
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
        </Card.Body>
        <Card.Footer>
          <Stack direction="horizontal" gap={1}>
            <Button
              variant="outline-secondary"
              className="ms-auto"
              onClick={closeForm}
            >
              닫기
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              저장
            </Button>
          </Stack>
        </Card.Footer>
      </Card>
    </Collapse>
  );
};
export default UserForm;
