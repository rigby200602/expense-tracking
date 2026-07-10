const SignIn = () => {
  return (
    <div className="hidden lg:flex justify-center items-center text-white h-screen my-auto">
      <div className="flex flex-col bg-[#0A0F16] border border-gray-700 rounded-2xl shadow-2xl w-1/3 h-4/5 py-[2%]">
        <p className="text-center text-3xl font-bold">Sign in</p>
        <div className="flex flex-col h-full my-[10%] mx-[10%] text-xl gap-4">
            <input
              id="email"
              type="email"
              placeholder="Email"
              title="Enter your email"
              autoComplete="email"
              className="rounded-4xl px-4 bg-[#131A24] w-full h-[15%] outline-0"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              title="Enter your password"
              autoComplete="off"
              className="rounded-4xl px-4 bg-[#131A24] w-full h-[15%] outline-0"
            />
            <button className="bg-blue-600 hover:bg-blue-300 hover:text-black h-[15%] w-full rounded-4xl px-4 cursor-pointer">Sign in</button>
          </div>
        </div>
      </div>
  );
};

export default SignIn;