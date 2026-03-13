import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    // store login state
    localStorage.setItem("user", email);

    alert("Login Successful");

    navigate("/");
  };

  return (
    <Container className="mt-5">

      <Row className="justify-content-center">

        <Col md={4}>

          <Card className="p-4">

            <Card.Title className="text-center mb-3">
              Login
            </Card.Title>

            <Form onSubmit={handleLogin}>

              <Form.Group className="mb-3">

                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
              >
                Login
              </Button>

            </Form>

          </Card>

        </Col>

      </Row>

    </Container>
  );
}

export default Login;