import { useState } from "react";
import { DateTime } from "luxon";

function News() {
  const [news, setNews] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(""); // Add state to track errors

  async function getNews() {
    setError(""); // Reset error message before fetching
    if (!query) {
      setError("Please enter a search query.");
      return; // Don't fetch if the query is empty
    }
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${query}&category=business&country=in&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        // VITE_NEWS_API_KEY = 18081627bdf74e9381f2dc41b99e3287
      );

      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
      setError(`Fetch news failed: ${error.message}`);
      console.error("Fetch news failed:", error);
    }
  }

  const formattedDate = (date) => DateTime.fromISO(date).toFormat("MM/dd/yyyy");

  const handleSearchChange = (event) => setQuery(event.target.value);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    getNews();
  };

  // Need to do formatting
  return (
    <div className="bg-white flex flex-col h-screen gap-16">
      <form onSubmit={handleSearchSubmit} className="flex justify-center h-[20vh] pt-2 lg:pt-5">
        <div className="flex items-center justify-center border-2 border-gray-300 h-fit rounded-full">
          <input
            type="text"
            className="w-80 rounded-l-full"
            placeholder="Search..."
            onChange={handleSearchChange}
            value={query}
          />
          <button type="submit" className="border-l border-gray-300 rounded-r-full">
            Search
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {news && news.articles && (
        <table className="w-1/2 mx-auto table-auto">
          <tbody>
            {news.articles.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
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
      )}
    </div>
  );
}

export default News;
