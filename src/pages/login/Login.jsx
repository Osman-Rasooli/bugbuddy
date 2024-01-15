import logo from "../../assets/logo.png";
const Login = () => {
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
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-secondary"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your email..."
                  autoComplete="email"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight placeholder:text-whiteLight  focus:outline-none   focus:ring-tertiary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold  hover:text-tertiary">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-whiteLight placeholder:text-whiteLight focus:ring-inset focus:ring-tertiary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-tertiary px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm transition hover:bg-tertiaryLight hover:text-secondary hover:shadow-md focus:translate-y-1 focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-offset-2 focus-visible:outline-tertiaryLight"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-tertiary transition hover:text-tertiaryLight"
            >
              Create an account
            </a>
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
