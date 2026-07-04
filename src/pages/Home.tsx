import Card from "../components/Card";


const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 flex-wrap mt-15">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Home;
