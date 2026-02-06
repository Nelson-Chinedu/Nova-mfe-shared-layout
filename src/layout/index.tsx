import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#f4f5f7]">
      <Sidenav />
      <div className="flex-1 flex flex-col w-[85%] ">
        <Navbar />
        <main className="px-8 py-4">
          <div id="single-spa-application:@NovaOrg/nova-mfe-dashboard"></div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
