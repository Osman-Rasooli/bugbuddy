import { useState } from "react";

import logo from "../../assets/logo.png";
import { BsExclamationCircle } from "react-icons/bs";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "../../components/ui/form/CustomInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { login, user } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (values, { setSubmitting, setStatus }) => {
    try {
      setLoading(true);
      // Attempt to log in the user using the login function from AuthContext
      await login(values.email, values.password);
      navigate("/");
    } catch (err) {
      console.error("Error during Login: ", err);
      setStatus({ error: "Invalid credentials" });
    } finally {
      setSubmitting(false);
      setLoading(false);
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
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {({ status }) => {
              return (
                <Form className="space-y-2">
                  <div className="">
                    <Field
                      type="email"
                      label="Email"
                      id="email"
                      name="email"
                      placeholder="example@xyz.com"
                      as={CustomInput}
                      className="block login bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="py-5">
                    <Field
                      type="password"
                      label="Password"
                      id="password"
                      name="password"
                      placeholder="********"
                      className="block login bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
                      as={CustomInput}
                    />
                    {status && status.error && (
                      <div className="text-tertiary text-sm -mt-2 flex gap-1 items-center">
                        <BsExclamationCircle className="text-tertiary" />
                        {status.error}
                      </div>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-tertiary px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm transition hover:bg-tertiaryLight hover:text-secondary hover:shadow-md focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-offset-2 focus-visible:outline-tertiaryLight"
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

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
