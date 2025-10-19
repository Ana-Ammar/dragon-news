import React, { use } from "react";
import Marquee from "react-fast-marquee";

const dataPromise = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
  const data = use(dataPromise);
  const latestNewsTitle = [];
  data.filter(
    (d) =>
      d.others.is_trending == true &&
      d.rating.badge == "excellent" &&
      latestNewsTitle.push(d.title)
  );

  console.log(latestNewsTitle)

  return (
    <div className="flex items-center gap-5 p-4 bg-base-200">
      <p className="text-base-100 bg-secondary px-5 py-1.5 font-medium">
        Latest
      </p>

      <Marquee pauseOnHover={true} speed={60}>
        {latestNewsTitle.map((newsTitle) => (
          <p className="font-semibold">
            {newsTitle} &nbsp; &nbsp; | &nbsp; &nbsp;{" "}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
LatestNews;
