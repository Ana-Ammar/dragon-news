import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayouts/LeftAside";
import RightAside from "../Components/HomeLayouts/RightAside";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <header>
        <Header></Header>
        <section className="w-11/12 my-8 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-11/12 my-8 mx-auto grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky h-fit top-5">
          <LeftAside></LeftAside>
        </aside>

        <section className="col-span-6">
          {state == "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>

        <aside className="col-span-3 sticky h-fit top-5">
          <RightAside></RightAside>
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
