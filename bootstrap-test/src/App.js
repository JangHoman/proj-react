import "bootstrap/dist/css/bootstrap.min.css";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import "./App.css";
import Layout from "./component/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/main/Main";
import Login from "./component/login/Login";
import UserView from "./component/user/UserView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mgt/user" element={<UserView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
