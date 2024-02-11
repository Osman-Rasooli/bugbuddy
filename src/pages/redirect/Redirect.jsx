import Sidebar from "../../components/sidebar/Sidebar";
import ToastContainer from "../../components/ui/toast/ToastContainer";
import Header from "../../components/ui/header/Header";
import PageRoutes from "../../config/routes";

const Redirect = () => {
  return (
    <div className="flex h-screen bg-whiteBg dark:bg-primary">
      <Sidebar />
      <ToastContainer />
      <div className="flex-1 flex flex-col lg:ml-64 overflow-hidden">
        <Header title="Home" />
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 p-3 md:px-8">
          <PageRoutes />
        </main>
      </div>
    </div>
  );
};

export default Redirect;
