import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

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

      <main>
        <section className="left-aside"></section>

        <section className="main">
          <Outlet></Outlet>
        </section>

        <section className="right-nav"></section>
      </main>
    </>
  );
};

export default HomeLayout;
