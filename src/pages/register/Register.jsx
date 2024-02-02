import { useState } from "react";

import logo from "../../assets/logo.png";
// import { BsExclamationCircle } from "react-icons/bs";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import CustomInput from "../../components/ui/form/CustomInput";
import { roleList } from "../../data/data";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  role: Yup.string().required("Selecta role"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const { register, user } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (values, { setSubmitting, setStatus }) => {
    console.log(values);
    try {
      setLoading(true);
      // Attempt to log in the user using the login function from AuthContext
      await register(values);
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
      <div className="flex min-h-screen dark:bg-primary dark:text-white flex-1 flex-col justify-center px-6 pt-14 lg:px-8 register-page">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="BugBuddy" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              role: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {({ status }) => {
              return (
                <Form className="space-y-2" noValidate>
                  <div className="">
                    <Field
                      type="text"
                      label="name"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      as={CustomInput}
                      className="block text-secondary login bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="">
                    <Field
                      type="email"
                      label="Email"
                      id="email"
                      name="email"
                      placeholder="example@xyz.com"
                      as={CustomInput}
                      className="block text-secondary login bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="">
                    <Field
                      type="select"
                      label="Role"
                      id="role"
                      name="role"
                      className="h-[30px] text-secondary bg-whiteLight"
                      options={roleList}
                      as={CustomInput}
                    />
                  </div>
                  <div className="">
                    <Field
                      type="password"
                      label="Password"
                      id="password"
                      name="password"
                      placeholder="********"
                      className="block login text-secondary bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
                      as={CustomInput}
                    />
                    {/* {status && status.error && (
                      <div className="text-tertiary text-sm -mt-2 flex gap-1 items-center">
                        <BsExclamationCircle className="text-tertiary" />
                        {status.error}
                      </div>
                    )} */}
                  </div>
                  <div className="">
                    <Field
                      type="password"
                      label="Confirm Password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="********"
                      className="block login text-secondary bg-white w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
                      as={CustomInput}
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-tertiary px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm transition hover:bg-tertiaryLight hover:text-secondary hover:shadow-md focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-offset-2 focus-visible:outline-tertiaryLight"
                    >
                      {loading ? "Signing up..." : "Sign up"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-tertiary transition hover:text-tertiaryLight"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
