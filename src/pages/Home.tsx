import Card from "../components/Card";
import { data } from "../assets/testData";




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
