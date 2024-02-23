import {
  Button,
  Card,
  Col,
  Collapse,
  Dropdown,
  DropdownButton,
  Fade,
  Form,
  InputGroup,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import Layout from "../layout/Layout";
import UserForm from "./UserForm";
import { useState } from "react";

const UserView = () => {
  const [isForm, setForm] = useState(false);

  const onClose = () => {
    setForm(false);
  };

  return (
    <Layout>
      <Stack gap={3} className="mt-3">
        <Card>
          <Card.Header>사용자관리</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Form.Group
                  as={Col}
                  md={3}
                  lg={2}
                  className="mb-3"
                  controlId="userFrm.activeYn"
                >
                  <Form.Label>활성여부</Form.Label>
                  <Form.Select aria-label="활성여부">
                    <option>- 전체 -</option>
                    <option value="Y">활성</option>
                    <option value="N">비활성</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md={3}
                  lg={2}
                  className="mb-3"
                  controlId="userFrm.activeYn"
                >
                  <Form.Label>삭제여부</Form.Label>
                  <Form.Select aria-label="삭제여부">
                    <option>- 전체 -</option>
                    <option value="Y">삭제</option>
                    <option value="N">미삭제</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md={6}
                  lg={8}
                  className="mb-3"
                  controlId="userFrm.activeYn"
                >
                  <Form.Label>키워드검색</Form.Label>
                  <InputGroup className="mb-3">
                    <DropdownButton
                      variant="outline-secondary"
                      title="사용자이름"
                    >
                      <Dropdown.Item href="#">사용자이름</Dropdown.Item>
                      <Dropdown.Item href="#">로그인아이디</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control></Form.Control>
                  </InputGroup>
                </Form.Group>
              </Row>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="sm">
                검색
              </Button>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Stack direction="horizontal" gap={1}>
              <Button
                variant="primary"
                className="ms-auto"
                onClick={() => setForm(true)}
                aria-controls="example-collapse-text"
                aria-expanded={true}
              >
                등록
              </Button>
              <Button variant="warning">수정</Button>
              <Button variant="danger">삭제</Button>
            </Stack>

            <Table responsive striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <UserForm isForm={isForm} onClose={onClose} />
      </Stack>
    </Layout>
  );
};

export default UserView;
