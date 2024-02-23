import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>패키지관리시스템</Accordion.Header>
              <Accordion.Body>
                <Stack gap={3}>
                  <p>
                    시스템관리에 필요한 기능들이 통합된 시스템입니다. 사용자,
                    그룹, 권한, 부서 관리기능이 포함되어있습니다. 이 시스템은
                    시스템관리자 권한을 소유한 사용자만 접근할 수 있습니다.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => navigate("/mgt/user")}
                  >
                    이동하기
                  </Button>
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>통합메시징시스템</Accordion.Header>
              <Accordion.Body>
                <Stack gap={3}>
                  <p>
                    통합 메시징 시스템은 웹으로 다양한 유형의 메시지를 전송 할
                    수 있는 시스템입니다. 메시지를 보다 편리하게 전송 할 수
                    있도록 개인주소록을 관리 할 수 있습니다. 전송 시
                    외부시스템과 연계하여 사용자가 원하는 대상을 다양하게 선택할
                    수 있습니다. 특정번호 수신거부 기능을 사용하여 대상을 필터링
                    할 수 있습니다. 이 시스템은 관리자의 승인이 있어야 사용할 수
                    있습니다. 시스템에 접근하려면 하단의 "시작하기" 버튼을
                    클릭하세요.
                  </p>
                  <Button size="sm">이동하기</Button>
                </Stack>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};
export default Main;
