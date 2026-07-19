import { Link } from "react-router";

const SignIn = () => {
  return (
    <div className="hidden lg:flex justify-center items-center text-white h-screen my-auto">
      <form className="flex flex-col bg-[#0A0F16] border border-gray-700 rounded-2xl shadow-2xl w-1/3 h-4/5 py-[2%]">
        <p className="text-center text-3xl font-bold">Sign up</p>
        <div className="flex flex-col h-full m-[10%] text-xl gap-4">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              title="Enter your email"
              autoComplete="email"
              className="rounded-4xl px-4 bg-[#131A24] w-full h-[15%] outline-0"
            />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              title="Enter your password"
              autoComplete="off"
              className="rounded-4xl px-4 bg-[#131A24] w-full h-[15%] outline-0"
            />
            <input
              id="password-check"
              type="password"
              placeholder="Enter your password again"
              title="Enter your password again"
              autoComplete="off"
              className="rounded-4xl px-4 bg-[#131A24] w-full h-[15%] outline-0"
            />
            <Link to="/sign-in" className="hover:text-white text-gray-400">
              <p className="text-sm text-right ">Already have one?</p>
            </Link>
            <button onClick={() => {}}
            className="bg-blue-600 hover:bg-blue-300 hover:text-black font-medium h-[15%] w-full rounded-4xl px-4 cursor-pointer">Sign up</button>
          </div>
        </form>
      </div>
  );
};

export default SignIn;