import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useCookies } from "react-cookie";
import SignupModal from "./SignupModal";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["saveLoginId"]);
  const [isSaveId, setIsSaveId] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  useEffect(() => {
    if (cookies.saveLoginId !== undefined) {
      setLoginId(cookies.saveLoginId);
      setIsSaveId(true);
    }
  }, [cookies.saveLoginId]);

  const doLogin = (e) => {
    e.preventDefault();
  };

  const saveLoginId = (e) => {
    setIsSaveId(e.target.checked);
    if (e.target.checked) {
      setCookie("saveLoginId", loginId, { maxAge: 2000 });
    } else {
      removeCookie("saveLoginId");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <Card.Header>
              <h4>사용자로그인</h4>
            </Card.Header>
            <Card.Body>
              <Form id="loginFrm">
                <Form.Group className="mb-3" controlId="loginId">
                  <Form.Label>LoginId</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="LoginId"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwd">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </Form.Group>
                <div className="float-start">
                  <Form.Check
                    type="checkbox"
                    id="saveId"
                    label="아이디저장"
                    onChange={saveLoginId}
                    checked={isSaveId}
                  />
                </div>
                <div className="float-end">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => setSignupModal(true)}
                  >
                    회원가입
                  </Button>
                  <SignupModal
                    show={signupModal}
                    onHide={() => setSignupModal(false)}
                    size="md"
                  />
                </div>
                <div className="clearfix"></div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <Button variant="primary" size="lg" onClick={doLogin}>
                    로그인
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
