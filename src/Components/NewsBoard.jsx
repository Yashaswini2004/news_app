import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const url = `http://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API_KEY}&countries=in&limit=10`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {article.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title || "No Title"}
          desc={news.description || "No Description"}
          src={news.source || "Unknown Source"}
          url={news.url}
        />
      ))}
    </div>
  );
}
