const SignIn = () => {
  return (
    <div className="hidden lg:flex justify-center items-center text-white h-screen my-auto">
      <div className="flex flex-col bg-[#0A0F16] border border-gray-700 rounded-2xl shadow-2xl w-1/3 h-4/5 py-[2%]">
        <p className="text-center text-3xl font-bold">Sign in</p>
        <div className="flex flex-col h-full my-[10%] mx-[10%] text-xl gap-[15%]">
          <div className="w-full">
            <input
              id="email"
              type="email"
              placeholder="Email"
              title="Enter your email"
              autoComplete="email"
              className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-gray-300
              appearance-none focus:outline-none focus:ring-0 focus:text-white peer"
            />
            <label htmlFor="">Email</label>l
          </div>
          <div className="w-full">
            <input
              id="password"
              type="password"
              placeholder="Password"
              title="Enter your password"
              autoComplete="off"
              className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-gray-300
              appearance-none focus:outline-none focus:ring-0 focus:text-white peer"
            />
            <label htmlFor="">Password</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
