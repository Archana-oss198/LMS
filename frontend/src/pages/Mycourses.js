import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

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

      <div style={{ padding: "20px" }}>

        <h1>My Courses</h1>

        {courses.length === 0 ? (
          <p>No enrolled courses yet.</p>
        ) : (

          <div style={styles.grid}>

            {courses.map((course) => (

              <div key={course.id} style={styles.card}>

                <img
                  src={course.thumbnail}
                  alt={course.title}
                  style={styles.image}
                />

                <h3>{course.title}</h3>

                <p><b>Instructor:</b> {course.instructor}</p>

                <p><b>Duration:</b> {course.duration}</p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};

export default MyCourses;