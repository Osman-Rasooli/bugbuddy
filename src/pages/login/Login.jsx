import logo from "../../assets/logo.png";
import Input from "../../components/ui/form/Input";

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../../utils/utils";

import { useAuth } from "../../contexts/authContext";

const Login = () => {
  const { login, user } = useAuth();

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = (emailValue, passwordValue) => {
    // Validate email
    if (!emailValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email cannot be blank!",
      }));
      return false;
    } else if (!isValidEmail(emailValue)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid Email" }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    // Validate password
    if (passwordValue.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Invalid password (minimum 6 characters)",
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();

    if (!validate(emailValue, passwordValue)) {
      return;
    }
    try {
      // Attempt to log in the user using the login function from AuthContext
      await login(emailValue, passwordValue);

      // Form is valid, proceed with submission or redirect to another page
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, e.g., display an error message
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Invalid credentials",
      }));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="BugBuddy" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-2"
            onSubmit={handleSubmit}
            noValidate
            method="post"
          >
            <div className="">
              <Input
                forwardRef={emailRef}
                label="Email Address"
                id="email"
                name="email"
                type="email"
                errorText={errors.email && errors.email}
                placeholder="admin@example.com"
                className="block login bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
              />
            </div>
            <div className="py-5">
              <Input
                forwardRef={passwordRef}
                label="Password"
                id="password"
                name="password"
                errorText={errors.password && errors.password}
                type="password"
                placeholder="password"
                className="block login bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-tertiary px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm transition hover:bg-tertiaryLight hover:text-secondary hover:shadow-md focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-offset-2 focus-visible:outline-tertiaryLight"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-tertiary transition hover:text-tertiaryLight"
            >
              Create an account
            </Link>
          </p>

          <div className="flex items-center mt-6 mb-6">
            <div className="flex-1 border-t border-whiteLight"></div>
            <span className="mx-4 text-secondaryLight">or continue with</span>
            <div className="flex-1 border-t border-whiteLight"></div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="py-[6px] bg-blue-500 text-tertiary ring-[1px] ring-tertiary rounded-md transition hover:bg-tertiary hover:text-whiteLight">
              Continue with Dummy Credentials 1
            </button>
            <button className="py-[6px] bg-gray-800 text-tertiary ring-[1px] ring-tertiary rounded-md transition hover:bg-tertiary hover:text-whiteLight">
              Continue with Dummy Credentials 2
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
