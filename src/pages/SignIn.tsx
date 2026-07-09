const SignIn = () => {
  return (
    <div className="hidden lg:flex justify-center items-center text-white h-screen my-auto">
      <div className="flex flex-col bg-[#0A0F16] border border-gray-700 rounded-2xl shadow-2xl w-1/3 h-4/5 py-[2%]">
        <p className="text-center text-3xl font-bold">Sign in</p>
        <div className="flex flex-col h-full my-[10%] mx-[10%] text-xl">
          <div className="w-full">
            <p className="mb-2 text-gray-400">Email:</p>
            <input
              type="email"
              placeholder="Email"
              title="Enter your email"
              className="rounded-xl px-4 bg-[#131A24] w-full h-full outline-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
