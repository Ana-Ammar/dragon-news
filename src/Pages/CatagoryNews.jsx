import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CatagoryNews = () => {
    const {id} = useParams()
    const news = useLoaderData()
    const [catagoryNews, setCatagoryNews] = useState([])

    useEffect(()=> {
    if(id == "0") {
        setCatagoryNews(news)
    }
    else if (id == "1") {
        const filteredNews = news.filter(data => data.others.is_today_pick == true)
        setCatagoryNews(filteredNews)
    }
    else {
        const filteredNews = news.filter(data => data.category_id == id)
        setCatagoryNews(filteredNews)
    }    
    }, [news, id])
    
    return (
        <div>
            <h1 className="font-bold">{`Total ${catagoryNews.length} news found`}</h1>

            <div className="grid grid-cols-1 gap-5 mt-5">
                {
                    catagoryNews.map(news => <NewsCard
                    news={news}
                    key={news.id}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CatagoryNews;