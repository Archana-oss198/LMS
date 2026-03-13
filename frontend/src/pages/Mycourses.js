import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";

function MyCourses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const enrolledCourses =
      JSON.parse(localStorage.getItem("myCourses")) || [];

    setCourses(enrolledCourses);

  }, []);

  return (
    <div>

      <Navbar />

      <Container className="mt-4">

        <h1 className="mb-4">My Courses</h1>

        {courses.length === 0 ? (

          <Alert variant="info">
            No enrolled courses yet.
          </Alert>

        ) : (

          <Row>

            {courses.map((course) => (

              <Col md={4} lg={3} key={course.id} className="mb-4">

                <Card className="h-100">

                  <Card.Img
                    variant="top"
                    src={course.thumbnail}
                    style={{ height: "150px", objectFit: "cover", width:"200px", marginLeft:"50px"  }}
                  />

                  <Card.Body className="text-center">

                    <Card.Title>
                      {course.title}
                    </Card.Title>

                    <Card.Text>
                      <b>Instructor:</b> {course.instructor} <br />
                      <b>Duration:</b> {course.duration}
                    </Card.Text>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        )}

      </Container>

    </div>
  );
}

export default MyCourses;