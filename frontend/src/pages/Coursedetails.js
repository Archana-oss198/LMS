import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function CourseDetails() {

  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {

    axios
      .get(`http://localhost:3001/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  const enrollCourse = () => {

    let myCourses =
      JSON.parse(localStorage.getItem("myCourses")) || [];

    myCourses.push(course);

    localStorage.setItem(
      "myCourses",
      JSON.stringify(myCourses)
    );

    alert("Course Enrolled Successfully!");
  };

  if (!course) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>

      <Navbar />

      <Container className="mt-4">

        <Row className="justify-content-center">

          <Col md={8}>

            <Card>

              <Card.Img
                variant="top"
                src={course.thumbnail}
                style={{ height: "160px", width:"200px", marginLeft:"20px"}}
              />

              <Card.Body>

                <Card.Title as="h2">
                  {course.title}
                </Card.Title>

                <Card.Text>
                  <b>Instructor:</b> {course.instructor} <br />
                  <b>Duration:</b> {course.duration}
                </Card.Text>

                <Card.Text>
                  <b>Description:</b> {course.description}
                </Card.Text>

                <Button
                  variant="primary"
                  className="mb-3"
                  onClick={enrollCourse}
                >
                  Enroll Course
                </Button>
                <p>Please Login First</p>

                <h4>Lessons</h4>

                <ListGroup>
                  {course.lessons.map((lesson, index) => (
                    <ListGroup.Item key={index}>
                      {lesson}
                    </ListGroup.Item>
                  ))}
                </ListGroup>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default CourseDetails;