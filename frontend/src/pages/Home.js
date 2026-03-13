import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Home() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || course.category === category)
  );

  return (
    <div>

      <Navbar />

      <Container className="mt-4">

        <h1 className="mb-4">Available Courses</h1>

        {/* Search and Filter */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>

          <Col md={4}>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Backend Development">Backend Development</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Courses Grid */}
        <Row>
          {filteredCourses.map((course) => (
            <Col md={4} lg={3} key={course.id} className="mb-4">

              <Card className="h-100">

                <Card.Img
                  variant="top"
                  src={course.thumbnail}
                  style={{ height: "160px", width:"200px", marginLeft:"60px", marginTop:"20px"}}
                />

                <Card.Body className="text-center">

                  <Card.Title>{course.title}</Card.Title>

                  <Card.Text>
                    <b>Instructor:</b> {course.instructor} <br />
                    <b>Duration:</b> {course.duration}
                  </Card.Text>

                  <Link to={`/course/${course.id}`}>
                    <Button variant="primary">
                      View Details
                    </Button>
                  </Link>

                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>

      </Container>

    </div>
  );
}

export default Home;