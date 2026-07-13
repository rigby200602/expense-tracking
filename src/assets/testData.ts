import {
  MdAccountBalanceWallet,
  MdOutlineAttachMoney,
  MdOutlineMoneyOff,
  MdOutlineSavings
} from "react-icons/md";
import {
  FaHome,
  FaChartLine,
  FaWallet,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export interface SidebarData {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string;
  url: string;
  active?: boolean
}

export const sidebarData: SidebarData[] = [
  { label: "Home", Icon: FaHome, url: "" },
  { label: "Profile", Icon: CgProfile, url: "profile" },
  { label: "Analytics", Icon: FaChartLine, url: "analytics" },
  { label: "Wallet", Icon: FaWallet, url: "wallet" },
  { label: "Settings", Icon: FaCog, url: "settings" },
  { label: "Help", Icon: FaQuestionCircle, url: "help" },
]

export interface CardData {
  label: string;
  num: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const data: CardData[] = [
  { label: "Total Balance", num: 40000, Icon: MdAccountBalanceWallet },
  { label: "Total Income", num: 40000, Icon: MdOutlineAttachMoney },
  { label: "Total Expenses", num: 40000, Icon: MdOutlineMoneyOff },
  { label: "Net Savings", num: 40000, Icon: MdOutlineSavings },
]

export interface OverviewData {
  month: string;
  income: number;
  expenses: number;
  savings: number;
}

export const overviewData: OverviewData[] = [
  { month: "Jan", income: 6000, expenses: 3500, savings: 2500 },
  { month: "Feb", income: 6900, expenses: 3600, savings: 3300 },
  { month: "Mar", income: 7000, expenses: 4500, savings: 2500 },
  { month: "Apr", income: 6200, expenses: 4000, savings: 2200 },
  { month: "May", income: 7800, expenses: 4200, savings: 3600 },
  { month: "Jun", income: 7200, expenses: 4700, savings: 2500 },
  { month: "Jul", income: 8500, expenses: 5600, savings: 2900 },
  { month: "Aug", income: 6900, expenses: 3900, savings: 3000 },
  { month: "Sep", income: 7600, expenses: 4200, savings: 3400 },
  { month: "Oct", income: 7500, expenses: 5500, savings: 2000 },
  { month: "Nov", income: 9100, expenses: 4700, savings: 4400 },
  { month: "Dec", income: 8700, expenses: 5900, savings: 2800 },
];

export interface SpendingCategory {
  name: string;
  value: number;
  amount: number;
  color: string;
}

export const spendingCategory: SpendingCategory[] = [
  {
    name: "Housing",
    value: 35,
    amount: 1488,
    color: "#3B82F6",
  },
  {
    name: "Food & Dining",
    value: 23,
    amount: 978,
    color: "#EF4444",
  },
  {
    name: "Transport",
    value: 18,
    amount: 765,
    color: "#F59E0B",
  },
  {
    name: "Shopping",
    value: 16,
    amount: 680,
    color: "#A855F7",
  },
  {
    name: "Entertainment",
    value: 5,
    amount: 212,
    color: "#60A5FA",
  },
  {
    name: "Others",
    value: 3,
    amount: 127,
    color: "#06B6D4",
  },
];