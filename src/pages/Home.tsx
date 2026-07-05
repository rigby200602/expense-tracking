import Card from "../components/Card";
import { MdAccountBalanceWallet, MdOutlineAttachMoney, MdOutlineMoneyOff, MdOutlineSavings    } from "react-icons/md";

export interface CardData {
  label: string;
  num: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const data: CardData[] = [
  { label: "Total Balance", num: 40000, Icon: MdAccountBalanceWallet },
  { label: "Total Income", num: 40000, Icon: MdOutlineAttachMoney  },
  { label: "Total Expenses", num: 40000, Icon: MdOutlineMoneyOff  },
  { label: "Net Savings", num: 40000, Icon: MdOutlineSavings  },
]



const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <Card key={item.label} label={item.label} num={item.num} Icon={item.Icon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
