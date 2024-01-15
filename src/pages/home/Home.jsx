import Table from "../../components/ui/table/Table";
import { dummyUsers } from "../../data/data";
const Home = () => {
  return (
    <div className="text-whiteLight px-4 py-4">
      <div className="flex flex-col md:flex-row gap-20 md:gap-5">
        <Table list={dummyUsers} title="Team Members" className="flex-1" />
        <Table list={dummyUsers} title="Team Members" className="flex-1" />
      </div>
    </div>
  );
};

export default Home;
