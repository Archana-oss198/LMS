import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

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
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <Navbar />

      <div style={styles.container}>

        <img
          src={course.thumbnail}
          alt={course.title}
          style={styles.image}
        />

        <h1>{course.title}</h1>

        <p><b>Instructor:</b> {course.instructor}</p>

        <p><b>Duration:</b> {course.duration}</p>

        <p><b>Description:</b> {course.description}</p>

        <button onClick={enrollCourse} style={styles.button}>
          Enroll Course
        </button>

        <h2>Lessons</h2>

        <ul>
          {course.lessons.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>

      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },
  image: {
    width: "300px",
    borderRadius: "10px"
  },
  button: {
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default CourseDetails;