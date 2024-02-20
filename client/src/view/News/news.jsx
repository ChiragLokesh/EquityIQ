import React, { useState } from "react";
// import "./Testing.css";
// import { varsityData } from "./KnowledgeHubData";
// import { ModuleData } from "./moduleData";
import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../../Navbar/Navbar";
import NewsAPI from "newsapi";

function News() {
  const navigate = useNavigate();
  // const params = useParams();
  const [news, setNews] = useState();

  // console.log(params.id);

  function getObjectById(array, id) {
    for (const obj of array) {
      if (obj.num === id) {
        return obj;
      }
    }
    return null;
  }

  async function getNews() {
    console.log("here");
    let query = 'BitCoin'
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${query}&category=business&country=in&apiKey=18081627bdf74e9381f2dc41b99e3287`
    );
    const news = await response.json();
    console.log(news);
    setNews(news);
  }

  return (
    <div className="bg-white flex flex-col  ">
      <button onClick={getNews} className="button">Get me the news</button>

      {news ? (
        <table>
          {news.articles.map((item) => (
              <tr>{item.title}</tr>
            ))}
        </table>
      ) : (
        <>No News...</>
      )}
    </div>
  );
}

export default News;
