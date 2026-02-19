import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidenav />
      <div className="flex-1 flex flex-col w-[85%] ml-[18%]">
        <Navbar />
        <main className="pt-4 mt-20"></main>
      </div>
    </div>
  );
};

export default Layout;
