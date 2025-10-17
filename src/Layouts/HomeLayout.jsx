import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayouts/LeftAside";
import RightAside from "../Components/HomeLayouts/RightAside";

const HomeLayout = () => {
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

      <main className="w-11/12 my-8 mx-auto grid grid-cols-12">
        <aside className="col-span-3">
            <LeftAside></LeftAside>
        </aside>

        <section className="col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
