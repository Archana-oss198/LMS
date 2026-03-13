import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password
    };

    // store user in localStorage
    localStorage.setItem("userData", JSON.stringify(user));

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <Container className="mt-5">

      <Row className="justify-content-center">

        <Col md={4}>

          <Card className="p-4">

            <Card.Title className="text-center mb-3">
              Signup
            </Card.Title>

            <Form onSubmit={handleSignup}>

              <Form.Group className="mb-3">

                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </Form.Group>

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
                variant="success"
                type="submit"
                className="w-100"
              >
                Signup
              </Button>

            </Form>

          </Card>

        </Col>

      </Row>

    </Container>
  );
}

export default Signup;