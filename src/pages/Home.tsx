import Card from "../components/Card";
import { MdAccountBalanceWallet } from "react-icons/md";


const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap mt-15">
        <Card label="Total balance" num={40000} Icon={MdAccountBalanceWallet}/>
      </div>
    </div>
  );
};

export default Home;
