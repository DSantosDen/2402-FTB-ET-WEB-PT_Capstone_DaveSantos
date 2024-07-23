import LogoGoogle from "../../assets/img/icons8-google-96.png";
import LogoApple from "../../assets/img/icons8-apple-50.png";

const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">
          Create your Free Account
        </h2>
        <div className="flex justify-between mb-6">
          <a href="https://accounts.google.com/signup" className="w-full mr-2">
            <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center w-full">
              <img src={LogoGoogle} className="h-8" alt="Google logo" />
              <span className="ml-2">Sign up with Google</span>
            </button>
          </a>
          <a
            href="https://appleid.apple.com/account#!&page=create"
            className="w-full ml-2"
          >
            <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center w-full">
              <img src={LogoApple} className="h-8" alt="Apple logo" />
              <span className="ml-2">Sign up with Apple</span>
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
            <label className="block text-gray-400 mb-2" htmlFor="country">
              Country
            </label>
            <select
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600"
              id="country"
            >
              <option>Choose a country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>LaLa Land</option>
              {/* Add more countries as needed */}
            </select>
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
          <div className="mb-4">
            <input className="mr-2" type="checkbox" id="terms" />
            <label className="text-gray-400" htmlFor="terms">
              By signing up, you are creating a Junk Vault account, and you
              agree to Junk Vault's{" "}
              <a href="/terms_of_use" className="text-blue-700 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/terms_of_use" className="text-blue-700 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
            Create an account
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700 hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
};
export default SignUpForm;
