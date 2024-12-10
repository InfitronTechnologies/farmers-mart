import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Forums = () => {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      setLoading(true);
      setError(null);
      const apiUrl =
        process.env.NODE_ENV === "production"
          ? "https://ourservicestech.com.ng/farmmart_api/v2/forum/select_by_forum_id"
          : "/farmmart_api/v2/forum/select_by_forum_id";

      const fetchedForums = [];
      try {
        for (let id = 11; id <= 21; id++) {
          try {
            const response = await axios.get(`${apiUrl}?id=${id}`);
            if (response.data) {
              fetchedForums.push(response.data.data); // Assuming forum data is in `data`
            }
          } catch (err) {
            console.warn(`Forum with ID ${id} not found or error occurred`);
          }
        }
        setForums(fetchedForums);
      } catch (err) {
        setError("Failed to fetch forums. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForums();
  }, []);

  if (loading) return <p>Loading forums...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Forums</h1>
      {forums.length > 0 ? (
        <ul className="space-y-4">
          {forums.map((forum, index) => (
            <Link
              to={`/user/forums/${forum.id}`}
              state={{
                forumName: forum.forum_name,
                forumCategory: forum.category,
                forumSubCategory: forum.sub_category,
                forumDescription: forum.forum_desc,
                subcategoryId: subcategory.id,
                subcategoryName: subcategory.sub_category_name,

                "id": "21",
        "forum_name": "Yam Festival",
        "forum_desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aperiam suscipit dignissimos, mollitia possimus quia harum unde. Reiciendis maiores culpa expedita facere iusto blanditiis itaque, corrupti sapiente voluptates eveniet. Quibusdam?\nLorem ips",
        "forum_image": "10-12-2024state.jpg",
        "category": "Tubers",
        "sub_category": "Yam",
        "forum_user": "Muqsit Lawal ",
              }}
            >
              <li key={index} className="p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">{forum.forum_name}</h2>
                <p>{forum.forum_desc}</p>
                <p>Category: {forum.category}, Subcategory:{forum.subcategory}</p>
                <p className="text-gray-500 text-sm">
                  Created by: {forum.forum_user}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No forums available.</p>
      )}
    </div>
  );
};

export default Forums;
