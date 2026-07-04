import { MdAccountBalanceWallet } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex min-w-52 h-32 bg-gray-800 rounded-3xl p-4">
        <div className="flex flex-col mx-2">
          <p className="text-gray-400">Total balance</p>
          <p className="text-white font-medium text-4xl">40000</p>
        </div>
        <div className="bg-red-500 w-12 h-12 rounded-full p-3 ml-auto my-[4%]">
          <button className="cursor-pointer">
            <MdAccountBalanceWallet className="text-2xl text-white" />
          </button>
        </div> 
      </div>
  )
}

export default Card