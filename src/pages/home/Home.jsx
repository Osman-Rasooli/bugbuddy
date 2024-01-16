import Table from "../../components/ui/table/Table";
import { dummyUsers } from "../../data/data";
const Home = () => {
  return (
    <div className="text-whiteLight">
      <div className="flex flex-col md:flex-row gap-20 md:gap-5">
        <Table
          list={dummyUsers}
          title="Teams"
          className="max-h-[400px] flex-1"
        />
      </div>
    </div>
  );
};

export default Home;
