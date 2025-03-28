import React from "react";
import "../Form.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userExistance, setUserExistance] = useState(true);

  // const handleSubmit = (event) => {
  //   axios
  //     .post(`${process.env.REACT_APP_BACKEND_URL}/login`, { email, password })
  //     .then((res) => {
  //       //checks the status code. if 201, user is new and brings user in dashboard
  //       if (res.status === 201) {
  //         setTimeout(() => {
  //           window.location.href = process.env.REACT_APP_DASHBOARD_URL;
  //         }, 500);
  //         //if 202, shows user a pop up, that the user exist & stays the user in signup page
  //       } else if (res.status === 202) {
  //         setUserExistance(false);
  //       }
  //     });
  //   event.preventDefault();
  //   setEmail("");
  //   setPassword("");
  // };

  // const closePopup = () => {
  //   setUserExistance(true);
  // };

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
       `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2 className="text-center">Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          value={password}
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <span>
          Not have an Account? <a href="/signup">Sign up</a>
        </span>
      </form>
      {!userExistance && (
        <div className="popup">
          <div className="popup-content">
            <p>Incorrect password or email! Please try again.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
