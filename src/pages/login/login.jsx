import LogoGoogle from "../../assets/img/icons8-google-96.png";
import LogoApple from "../../assets/img/icons8-apple-50.png";

const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-base font-semibold text-white mb-6">
          Welcome to where bad quality isn't just purchased, it's worshipped.
        </h2>
        <div className="flex justify-between mb-6">
          <a href="https://accounts.google.com/signup" className="w-full mr-2">
            <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center w-full">
              <img src={LogoGoogle} className="h-8" alt="Google logo" />
              <span className="ml-2">Login with Google</span>
            </button>
          </a>

          <a
            href="https://appleid.apple.com/account#!&page=create"
            className="w-full ml-2"
          >
            <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center w-full">
              <img src={LogoApple} className="h-8" alt="Apple logo" />
              <span className="ml-2">Login with Apple</span>
            </button>
          </a>
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
