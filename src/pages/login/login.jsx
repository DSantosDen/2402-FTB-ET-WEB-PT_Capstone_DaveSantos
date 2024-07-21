const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-base font-semibold text-white mb-6">
          Welcome to where bad quality isn't just purchased, it's worshipped.
        </h2>

        <div className="flex justify-between mb-6">
          <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center w-full mr-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.35 11.1H12v3.8h5.36c-.21 1.24-.83 2.23-1.73 2.9v2.42h2.8c1.63-1.5 2.58-3.7 2.58-6.3 0-.62-.07-1.22-.17-1.8z" />
              <path d="M12 22c2.4 0 4.43-.8 5.91-2.15l-2.8-2.42c-.8.54-1.81.88-3.11.88-2.39 0-4.41-1.62-5.13-3.78H4.17v2.38C5.64 20.14 8.63 22 12 22z" />
              <path d="M6.87 13.53c-.18-.54-.27-1.12-.27-1.72s.1-1.18.27-1.72V7.71H4.17C3.43 8.94 3 10.43 3 12s.43 3.06 1.17 4.29l2.7-2.76z" />
              <path d="M12 6.1c1.31 0 2.49.45 3.42 1.34L17.71 5c-1.47-1.37-3.51-2.1-5.71-2.1-3.37 0-6.36 1.86-7.83 4.58L6.87 9.5c.71-2.17 2.74-3.78 5.13-3.78z" />
            </svg>
            Sign up with Google
          </button>
          <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center w-full ml-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.365 1.43a1.5 1.5 0 00-2.12-.011l-.003.003-1.342 1.344a1.5 1.5 0 00-.008 2.121l.012.012 1.337 1.338a1.5 1.5 0 002.125-.007l.002-.002a1.5 1.5 0 00.011-2.121l-.002-.003-1.346-1.344a1.5 1.5 0 00-.007-.008zM21.38 2.8l-1.335 1.337c-.293.293-.768.293-1.061 0l-.001-.001-1.341-1.342a.75.75 0 010-1.06L19.317 0a.75.75 0 011.06.001L21.38 1.342a.75.75 0 01-.001 1.06zm-4.286 4.358l-1.34 1.342a.75.75 0 01-1.061 0l-1.337-1.338a.75.75 0 010-1.06L14.064 5.74a.75.75 0 011.061 0l1.34 1.341c.293.293.293.768 0 1.061zM12 15c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-5 3v-1.5A4.5 4.5 0 0112 12c2.481 0 4.5 2.019 4.5 4.5V18H7zm-1.5-4.5V12H0v6h1.5v-3.75c0-1.931 1.569-3.5 3.5-3.5z" />
            </svg>
            Sign up with Apple
          </button>
        </div>

        <div className="flex items-center mb-6">
          <hr className="w-full border-gray-700" />
          <span className="text-gray-400 mx-2">or</span>
          <hr className="w-full border-gray-700" />
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Your email
            </label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600"
              type="email"
              id="email"
              placeholder="name@company.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600"
              type="password"
              id="password"
              placeholder="••••••••"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
