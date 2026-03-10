import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

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
    return <p>Loading...</p>;
  }

  return (
    <div>

      <Navbar />

      <div style={{ padding: "20px" }}>

        <h1>{course.title}</h1>

        {/* Video Section */}
        <div style={styles.video}>
          <h3>Video Player</h3>
          <p>Now Playing: {currentLesson}</p>
        </div>

        <h2>Lessons</h2>

        {/* Lessons List */}
        <ul style={styles.lessonList}>
          {course.lessons.map((lesson, index) => (
            <li
              key={index}
              onClick={() => setCurrentLesson(lesson)}
              style={{
                ...styles.lesson,
                backgroundColor:
                  lesson === currentLesson ? "#d3f4ff" : "white"
              }}
            >
              {lesson}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

const styles = {
  video: {
    border: "1px solid #ddd",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5"
  },
  lessonList: {
    listStyle: "none",
    padding: 0
  },
  lesson: {
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "5px",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

export default CoursePlayer;