import "./signup.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import api from "../../api/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp(props) {
  const navigate = useNavigate();
  
  const [userName, setUsername] = useState("");
const [message, setMessage] = useState("");
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await axios
      .post("http://localhost:5001/api/player/login", {
        userName,
      })
      .then((res) => {
        //  let newUser = res;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("./", { replace: true });
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ENTER YOUR NAME HERE
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleOnSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="userName" className="sr-only">
                Username
              </label>
              <input
                autoFocus
                id="username"
                name="username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <br />
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Enter
            </button>
          </div>

          <p className="text-xs text-gray-110">
            By continuing, I confirm that I have read and accept the Terms and
            Conditions and the Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
