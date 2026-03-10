import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={styles.container}>

      <h2>Signup</h2>

      <form onSubmit={handleSignup} style={styles.form}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Signup
        </button>

      </form>

    </div>
  );
}

const styles = {
  container: {
    width: "320px",
    margin: "100px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "10px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "10px",
    margin: "10px 0"
  },
  button: {
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default Signup;