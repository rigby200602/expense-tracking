import type { ComponentType} from "react";
import { useAppContext } from "../context/AppContext";

type CardProps = {
    label: string;
    num: number;
    Icon: ComponentType<React.SVGProps<SVGSVGElement>>; // Optional icon prop
}

const Card = ({label,num, Icon}: CardProps) => {
  const { currency } = useAppContext();
  return (
    <div className="flex min-w-52 h-32 bg-gray-800 rounded-3xl p-4">
        <div className="flex flex-col mx-2 w-[75%]">
          <p className="text-gray-400">{label}</p>
          <p className="text-white font-medium text-4xl">{num} {currency}</p>
        </div>
        <div className="bg-red-500 w-12 h-12 rounded-full p-3 ml-auto my-[4%]">
          <button className="cursor-pointer">
            <Icon className="text-2xl text-white" />
          </button>
        </div> 
      </div>
  )
}

export default Card