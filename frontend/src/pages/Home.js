import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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

      <div style={{ padding: "20px" }}>

        <h1>Available Courses</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Backend Development">Backend Development</option>
        </select>

        {/* Courses */}
        <div style={styles.grid}>

          {filteredCourses.map((course) => (
            <div key={course.id} style={styles.card}>

              <img
                src={course.thumbnail}
                alt={course.title}
                style={styles.image}
              />

              <h3>{course.title}</h3>

              <p><b>Instructor:</b> {course.instructor}</p>

              <p><b>Duration:</b> {course.duration}</p>

              {/* View Details Button */}
              <Link to={`/course/${course.id}`}>
                <button style={styles.button}>
                  View Details
                </button>
              </Link>

            </div>
          ))}

        </div>

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
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Home;