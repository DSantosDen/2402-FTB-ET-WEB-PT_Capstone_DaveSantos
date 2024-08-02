//imports
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";

/*useState function component to update the data state
set initial values for username and password to null*/
const SignUpForm = () => {
  const [data, setData] = useState({
    username: null,
    password: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*event handlers to manage changes in input fields
  log the name and value of the input field being changed
  updates the "data" state with the new value for the input
  field that triggered the change
  */
  const onChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /*function handles form submission, prevents default form submission behavior
  send a POST request to API using axios with the username and password
  from the data state.
  if sucess, stores the received token in localStorage
  if not then an alert message is displayed
  */
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(setToken(res.data.token));
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  //signup form using tailwind
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-base font-semibold text-white mb-6">
          Welcome to where bad quality isn't just purchased, it's worshipped.
        </h2>

        <form method="POST" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Your username
            </label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600"
              type="text"
              name="username"
              placeholder=""
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600"
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded-md mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
