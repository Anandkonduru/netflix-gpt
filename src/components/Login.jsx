import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
          alt="Netflix Logo"
        />
      </div>
      <div className="absolute inset-0 bg-gray opacity-90 flex items-center justify-center">
        <form className="bg-black text-white p-12 rounded-md w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              className="block w-full py-3 px-4 mb-4 rounded bg-gray-900 focus:outline-none"
              placeholder="Full Name"
              required
            />
          )}
          {!isSignInForm && (
            <input
              type="text"
              className="block w-full py-3 px-4 mb-4 rounded bg-gray-900 focus:outline-none"
              placeholder="Phone Number"
              required
            />
          )}
          <input
            type="email"
            className="block w-full py-3 px-4 mb-4 rounded bg-gray-900 focus:outline-none"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="block w-full py-3 px-4 mb-4 rounded bg-gray-900 focus:outline-none"
            placeholder="Password"
            required
          />
          <button
            className="w-full py-3 px-6 rounded font-semibold bg-red-600 hover:bg-red-700 focus:outline-none"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={handleSignInForm}
            className="my-2  underline text-blue-600 cursor-pointer"
          >
            {isSignInForm
              ? "New to Netflix? Sign Up"
              : "Already Registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
