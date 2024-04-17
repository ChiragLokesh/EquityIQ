import { useState, useEffect, useRef } from "react";
import { DateTime } from "luxon";
import SearchIcon from "src/assets/search.png";

function News() {
  const [news, setNews] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);

  const autofillSuggestions = [
    "Reliance Industries",
    "Tata Consultancy Services",
    "HDFC Bank",
    "Infosys",
    "Housing Development Finance Corporation",
    "ICICI Bank",
    "Kotak Mahindra Bank",
    "State Bank of India",
    "Larsen & Toubro",
    "Axis Bank",
    "Bharti Airtel",
    "Hindustan Unilever",
    "ITC",
    "Bajaj Finance",
    "Maruti Suzuki India",
    "Wipro",
    "Asian Paints",
    "Tech Mahindra",
    "UltraTech Cement",
    "Titan Company",
    "Sun Pharmaceutical Industries",
    "Mahindra & Mahindra",
    "NTPC",
    "Reliance",
    "Tata Steel",
    "Coal India",
    "IndusInd Bank",
    "Adani Ports and Special Economic Zone",
    "HDFC Life Insurance Company",
    "Bajaj Auto",
    "Power Grid Corporation of India",
    "Tata Motors",
    "Hero MotoCorp",
    "Hindalco Industries",
    "Oil and Natural Gas Corporation",
    "JSW Steel",
    "UPL",
    "Grasim Industries",
    "HCL Technologies",
    "Dr. Reddy's Laboratories",
    "Shree Cement",
  ];

  useEffect(() => {
    async function fetchInitialNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );
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

    fetchInitialNews();
  }, []);

  async function getNews() {
    setError("");
    if (!query) {
      setError("Please enter a search query.");
      return;
    }
    setLoading(true); // Set loading to true when search is initiated
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${query}&category=business&country=in&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
      setError(`Fetch news failed: ${error.message}`);
      console.error("Fetch news failed:", error);
    } finally {
      setLoading(false); // Set loading to false after search is completed
    }
  }

  const formattedDate = (date) => DateTime.fromISO(date).toFormat("MM/dd/yyyy");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    // Filter suggestions based on input value
    const filteredSuggestions = autofillSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    getNews();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.closest(".suggestion-list")
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions
    setShowSuggestions(false); // Hide suggestions when a suggestion is clicked
    getNews(); // Fetch news based on the clicked suggestion
  };

  return (
    <div className="bg-gray-900 text-white flex flex-col h-screen gap-16 overflow-y-auto">
      <div className="flex justify-center">
        <h2 className="text-white font-medium text-xl pt-10">
          Search for articles based on keywords
        </h2>
      </div>
      <form
        onSubmit={handleSearchSubmit}
        className="flex justify-center h-[20vh] relative"
      >
        <div
          style={{ margin: "20px", display: "flex", alignItems: "center" }}
          ref={searchRef}
        >
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search articles"
            className="text-black"
            style={{
              marginRight: "10px",
              padding: "10px",
              width: "300px",
              border: "2px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
            onClick={toggleSuggestions}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
            }}
          >
            <img src={SearchIcon} alt="search" className="w-6 h-6" />
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <ul
            className="suggestion-list absolute z-10 bg-white w-80 rounded-b-lg border border-gray-300 top-full mt-1"
            onClick={(e) => e.stopPropagation()}
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
      {loading && <div className="text-white text-center mt-2">Loading...</div>}
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
                          <h3>|</h3>
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
