import { useLoaderData, useParams } from "react-router";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayouts/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const allNews = useLoaderData();
  const { id } = useParams();

  const news = allNews.find(singleNews => singleNews.id == id)

//   console.log(id, news);

  return (
    <div>
      <header className="py-5">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 mt-8">
        <section className="col-span-9">
          <h1 className="font-bold text-primary">Dragon News</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
