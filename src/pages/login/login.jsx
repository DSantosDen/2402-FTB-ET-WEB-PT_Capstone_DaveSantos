import LogoGoogle from "../../assets/img/icons8-google-96.png";
import LogoApple from "../../assets/img/icons8-apple-50.png";
import { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [data, setData] = useState({
    username: null,
    password: null,
  });

  const onChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

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
