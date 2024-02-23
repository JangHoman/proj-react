import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import SignupModal from "./SignupModal";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["saveLoginId"]);
  const [isSaveId, setIsSaveId] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [validated, setIsValidated] = useState(false);
  const navigate = useNavigate();
  const loginFrm = useRef(null);

  useEffect(() => {
    if (cookies.saveLoginId !== undefined) {
      setLoginId(cookies.saveLoginId);
      setIsSaveId(true);
    }
  }, [cookies.saveLoginId]);

  const doLogin = (e) => {
    if (loginFrm.current.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      navigate("/main");
    }

    setIsValidated(true);
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
              <Form noValidate validated={validated} ref={loginFrm}>
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="loginId"
                  >
                    <Form.Label>LoginId</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="LoginId"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter loginId.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="passwd"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter password.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Form>
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
                  onClick={() => setIsShow(true)}
                >
                  회원가입
                </Button>
                <SignupModal isShow={isShow} onHide={() => setIsShow(false)} />
              </div>
              <div className="clearfix"></div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <Button variant="primary" size="lg" onClick={doLogin}>
                  로그인
                </Button>
              </div>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
