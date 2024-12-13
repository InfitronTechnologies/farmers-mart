import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllNews = () => {
  const [newss, setnewss] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchnewss = async () => {
      setLoading(true);
      setError(null);
      const apiUrl =
        process.env.NODE_ENV === "production"
          ? "https://ourservicestech.com.ng/farmmart_api/v2/news/select_by_news_id"
          : "/farmmart_api/v2/news/select_by_news_id";

      const fetchednewss = [];
      try {
        for (let id = 1; id <= 21; id++) {
          try {
            const response = await axios.get(`${apiUrl}?id=${id}`);
            if (response.data) {
              fetchednewss.push(response.data.data); // Assuming news data is in `data`
            }
          } catch (err) {
            console.warn(`news with ID ${id} not found or error occurred`);
          }
        }
        setnewss(fetchednewss);
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
      <h1 className="text-xl font-bold mb-4">newss</h1>
      {newss.length > 0 ? (
        <ul className="space-y-4">
          {newss.map((news, index) => (
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
              <li key={index} className="p-4 border rounded shadow">
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
        <p>No newss available.</p>
      )}
    </div>
  );
};

export default AllNews;
