import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllNews = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchnewss = async () => {
      setLoading(true);
      setError(null);
      const apiUrl =
        process.env.NODE_ENV === "production"
          ? "https://ourservicestech.com.ng/farmmart_api/v2/news/list_last10_news"
          : "/farmmart_api/v2/news/list_last10_news";

      const fetchednewss = [];
      try {
        try {
          const response = await axios.get(apiUrl);
          if (response.data) {
            setAllNews(response.data.data); // Assuming news data is in `data`
          }
        } catch (err) {
          console.warn(`news with ID not found or error occurred`);
        }
      } catch (err) {
        setError("Failed to fetch newss. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchnewss();
  }, []);

  if (loading) return <p>Loading newss...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">News</h1>
      {allNews.length > 0 ? (
        <ul className="space-y-4">
          {allNews.map((news) => (
            <Link
              key={news.id}
              to={`/user/news/${news.id}`}
              state={{
                newsId: news.id,
                newsName: news.news_name,
                newsCategory: news.category,
                newsSubCategory: news.sub_category,
                newsDescription: news.news_desc,
                newsOwner: news.news_user
              }}
            >
              <li key={news.id} className="p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">{news.news_name}</h2>
                <p>{news.news_desc}</p>
                <p>Category: {news.category}, Subcategory:{news.subcategory}</p>
                <p className="text-gray-500 text-sm">
                  Created by: {news.news_user}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
};

export default AllNews;
