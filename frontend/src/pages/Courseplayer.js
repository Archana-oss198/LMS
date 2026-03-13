import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function CoursePlayer() {

  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState("");

  useEffect(() => {

    axios
      .get(`http://localhost:3001/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
        setCurrentLesson(res.data.lessons[0]);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  if (!course) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div>

      <Navbar />

      <Container className="mt-4">

        <h1 className="mb-4">{course.title}</h1>

        <Row>

          {/* Video Section */}
          <Col md={8}>

            <Card className="mb-3">

              <Card.Body>

                <Card.Title>Video Player</Card.Title>

                <Card.Text>
                  <b>Now Playing:</b> {currentLesson}
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

          {/* Lesson List */}
          <Col md={4}>

            <Card>

              <Card.Header>
                Lessons
              </Card.Header>

              <ListGroup variant="flush">

                {course.lessons.map((lesson, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    active={lesson === currentLesson}
                    onClick={() => setCurrentLesson(lesson)}
                  >
                    {lesson}
                  </ListGroup.Item>
                ))}

              </ListGroup>

            </Card>

          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default CoursePlayer;