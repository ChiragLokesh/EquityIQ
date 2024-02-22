import { useState } from "react";
import { DateTime } from "luxon";

function News() {
  const [news, setNews] = useState();

  async function getNews() {
    let query = "Mahindra";
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${query}&category=business&country=in&apiKey=18081627bdf74e9381f2dc41b99e3287`
    );

    const news = await response.json();
    setNews(news);
  }

  const formattedDate = (date) => {
    let timestamp = DateTime.fromISO(date).toFormat("MM/dd/yyyy");
    return timestamp;
  };

  return (
    <div className="bg-white flex flex-col h-screen gap-16">
      <button onClick={getNews} className="button">
        Get me the news
      </button>

      {news ? (
        <table className="w-1/2 mx-auto table-auto">
          <tbody>
            {news.articles.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href={item.url}>
                    <div className="flex flex-row gap-8 p-2">
                      <div>
                        <img
                          src={item.urlToImage}
                          className="h-24 w-64 max-w-64"
                          alt="News Thumbnail"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 text-xs">
                          <h3 className="font-bold">{item.author}</h3>
                          <h3>O</h3>
                          <h3>{formattedDate(item.publishedAt)}</h3>
                        </div>
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="mx-auto">No News...</h1>
      )}
    </div>
  );
}

export default News;
